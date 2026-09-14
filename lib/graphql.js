import { WP_GRAPHQL_URL } from "@/lib/site";

const FETCH_TIMEOUT_MS = 12_000;
const inFlight = new Map();

async function fetchGraphQLUncached(query, variables = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error(`GraphQL request failed (${res.status})`);
    }

    const json = await res.json();
    if (json.errors?.length) {
      throw new Error("GraphQL query failed");
    }

    return json.data;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function fetchGraphQL(query, variables = {}) {
  const key = JSON.stringify({ query, variables });
  const cached = inFlight.get(key);
  if (cached) return cached;

  const request = fetchGraphQLUncached(query, variables).catch((error) => {
    inFlight.delete(key);
    throw error;
  });

  inFlight.set(key, request);
  return request;
}
