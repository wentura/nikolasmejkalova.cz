export async function loadPosts() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://nikolasmejkalova.zbyneksvoboda.cz/wp-json/wp/v2/posts"
  );
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return data;
}
