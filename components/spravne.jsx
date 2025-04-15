import Link from "next/link";
import React from "react";
import SjednatSchuzku from "./sjednatSchuzku";
import { spatneData, spravneData } from "./spravne_data";
export default function Spravne() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-lg">
        {/* text - start */}

        {/* text - end */}
        <h2 className="text-4xl text-center md:text-left md:text-6xl play relative zvyraznenyText nadpis mb-2 md:mb-4">
          Jsi tu správně, pokud:
        </h2>
        <div className="grid gap-4 sm:grid-cols-1 md:gap-8 xl:grid-cols-3 xl:gap-8">
          {spravneData.map((spravne, index) => {
            return (
              <div key={index}>
                <p className="text-gray-500">{spravne.text}</p>
              </div>
            );
          })}
        </div>
        <h2 className="my-24 md:my-44 text-2xl text-center md:text-left md:text-4xl play relative zvyraznenyText nadpis mb-2 md:mb-4">
          Možná to není pro tebe, pokud:
        </h2>
        <div className="grid gap-4 sm:grid-cols-1 md:gap-8 xl:grid-cols-3 xl:gap-8">
          {spatneData.map((spatne, index) => {
            return (
              <div key={index}>
                <p className="text-gray-500">{spatne.text}</p>
              </div>
            );
          })}
        </div>
        <div className="my-10 md:my-24 text-center sm:text-left">
          <div className="mt-7 flex">
            <SjednatSchuzku
              klass="mx-auto"
              text="Ano, jsem připraven na změnu"
            />
          </div>
          {/* <h2 className="mt-8 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-2xl">
            Lze pracovat online.
          </h2> */}
        </div>
      </div>
    </div>
  );
}
