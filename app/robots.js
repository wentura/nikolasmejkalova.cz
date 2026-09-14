export const dynamic = "force-static";

export default function Robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.nikolasmejkalova.cz/sitemap.xml",
  };
}
