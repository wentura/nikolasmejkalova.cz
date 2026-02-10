import { fetchGraphQL } from "@/lib/graphql";
import { notFound } from "next/navigation";

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

export async function generateStaticParams() {
  const data = await fetchGraphQL(GET_POST_IDS);
  const posts = data?.posts?.nodes ?? [];
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const data = await fetchGraphQL(GET_BLOGPOST, { id });
  const post = data?.post;

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
  const data = await fetchGraphQL(GET_BLOGPOST, { id });
  const post = data?.post;

  if (!post) notFound();

  const embed = post.ytEmbed;

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12 blogPost">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
          {post.title}
        </h1>
        <div
          className="mb-6 text-gray-500 sm:text-lg md:mb-8 blogPost"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {embed?.ytEmbed && (
          <div
            className="my-12 text-gray-500 sm:text-lg md:mb-8 blogPost youtube-video-container"
            dangerouslySetInnerHTML={{ __html: embed.ytEmbed }}
          />
        )}
      </div>
    </div>
  );
}
