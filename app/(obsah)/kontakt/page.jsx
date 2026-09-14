import Contact from "@/components/contact";

export const metadata = {
  title: "Kontakt | Nikola Smejkalová",
  description:
    "Kontaktujte Nikolu Smejkalovou – facilitátorku metody Psych-K. Objednejte si sezení online nebo osobně.",
};

export default function KontaktPage() {
  return (
    <div>
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 mx-auto md:px-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl play nadpis">
            Kontakt
          </h1>
          <p className="max-w-screen-md mx-auto text-gray-500 md:text-lg">
            Máte dotaz nebo si chcete sjednat termín sezení? Neváhejte se mi ozvat telefonicky nebo e-mailem.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
