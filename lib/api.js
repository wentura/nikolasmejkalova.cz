const API_URL = process.env.WP_API_URL;

const FETCH_TIMEOUT_MS = 10_000;

async function fetchAPI(query, { variables } = {}) {
  if (!API_URL) {
    throw new Error("Missing WP_API_URL environment variable");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  let res;
  try {
    res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 },
      signal: controller.signal,
    });
  } catch (err) {
    if (err?.name === "AbortError") {
      throw new Error("API request timed out");
    }
    throw new Error("API network error");
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) {
    throw new Error(`API responded with status ${res.status}`);
  }

  const json = await res.json();
  if (json.errors) {
    console.error("API errors:", json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export default fetchAPI;
