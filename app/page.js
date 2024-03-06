import Content from "@/components/content";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import How from "@/components/how";
import Recenze from "@/components/recenze";
import Sluzby from "@/components/sluzby";

import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <main>
      <Hero />
      <Sluzby />
      <Heading
        title="Pomohu vám zbavit se neprospěšného myšlení"
        text="a nahradit to myšlenkami prosperujícími, se kterými porostete."
        klass="font-heading"
      />
      {/* <Heading
        title="Ráda vám ukážu jak změnit váš svět"
        text=" a jak se můžete stát tvořitelem vašeho života."
        klass="font-heading"
      /> */}
      <How />
      <Heading title="Odpovědí jsi ty sám" text="" klass="font-heading" />
      <Content />
      <Heading title="Vše souvisí se vším." text="" klass="font-heading" />
      <Recenze lp="1" />
    </main>
  );
}
