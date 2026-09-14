import Heading from "@/components/heading";
import How from "@/components/how";
import Sluzby from "@/components/sluzby";

export const metadata = {
  title: "Terapie",
  description:
    "Transformační terapie s Nikolou Smejkalovou – společně odhalíme a změníme omezující vzorce myšlení a chování.",
  alternates: {
    canonical: "/terapie",
  },
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
