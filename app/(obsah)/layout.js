import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Menu from "@/components/menuObsah";

export const metadata = {
  description:
    "Facilitátorka metody Psych-K. Pomohu vám zbavit se neprospěšného myšlení a uzdravit i neduhy, se kterými si doktoři nevědí rady. Bez léků a neinvazivně.",
  keywords: [
    "psych-k",
    "psychk",
    "metoda psych-k",
    "facilitátorka psych-k",
    "Nikola Smejkalová",
  ],
};

export default function Layout({ children }) {
  return (
    <main>
      <Menu />
      <div className="main">{children}</div>
      <Contact />
      <Footer />
    </main>
  );
}
