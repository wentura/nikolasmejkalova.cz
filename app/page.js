import Contact from "@/components/contact";
import Content from "@/components/content";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import How from "@/components/how";
import Recenze from "@/components/recenze";
import Sluzby from "@/components/sluzby";
import "@/public/style.css";
import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <main>
      <Hero />
      <Heading
        title="Pomohu vám zbavit se neprospěšného myšlení"
        text="a nahradit to myšlenkami prosperujícími, se kterými porostete."
        klass="font-heading"
      />
      <Heading
        title="Ráda vám ukážu jak změnit váš svět"
        text=" a jak se můžete stát tvořitelem vašeho života."
        klass="font-heading2"
      />
      <Heading title="Odpovědí jsi ty sám" text="" klass="font-heading3" />
      <Heading title="Vše souvisí se vším." text="" klass="font-heading4" />
      <Heading title="Vše souvisí se vším." text="" klass="font-heading" />
      <Sluzby />
      <How />
      <Content />
      <Recenze />
      <Contact />
    </main>
  );
}
