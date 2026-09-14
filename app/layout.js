import { CONTACT, SITE_URL } from "@/lib/site";
import { alexBrush, montserrat, playfair } from "./fonts";
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
      className={`${montserrat.variable} ${playfair.variable} ${alexBrush.variable}`}
      suppressHydrationWarning={true}
    >
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
