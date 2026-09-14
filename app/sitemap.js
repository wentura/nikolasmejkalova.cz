import { fetchGraphQL } from "@/lib/graphql";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const GET_POST_IDS = `
  query GetPostIds {
    posts(where: { categoryName: "blog" }) {
      nodes {
        id
        modified
      }
    }
  }
`;

const staticPages = [
  { url: "", priority: 1.0 },
  { url: "recenze/", priority: 0.8 },
  { url: "blog/", priority: 0.8 },
  { url: "cenik/", priority: 0.8 },
  { url: "kontakt/", priority: 0.8 },
  { url: "metoda/", priority: 0.8 },
  { url: "terapie/", priority: 0.8 },
  { url: "akce/", priority: 0.6 },
];

export default async function sitemap() {
  let posts = [];
  try {
    const blogData = await fetchGraphQL(GET_POST_IDS);
    posts = blogData?.posts?.nodes ?? [];
  } catch {
    posts = [];
  }

  const blogUrls = posts.map((post) => ({
    url: `${SITE_URL}/blogPost/${post.id}/`,
    lastModified: post.modified ? new Date(post.modified) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const staticUrls = staticPages.map((page) => ({
    url: `${SITE_URL}/${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page.priority,
  }));

  return [...staticUrls, ...blogUrls];
}
