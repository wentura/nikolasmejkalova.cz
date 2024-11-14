import Link from "next/link";
import React from "react";
import { howData } from "./how_data";
import SjednatSchuzku from "./sjednatSchuzku";
export default function Info() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-lg">
        <h2 className="my-4 text-4xl text-center md:text-left md:text-6xl play relative zvyraznenyText nadpis mb-6 md:mb-8">
          Informace o terapii{" "}
        </h2>
        <div className="grid gap-4 sm:grid-cols-1 md:gap-12 xl:grid-cols-2 xl:gap-16">
          <div className="text-gray-500">
            <h3 className="xl:mb-4 text-lg font-semibold text-gray-700 md:text-xl">
              Praktické informace
            </h3>
            {/* <p className="text-gray-500"></p> */}
            <ul className="list-none">
              <li>Délka sezení: 60-90 minut</li>
              <li>Přístup: Individuální, přizpůsobený vašim potřebám</li>
              <li>Metoda: Efektivní a zaměřená na rychlé dosažení výsledků</li>
            </ul>
          </div>
          <div className="text-gray-500">
            <h3 className="xl:mb-4 text-lg font-semibold text-gray-700 md:text-xl">
              Pro koho je má terapie vhodná?
            </h3>
            <ul>
              <li>děti od 7 let</li>
              <li>dospívající</li>
              <li>dospělí všech věkových kategorií</li>
              <li>senioři</li>
            </ul>
          </div>
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
