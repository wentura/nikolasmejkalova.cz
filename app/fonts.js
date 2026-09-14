import localFont from "next/font/local";

export const montserrat = localFont({
  src: "../public/montserrat.woff2",
  display: "swap",
  variable: "--font-montserrat",
  weight: "300",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const playfair = localFont({
  src: "../public/playfair.woff2",
  display: "swap",
  variable: "--font-playfair",
  preload: false,
  fallback: ["Georgia", "serif"],
});
