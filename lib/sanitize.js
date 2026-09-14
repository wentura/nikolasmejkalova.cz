import DOMPurify from "isomorphic-dompurify";

const ALLOWED_EMBED_HOSTS = [
  "www.youtube.com",
  "youtube.com",
  "www.youtube-nocookie.com",
  "youtube-nocookie.com",
  "player.vimeo.com",
];

function isAllowedEmbedSrc(src) {
  try {
    const url = new URL(src, "https://example.invalid");
    return url.protocol === "https:" && ALLOWED_EMBED_HOSTS.includes(url.host);
  } catch {
    return false;
  }
}

// Iframe se povoluje jen pro známé video hostitele, jinak by šlo přes redakci
// WordPressu vložit libovolný cizí rámec.
DOMPurify.addHook("uponSanitizeElement", (node, data) => {
  if (data.tagName !== "iframe") return;
  const src = node.getAttribute?.("src") || "";
  if (!isAllowedEmbedSrc(src)) {
    node.remove();
  }
});

export function sanitizeHtml(html) {
  if (!html) return "";
  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
}

export function sanitizeEmbed(html) {
  if (!html) return "";
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_TAGS: ["iframe"],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "frameborder",
      "loading",
      "referrerpolicy",
      "title",
    ],
  });
}

export function htmlToPlainText(html) {
  if (!html) return "";
  return DOMPurify.sanitize(html, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
    .replace(/\s+/g, " ")
    .trim();
}
