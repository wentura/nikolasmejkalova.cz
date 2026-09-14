import { fetchGraphQL } from "@/lib/graphql";
import { sanitize } from "isomorphic-dompurify";
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
  try {
    const data = await fetchGraphQL(GET_POST_IDS);
    const posts = data?.posts?.nodes ?? [];
    return posts.map((post) => ({ id: post.id }));
  } catch {
    return [];
  }
}

function stripTags(html) {
  return (html ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const data = await fetchGraphQL(GET_BLOGPOST, { id });
    const post = data?.post;

    if (!post) return { title: "Článek | Nikola Smejkalová" };

    const description = stripTags(post.content).slice(0, 160);

    return {
      title: `${post.title} | Nikola Smejkalová - Psych-K`,
      description: description ? `${description}…` : undefined,
      openGraph: {
        title: post.title,
      },
    };
  } catch {
    return { title: "Článek | Nikola Smejkalová" };
  }
}

function extractYouTubeId(html) {
  if (!html) return null;
  const match = String(html).match(
    /(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|shorts\/)|youtu\.be\/)([\w-]{6,20})/
  );
  return match ? match[1] : null;
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  let post = null;
  try {
    const data = await fetchGraphQL(GET_BLOGPOST, { id });
    post = data?.post ?? null;
  } catch {
    notFound();
  }

  if (!post) notFound();

  const youtubeId = extractYouTubeId(post.ytEmbed?.ytEmbed);

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12 blogPost">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
          {post.title}
        </h1>
        <div
          className="mb-6 text-gray-500 sm:text-lg md:mb-8 blogPost"
          dangerouslySetInnerHTML={{ __html: sanitize(post.content) }}
        />
        {youtubeId && (
          <div className="my-12 youtube-video-container">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
              title={post.title}
              loading="lazy"
              allow="accelerometer; encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-same-origin allow-presentation"
            />
          </div>
        )}
      </div>
    </div>
  );
}
