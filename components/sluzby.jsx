import Image from "next/image";
import Link from "next/link";
import React from "react";
import SjednatSchuzku from "./sjednatSchuzku";

export default function Sluzby() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">
      {/* text - start */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[600px]">
              <Image
                width={800}
                height={1000}
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1708711872/nikolasmejkalova_cz/W45A4259copy_a2kqzf.webp"
                loading="lazy"
                alt="Nikola Smejkalová a její terapeitucké křesílko"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="md:pt-8">
              {/* <h2 className="mt-8 md:mt-0 text-center text-5xl md:text-6xl mb-2 text-gray-600 Heading"> */}
              <p className="">Jsem vaše průvodkyně k osobnímu rozvoji.</p>
              {/* <h2 className="mt-8 md:mt-0 mb-4 text-2xl text-gray-800 md:mb-6 lg:text-4xl play"> */}
              <h2 className="my-4 text-3xl md:text-3xl lg:text-4xl play relative zvyraznenyText nadpis mb-6 md:mb-8">
                Jsem Nikola Smejkalová.
              </h2>
              <p className="mb-2 md:mb-4">
                Jsem tady, abych vám pomohla překonat psychické bloky a
                dosáhnout skutečné životní pohody. Moje metody jsou efektivní,
                rychlé a přizpůsobené přímo vám.
              </p>
              <p className="mb-2 md:mb-4">
                Společně identifikujeme neprospěšné vzorce ve vašem myšlení a
                chování. Poté je přeměníme na nové, které vám umožní žít naplno
                a s radostí. Mým cílem je, abyste po každém sezení odcházeli s
                konkrétními nástroji pro pozitivní změnu.
              </p>
              {/* <p className="mb-6 md:mb-8">
                Za dobu své praxe, jsem se setkala již s mnoha případy, které
                jsme zvládli vyřešit. Nejčastěji potravinové alergie, ekzémy,
                menstruační problémy, nemožnost otěhotnět, migrény, ztráta
                sluchu, různé druhy nevolností a bolestí, paniky, úzkosti,
                strachy, stresové situace a mnohé další.
              </p> */}
              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-end pt-12">
                <SjednatSchuzku klass="mx-right-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* !!! dalsi */}
    </div>
  );
}
