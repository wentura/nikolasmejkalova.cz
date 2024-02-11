import React from "react";

export default function Sluzby() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">
      {/* text - start */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="md:pt-8">
              {/* <h2 className="mt-8 md:mt-0 text-center text-5xl md:text-6xl mb-2 text-gray-600 Heading"> */}
              <h2 className="mt-8 md:mt-0 mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Terapie
              </h2>
              <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                Dlouhodobě se věnuji se psychosomatice, z mé zkušenosti{" "}
                <span className="font-extrabold">
                  &quot;vše souvisí se vším&quot;
                </span>
                , spojíme-li jedno s druhým, dokážeme efektivně změnit vše, co
                nás tíží.
              </p>
              <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                Nebaví afirmace a zdlouhavé energetické práce. Vybrala jsem si
                jiný, pro mě smysluplnější a efektivnější způsob terapie.
                <br />
                Pracuji s psychickými / duševními bloky, i s fyzickými projevy
                ne-moci.
              </p>
              <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                Díky mým zkušenostem vím, že touto metodou lze uzdravit i
                neduhy, se kterými si doktoři nevědí rady. Bez léků a
                neinvazivně. Za dobu své praxe, jsem se setkala již s mnoha
                případy, které jsme zvládli vyřešit. Nejčastěji např.
                potravinové alergie, ekzémy, menstruační problémy, nemožnost
                otěhotnět, migrény, ztráta sluchu, různé druhy nevolností a
                bolestí, paniky, úzkosti, strachy, stresové situace, aj.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* !!! dalsi */}

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="flex gap-8 lg:gap-12  w-full flex-col md:flex-row-reverse">
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="md:pt-8  w-full lg:w-1/2">
              <h2 className="mt-8 md:mt-0 text-center text-3xl md:text-4xl mb-2 text-gray-600">
                Psych-K&reg;
              </h2>
              <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                Metodu vyvinul Rob Williams a jeho kolega a přítel Dr. Bruce H.
                Lipton, Ph.D. (vědec, buněčný biolog, průkopník epigenetiky).
              </p>
              <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                Pomocí této metody se zbavujeme svých negativních přesvědčení a
                ty pak nahrazujeme přesvědčeními pozitivními. V ČR je to
                &quot;mladá&quot; forma terapie, avšak hodně efektvní.
              </p>
              <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                Změníme-li svá vnitřní přesvědčení, změníme svou vnitřní
                biologii.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
