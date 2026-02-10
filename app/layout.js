import Contact from "@/components/contact";
import Footer from "@/components/footer";
import "@/public/style.css";
import "./globals.css";
const SITE_URL = "https://www.nikolasmejkalova.cz";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cesta k vnitřnímu klidu a lepšímu životu | Nikola Smejkalová",
    template: "%s | Nikola Smejkalová",
  },
  description:
    "Cesta k vnitřnímu klidu a lepšímu životu. Jsem facilitátorka metody Psych-K. Pomohu vám zbavit se neprospěšného myšlení a uzdravit i neduhy, se kterými si doktoři nevědí rady. Bez léků a neinvazivně.",
  keywords:
    "psych-k, psychk, metoda psych-k, facilitátorka psych-k, Nikola Smejkalová, vnitřní klid, lepší život",
  author: "Nikola Smejkalová",
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
    <html lang="cs" suppressHydrationWarning={true}>
      <body className="mont font-base">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
