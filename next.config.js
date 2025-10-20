module.exports = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    minimumCacheTTL: 3660,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@apollo/client"],
  },
};
