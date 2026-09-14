import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import How from "@/components/how";
import Info from "@/components/informace";
import Matomo from "@/components/matomo";
import Menu from "@/components/menu";
import Recenze from "@/components/recenze";
import Sluzby from "@/components/sluzby";
import Spravne from "@/components/spravne";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Sluzby />
      <Heading
        title="Pomohu vám zbavit se neprospěšného myšlení"
        text="a nahradit to myšlenkami prosperujícími, se kterými porostete."
        klass="font-heading"
      />
      <How />
      <Heading title="Odpovědí jsi ty sám" text="" klass="font-heading" />
      <Spravne />
      <Heading
        title="Potkáváme se i na dálku, on-line."
        text=""
        klass="font-heading max-w-[20ch] md:max-w-full mx-auto"
      />
      <Info />
      <Heading title="Vše souvisí se vším." text="" klass="font-heading" />
      <Recenze lp="true" />
      <Contact />
      <Footer />
      <Matomo />
    </main>
  );
}
