import Heading from "@/components/heading";
import How from "@/components/how";
import Sluzby from "@/components/sluzby";
import { fetchGraphQL } from "@/lib/graphql";
import Image from "next/image";
import Link from "next/link";

const GET_NABIDKA = `
  query GetPosts {
    posts(where: { categoryName: "blog" }) {
      nodes {
        id
        date
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        title
        perex {
          perex
        }
      }
    }
  }
`;

export async function generateMetadata() {
  return {
    title: "Blog | Nikola Smejkalová - Psych-K",
    description:
      "Články o metodě Psych-K, vnitřním klidu a osobním rozvoji. Facilitátorka Nikola Smejkalová.",
  };
}

export default async function Blog() {
  const data = await fetchGraphQL(GET_NABIDKA);
  const posts = data?.posts?.nodes ?? [];

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12 blog">
      <div className="">
        {posts.length === 0 && <p>Žádné články k zobrazení.</p>}
        {posts.map((post) => (
          <div
            className="blogList flex flex-col md:flex-row pb-16"
            key={post.id}
          >
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
                  <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto relative">
                    {post.featuredImage?.node?.sourceUrl ? (
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-200" />
                    )}
                  </div>

                  <div className="md:col-span-2 md:pt-8">
                    <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                      <Link
                        href={`/blogPost/${post.id}`}
                        className="underline underline-offset-8 decoration-gray-300 decoration-1 hover:decoration-gray-700 hover:decoration-3 transition duration-300"
                      >
                        {post.title}
                      </Link>
                    </h1>

                    {post.perex?.perex && (
                      <p
                        className="mb-6 text-gray-500 sm:text-lg md:mb-8"
                        dangerouslySetInnerHTML={{ __html: post.perex.perex }}
                      />
                    )}

                    <div className="readMore text-right text-sm underline underline-offset-4 decoration-gray-300 decoration-1 hover:decoration-gray-700 hover:decoration-3 transition duration-300 pt-4 md:pt-12">
                      <Link href={`/blogPost/${post.id}`}>
                        číst příspěvek
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
