import React from "react";
export default function Info() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-lg">
        <h2 className="my-4 text-4xl text-center md:text-left md:text-6xl play relative zvyraznenyText nadpis mb-6 md:mb-8">
          O sezeních
        </h2>
        <div className="grid gap-4 sm:grid-cols-1 md:gap-12 xl:grid-cols-3 xl:gap-16">
          <div className="text-gray-500 col-span-2">
            <ul className="list-disc list-outside p-8">
              <li className="font-bold">60-90 minut</li>
              <li className="">individuální přístup a přípravu na sezení</li>
              <li className="">práci s efektivními transformačními metodami</li>
              <li className="">
                prostor pro změnu, která začíná hned – ne až po měsících terapie
              </li>
              <li>podporu na vaší cestě k vědomému, naplněnému životu</li>
            </ul>
          </div>
          <p className="text-gray-500">
            <strong className="font-bold">
              Moje práce není jen o „povídání si“
            </strong>{" "}
            – už na prvním sezení se věnujeme skutečné transformaci. Společně
            pracujeme s podvědomými vzorci, měníme limitující přesvědčení a
            uvolňujeme bloky, které vám brání žít to, co chcete.
          </p>
        </div>
        <div className="text-gray-500 mt-8 md:mt-12 grid gap-4 sm:grid-cols-1 md:gap-12 xl:grid-cols-3 xl:gap-16">
          <p className="block md:hidden">
            Každé{" "}
            <strong className="font-bold">
              90minutové sezení je vedené individuálně
            </strong>{" "}
            a přizpůsobené tomu, kde se právě nacházíte. Získáte konkrétní
            prožitek změny a zároveň tipy, jak ji podpořit.
          </p>
          <p>
            Nabízím{" "}
            <strong className="font-bold">možnost online setkání</strong>, což
            znamená, že můžete získat podporu a pracovat na sobě z pohodlí svého
            domova – bez nutnosti cestovat a s naprostou flexibilitou.
          </p>
          <p>
            Ať už se setkáme{" "}
            <strong className="font-bold">osobně nebo online</strong>, proces
            práce na sobě zůstává naprosto stejný. Můžeme spolu pracovat na
            vašem osobním rozvoji bez rozdílu – obě varianty přinášejí podporu a
            skutečnou transformaci.
          </p>{" "}
          <p className="hidden md:block">
            Každé{" "}
            <strong className="font-bold">
              90minutové sezení je vedené individuálně
            </strong>{" "}
            a přizpůsobené tomu, kde se právě nacházíte. Získáte konkrétní
            prožitek změny a zároveň tipy, jak ji podpořit.
          </p>
        </div>
        {/* <div className="my-10 md:my-24 text-center sm:text-left">
          <div className="mt-7 flex">
            <SjednatSchuzku klass="mx-auto" />
          </div>
          <h2 className="mt-8 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-2xl">
            Lze pracovat online.
          </h2>
        </div> */}
      </div>
    </div>
  );
}
