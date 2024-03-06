import Heading from "@/components/heading";
import How from "@/components/how";
import Recenze from "@/components/recenze";
import Sluzby from "@/components/sluzby";
import React from "react";
import Kontakt from "../kontakt/page";

export default function Terapie() {
  return (
    <div>
      <Sluzby />
      <Heading
        title="Ráda vám ukážu jak změnit váš svět"
        text=" a jak se můžete stát tvořitelem vašeho života."
        klass="font-heading"
      />
      <How />
    </div>
  );
}
