import React from "react";

export default function Sluzby() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">
      {/* text - start */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1708711872/nikolasmejkalova_cz/W45A4259copy_a2kqzf.webp"
                loading="lazy"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="md:pt-8">
              {/* <h2 className="mt-8 md:mt-0 text-center text-5xl md:text-6xl mb-2 text-gray-600 Heading"> */}
              <h2 className="mt-8 md:mt-0 mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Věnuji se psychosomatice
              </h2>
              <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                Z mé zkušenosti{" "}
                <span className="font-extrabold">
                  &quot;vše souvisí se vším&quot;
                </span>
                , spojíme-li jedno s druhým, dokážeme efektivně změnit vše, co
                nás tíží.
              </p>
              <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                Pracuji s psychickými bloky i s fyzickými projevy
                <span className="font-extrabold"> ne-moci</span>.
              </p>
              <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                Díky mým zkušenostem vím, že lze uzdravit i neduhy, se kterými
                si doktoři nevědí rady. Bez léků a neinvazivně.
              </p>
              <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                Za dobu své praxe, jsem se setkala již s mnoha případy, které
                jsme zvládli vyřešit. Nejčastěji např. potravinové alergie,
                ekzémy, menstruační problémy, nemožnost otěhotnět, migrény,
                ztráta sluchu, různé druhy nevolností a bolestí, paniky,
                úzkosti, strachy, stresové situace, aj.
              </p>
              <p className="text-center pt-12">
                <a
                  href="/metoda"
                  className="text-gray-500 text-xl py-4 px-8 text-center border-4 border-amber-400 rounded-xl shadow-2xl hover:shadow-md transition duration-500 hover:scale-95 hover:border-amber-500"
                >
                  věnuji se <span className="font-bold">PSYCH-K</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* !!! dalsi */}
    </div>
  );
}
