export const metadata = {
  title: "Kontakt",
  description:
    "Sjednejte si terapeutické sezení s Nikolou Smejkalovou – telefonicky nebo e-mailem. Setkat se můžeme osobně i online.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function Kontakt() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-6 sm:py-8 lg:py-12">
      <h1 className="mb-4 text-center text-3xl md:text-5xl play zvyraznenyText nadpis">
        Pojďme se spojit
      </h1>
      <p className="mx-auto max-w-2xl text-center text-gray-500 md:text-lg">
        Ozvěte se mi telefonicky nebo e-mailem – ráda si s vámi domluvím termín
        sezení. Potkat se můžeme osobně i online.
      </p>
    </div>
  );
}
