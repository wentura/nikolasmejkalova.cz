import Heading from "@/components/heading";
import How from "@/components/how";
import Sluzby from "@/components/sluzby";

export const metadata = {
  title: "Terapie | Nikola Smejkalová",
  description:
    "Jak probíhá terapeutické sezení a facilitace metody Psych-K. Individuální přístup a transformace přesvědčení.",
};

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
