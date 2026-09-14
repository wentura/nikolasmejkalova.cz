import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Menu from "@/components/menuObsah";

export const metadata = {
  title: "Nikola Smejkalová - facilitátorka metody Psych-K",
  description:
    "Facilitátorka metody Psych-K. Pomohu vám zbavit se neprospěšného myšlení a uzdravit i neduhy, se kterými si doktoři nevědí rady. Bez léků a neinvazivně.",
  keywords:
    "psych-k, psychk, metoda psych-k, facilitátorka psych-k, Nikola Smejkalová",
  authors: [{ name: "Nikola Smejkalová" }],
};

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main className="main">{children}</main>
      <Contact />
      <Footer />
    </>
  );
}
