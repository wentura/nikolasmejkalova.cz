import Heading from "@/components/heading";
import How from "@/components/how";
import Sluzby from "@/components/sluzby";

export const metadata = {
  title: "Terapie Psych-K",
  description:
    "Individuální sezení metody Psych-K s Nikolu Smejkalovou. Transformace omezujících vzorců myšlení a chování.",
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
