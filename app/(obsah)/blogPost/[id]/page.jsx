import { cache } from "react";
import { notFound } from "next/navigation";
import { sanitize } from "isomorphic-dompurify";
import { fetchGraphQL } from "@/lib/graphql";

const GET_BLOGPOST = `
  query GetPost($id: ID!) {
    post(id: $id, idType: ID) {
      id
      title
      content
      ytEmbed {
        ytEmbed
      }
    }
  }
`;

const GET_POST_IDS = `
  query GetPostIds {
    posts(where: { categoryName: "blog" }) {
      nodes {
        id
      }
    }
  }
`;

const getPost = cache(async (id) => {
  const data = await fetchGraphQL(GET_BLOGPOST, { id });
  return data?.post ?? null;
});

export async function generateStaticParams() {
  const data = await fetchGraphQL(GET_POST_IDS);
  const posts = data?.posts?.nodes ?? [];
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) return { title: "Článek | Nikola Smejkalová" };

  return {
    title: `${post.title} | Nikola Smejkalová - Psych-K`,
    description: post.content?.replace(/<[^>]*>/g, "").slice(0, 160) + "...",
    openGraph: {
      title: post.title,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) notFound();

  const embed = post.ytEmbed;

  return (
    <article className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12 blogPost">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
          {post.title}
        </h1>
        <div
          className="mb-6 text-gray-500 sm:text-lg md:mb-8 blogPost"
          dangerouslySetInnerHTML={{ __html: sanitize(post.content) }}
        />
        {embed?.ytEmbed && (
          <div
            className="my-12 text-gray-500 sm:text-lg md:mb-8 blogPost youtube-video-container"
            dangerouslySetInnerHTML={{
              __html: sanitize(embed.ytEmbed, {
                ADD_TAGS: ["iframe"],
                ADD_ATTR: [
                  "allow",
                  "allowfullscreen",
                  "frameborder",
                  "scrolling",
                ],
              }),
            }}
          />
        )}
      </div>
    </article>
  );
}
