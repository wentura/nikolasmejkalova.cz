import Matomo from "@/components/matomo";
import { montserrat, playfair } from "./fonts";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

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
  description:
    "Facilitátorka metody Psych-K. Pomáhám zbavit se neprospěšného myšlení a uzdravit neduhy bez léků a neinvazivně.",
  url: SITE_URL,
  telephone: "+420737081416",
  email: "nsnikola@email.cz",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="cs"
      className={`${montserrat.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className={`${montserrat.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Matomo />
      </body>
    </html>
  );
}
