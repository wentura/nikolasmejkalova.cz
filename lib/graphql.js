const GRAPHQL_URL = "https://nikolasmejkalova.zbyneksvoboda.cz/graphql";

export async function fetchGraphQL(query, variables = {}) {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error("Failed to fetch GraphQL");
  }
  return json.data;
}
