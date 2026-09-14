import DOMPurify from "isomorphic-dompurify";

const HTML_CONFIG = {
  USE_PROFILES: { html: true },
  FORBID_TAGS: [
    "script",
    "style",
    "object",
    "embed",
    "form",
    "link",
    "meta",
    "base",
    "iframe",
  ],
  FORBID_ATTR: ["style"],
  ALLOW_DATA_ATTR: false,
};

const EMBED_CONFIG = {
  ALLOWED_TAGS: ["iframe"],
  ALLOWED_ATTR: [
    "src",
    "width",
    "height",
    "title",
    "allow",
    "allowfullscreen",
    "frameborder",
    "referrerpolicy",
    "loading",
  ],
  ALLOWED_URI_REGEXP:
    /^(?:https:\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)\/)/i,
  ALLOW_DATA_ATTR: false,
};

export function sanitizeHtml(html) {
  if (!html) return "";
  return DOMPurify.sanitize(String(html), HTML_CONFIG);
}

export function sanitizeEmbed(html) {
  if (!html) return "";
  const clean = DOMPurify.sanitize(String(html), EMBED_CONFIG);
  return clean.replaceAll(
    "https://www.youtube.com/",
    "https://www.youtube-nocookie.com/"
  );
}
