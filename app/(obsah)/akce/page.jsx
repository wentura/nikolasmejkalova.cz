export const metadata = {
  title: "Akce a workshopy | Nikola Smejkalová",
  description:
    "Přehled plánovaných akcí, přednášek a workshopů o metodě Psych-K a osobním rozvoji.",
};

export default function AkcePage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-12 lg:py-20 text-center">
      <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl play nadpis">
        Plánované akce a workshopy
      </h1>
      <p className="max-w-screen-md mx-auto text-gray-500 md:text-lg">
        Aktuálně nejsou vypsány žádné veřejné akce ani workshopy. Sledujte tuto stránku nebo mě kontaktujte pro individuální spolupráci.
      </p>
    </div>
  );
}
