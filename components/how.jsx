import Link from "next/link";
import React from "react";
import { howData } from "./how_data";
import SjednatSchuzku from "./sjednatSchuzku";
export default function How() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-lg">
        {/* text - start */}

        {/* text - end */}
        <h2 className="my-4 text-4xl text-center md:text-left md:text-6xl play relative zvyraznenyText nadpis mb-6 md:mb-8">
          Jaké změny můžete očekávat při naší spolupráci:
        </h2>
        <div className="grid gap-4 sm:grid-cols-1 md:gap-12 xl:grid-cols-3 xl:gap-16">
          {howData.map((how, index) => {
            return (
              <div key={index}>
                <h3 className="xl:mb-4 text-lg font-semibold text-gray-700 md:text-xl">
                  {how.title}
                </h3>
                <p className="text-gray-500">{how.text}</p>
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
          <h2 className="mt-8 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-2xl">
            Lze pracovat online.
          </h2>
        </div>
      </div>
    </div>
  );
}
