import { CONTACT, SITE_URL } from "@/lib/site";
import { Alex_Brush } from "next/font/google";
import "./fonts.css";
import "./globals.css";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-alex-brush",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cesta k vnitřnímu klidu a lepšímu životu | Nikola Smejkalová",
    template: "%s | Nikola Smejkalová",
  },
  description:
    "Cesta k vnitřnímu klidu a lepšímu životu. Jsem facilitátorka metody Psych-K. Pomohu vám zbavit se neprospěšného myšlení a uzdravit i neduhy, se kterými si doktoři nevědí rady. Bez léků a neinvazivně.",
  keywords: [
    "psych-k",
    "psychk",
    "metoda psych-k",
    "facilitátorka psych-k",
    "Nikola Smejkalová",
    "vnitřní klid",
    "lepší život",
  ],
  authors: [{ name: "Nikola Smejkalová" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE_URL,
    siteName: "Nikola Smejkalová - Psych-K",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nikola Smejkalová",
  jobTitle: "Facilitátorka metody Psych-K",
  description:
    "Facilitátorka metody Psych-K. Pomáhám zbavit se neprospěšného myšlení a uzdravit neduhy bez léků a neinvazivně.",
  url: SITE_URL,
  telephone: CONTACT.phone,
  email: CONTACT.email,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="cs"
      className={alexBrush.variable}
      suppressHydrationWarning={true}
    >
      <head>
        <link
          rel="preload"
          href="/montserrat.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="mont font-base">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
