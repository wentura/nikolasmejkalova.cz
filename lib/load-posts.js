const POSTS_URL =
  process.env.WP_POSTS_URL ??
  "https://nikolasmejkalova.zbyneksvoboda.cz/wp-json/wp/v2/posts";

export async function loadPosts() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const res = await fetch(POSTS_URL, {
      next: { revalidate: 3600 },
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error(`Posts API responded with status ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    if (err?.name === "AbortError") {
      throw new Error("Posts request timed out");
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}
