import { SITE_URL } from "@/lib/site";
import { fetchGraphQL } from "@/lib/graphql";

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
  { url: "recenze", priority: 0.8 },
  { url: "blog", priority: 0.8 },
  { url: "cenik", priority: 0.8 },
  { url: "kontakt", priority: 0.8 },
  { url: "metoda", priority: 0.8 },
  { url: "terapie", priority: 0.8 },
];

export default async function sitemap() {
  const now = new Date();

  // Web běží s trailingSlash: true, sitemapa musí ukazovat na stejné URL jako
  // canonical, jinak se každý záznam přesměrovává.
  const staticUrls = staticPages.map((page) => ({
    url: page.url ? `${SITE_URL}/${page.url}/` : `${SITE_URL}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: page.priority,
  }));

  let posts = [];
  try {
    const blogData = await fetchGraphQL(GET_POST_IDS);
    posts = blogData?.posts?.nodes ?? [];
  } catch (error) {
    // Sitemapa bez článků je lepší než spadlý build celého webu.
    console.warn("Sitemapa: články se nepodařilo načíst –", error.message);
  }

  const blogUrls = posts.map((post) => ({
    url: `${SITE_URL}/blogPost/${post.id}/`,
    lastModified: post.modified ? new Date(post.modified) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}
