const GRAPHQL_URL =
  process.env.WP_GRAPHQL_URL ||
  "https://nikolasmejkalova.zbyneksvoboda.cz/graphql";

const TIMEOUT_MS = Number(process.env.WP_GRAPHQL_TIMEOUT_MS || 15000);
const MAX_ATTEMPTS = Number(process.env.WP_GRAPHQL_RETRIES || 4);

// Během `next build` se stejný dotaz volá z několika míst téhož workeru
// (generateStaticParams, generateMetadata, komponenta). WordPress na burst
// shodných dotazů odpovídal HTML chybovou stránkou a build padal, proto se
// odpovědi drží po dobu běhu procesu.
const inFlight = new Map();

function cacheKey(query, variables) {
  return `${query}::${JSON.stringify(variables)}`;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function requestOnce(query, variables) {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  const body = await res.text();

  if (!res.ok) {
    throw new Error(
      `GraphQL HTTP ${res.status} ${res.statusText} (${body.slice(0, 200)})`
    );
  }

  let json;
  try {
    json = JSON.parse(body);
  } catch {
    throw new Error(
      `GraphQL vrátilo odpověď, která není JSON (content-type: ${
        res.headers.get("content-type") || "?"
      }): ${body.slice(0, 200)}`
    );
  }

  if (json.errors?.length) {
    throw new Error(
      `GraphQL errors: ${json.errors.map((e) => e.message).join("; ")}`
    );
  }

  return json.data;
}

async function requestWithRetry(query, variables) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      return await requestOnce(query, variables);
    } catch (error) {
      lastError = error;
      if (attempt < MAX_ATTEMPTS) {
        await delay(500 * 2 ** (attempt - 1));
      }
    }
  }

  throw new Error(
    `Dotaz na ${GRAPHQL_URL} selhal po ${MAX_ATTEMPTS} pokusech: ${lastError.message}`,
    { cause: lastError }
  );
}

export async function fetchGraphQL(query, variables = {}) {
  const key = cacheKey(query, variables);
  const cached = inFlight.get(key);
  if (cached) return cached;

  const promise = requestWithRetry(query, variables).catch((error) => {
    inFlight.delete(key);
    throw error;
  });

  inFlight.set(key, promise);
  return promise;
}
