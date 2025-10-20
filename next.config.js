module.exports = {
  images: {
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
