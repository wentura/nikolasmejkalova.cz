/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // Statický export nemá optimalizační server, transformace řeší loader.
    unoptimized: false,
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
    // Největší obrázek na webu má ~1000 px, výchozí varianty do 3840 px jsou
    // zbytečné a zvětšují fallback `src`.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 3660,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "nikolasmejkalova.zbyneksvoboda.cz",
      },
    ],
  },
};
