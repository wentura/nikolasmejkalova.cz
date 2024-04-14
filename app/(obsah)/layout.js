import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Menu from "@/components/menuObsah";
import "@/public/style.css";
import { ApolloWrapper } from "../ApolloWrapper";
import "../globals.css";
export const metadata = {
  title: "Nikola Smejkalová, metada psych-k",
  description:
    "facilitatorka metody psych-k. Pomohu vám zbavit se neprospěšného myšlení a uzdravit i neduhy, se kterými si doktoři nevědí rady. Bez léků a neinvazivně.",
  keywords:
    "psych-k, psychk, metoda psych-k, facilitátorka psych-k, Nikola Smejkalová",
  author: "Nikola Smejkalová",
  url: "https://www.nikolasmejkalova.cz/",
};

export default function Layout({ children }) {
  return (
    <main>
      <Menu />
      <ApolloWrapper className="main">{children}</ApolloWrapper>
      <Contact />
      <Footer />
    </main>
  );
}
