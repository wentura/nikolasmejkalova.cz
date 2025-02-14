import Contact from "@/components/contact";
import Footer from "@/components/footer";
import "@/public/style.css";
import "./globals.css";
export const metadata = {
  title: "Cesta k vnitřnímu klidu a lepšímu životu",
  description:
    "Cesta k vnitřnímu klidu a lepšímu životu. Jsem facilitátorka metody Psych-K. Pomohu vám zbavit se neprospěšného myšlení a uzdravit i neduhy, se kterými si doktoři nevědí rady. Bez léků a neinvazivně.",
  keywords:
    "psych-k, psychk, metoda psych-k, facilitátorka psych-k, Nikola Smejkalová, vnitřní klid, lepší život",
  author: "Nikola Smejkalová",
  url: "https://www.nikolasmejkalova.cz/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="mont font-base">
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
