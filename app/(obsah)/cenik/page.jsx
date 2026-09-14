import How from "@/components/how";
import Info from "@/components/informace";

export const metadata = {
  title: "Ceník | Nikola Smejkalová",
  description:
    "Ceník terapeutických sezení metody Psych-K. Jedno terapeutické sezení trvá 60–90 minut.",
};

export default function Cenik() {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          Ceny sezení
        </h1>

        <div className="grid mb-6 gap-x-6 gap-y-12 sm:grid-cols-1 md:mb-8 lg:grid-cols-1 lg:gap-x-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col gap-4 p-4 pt-6 border rounded-lg">
              <h2 className="text-2xl font-semibold text-center text-gray-800">
                Jedno terapeutické sezení, které trvá 60–90 minut
              </h2>

              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl font-bold text-gray-800">
                  2000 Kč
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <How />
      <Info />
    </div>
  );
}
