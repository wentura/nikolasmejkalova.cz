const GRAPHQL_URL =
  process.env.WP_GRAPHQL_URL ??
  "https://nikolasmejkalova.zbyneksvoboda.cz/graphql";

const FETCH_TIMEOUT_MS = 10_000;

export async function fetchGraphQL(query, variables = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  let res;
  try {
    res = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
      // Statický export: data se tahají v buildu, cachujeme je.
      // Nezdařený build WP nesmí shodit celý web.
      next: { revalidate: 3600 },
      signal: controller.signal,
    });
  } catch (err) {
    if (err?.name === "AbortError") {
      throw new Error("GraphQL request timed out");
    }
    throw new Error("GraphQL network error");
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) {
    throw new Error(`GraphQL responded with status ${res.status}`);
  }

  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error("Failed to fetch GraphQL");
  }
  return json.data;
}
