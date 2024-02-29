import Link from "next/link";
async function getPosts() {
  const query = `
  {
    posts {
      nodes {
      ... on Post {
        id
        title
        content
        excerpt
		slug
        featuredImage {
          node {
            sourceUrl
			mediaDetails {
              height
              width
            }
          }
        }
      }
    }
    }
  }
  `;

  const res = await fetch(
    `${process.env.WP_QRAPHQL_URL}?query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // ... any other headers you need to include (like authentication tokens)
      },
      cache: "no-store",
    }
  );

  const { data } = await res.json();

  return data.posts.nodes;
}

export default async function PostList() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border-b-2 py-4">
          <h3>title- {post.title}</h3>
          <h3>slug- {post.slug}</h3>
          {}
          <div
            dangerouslySetInnerHTML={{
              __html: post.excerpt,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
          {post.featuredImage.node.sourceUrl}
          {/* {post.featuredImage.node.mediaDetails.height} */}
          <img
            src={post.featuredImage.node.sourceUrl}
            width={post.featuredImage.node.mediaDetails.widht}
            height={post.featuredImage.node.mediaDetails.height}
          />
        </div>
      ))}
    </div>
  );
}
