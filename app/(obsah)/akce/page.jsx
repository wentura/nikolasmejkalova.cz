export const metadata = {
  title: "Akce",
  description:
    "Chystané workshopy a akce Nikoly Smejkalové. Termíny se právě připravují.",
  alternates: {
    canonical: "/akce",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AkcePage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-6 sm:py-8 lg:py-12">
      <h1 className="mb-4 text-center text-3xl md:text-5xl play zvyraznenyText nadpis">
        Akce
      </h1>
      <p className="mx-auto max-w-2xl text-center text-gray-500 md:text-lg">
        Právě připravuji termíny nejbližších workshopů. Sledujte tuto stránku
        nebo se mi ozvěte a ráda vám dám vědět, jakmile bude nová akce
        vypsaná.
      </p>
    </div>
  );
}
