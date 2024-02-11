import Contact from "@/components/contact";
import Content from "@/components/content";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import How from "@/components/how";
import Recenze from "@/components/recenze";
import Sluzby from "@/components/sluzby";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Heading
        title="Pomohu vám zbavit se neprospěšného myšlení"
        text="a nahradit to myšlenkami prosperujícími, se kterými porostete."
      />
      <Sluzby />
      <Heading
        title="Ráda vám ukážu jak změnit váš svět"
        text=" a jak se můžete stát tvořitelem vašeho života."
      />

      <How />
      <Heading title="Odpovědí jsi ty sám" text="" />

      <Content />
      <Heading title="Vše souvisí se vším." text="" />
      <Recenze />
      <Heading title="Vše souvisí se vším." text="" />
      <Contact />
    </main>
  );
}
