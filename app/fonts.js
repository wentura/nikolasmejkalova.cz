import { Alex_Brush } from "next/font/google";
import localFont from "next/font/local";

// Oba lokální fonty jsou variabilní (osa wght), proto jediný soubor pokrývá
// celý rozsah tučnosti.
export const montserrat = localFont({
  src: "./fonts/montserrat.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-montserrat",
  adjustFontFallback: "Arial",
});

export const playfair = localFont({
  src: "./fonts/playfair.woff2",
  weight: "300 900",
  style: "normal",
  display: "swap",
  variable: "--font-playfair",
  adjustFontFallback: "Times New Roman",
});

// Bez preloadu: Alex Brush zdobí až nadpisy pod prvním viewportem, přednost na
// kritické cestě mají Montserrat a Playfair.
export const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-alex-brush",
  preload: false,
});
