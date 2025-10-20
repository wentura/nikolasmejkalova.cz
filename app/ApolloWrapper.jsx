"use client";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useEffect, useState } from "react";

const httpLink = new HttpLink({
  uri: "https://nikolasmejkalova.zbyneksvoboda.cz/graphql",
  fetchOptions: { cache: "no-store" },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
