import How from "@/components/how";
import React from "react";

export default function Cenik() {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          Ceny tarapeutických sezení
        </h2>

        <div className="grid mb-6 gap-x-6 gap-y-12 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-x-8">
          {/* plan - start */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col gap-4 p-4 pt-6 border rounded-lg">
              <h3 className="text-2xl font-semibold text-center text-gray-800">
                Jedno sezení
              </h3>

              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl font-bold text-gray-800">
                  2000 Kč
                </span>
              </div>
            </div>
          </div>
          {/* plan - end */}

          {/* plan - start */}
          <div className="flex flex-col space-y-4">
            <div className="relative flex flex-col gap-4 p-4 pt-6 border border-yellow-600 rounded-lg">
              <div className="absolute inset-x-0 flex justify-center -top-3">
                <span className="flex items-center justify-center h-6 px-3 py-1 text-xs font-semibold tracking-widest text-white uppercase bg-yellow-600 rounded-full">
                  oblíbenné
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-center text-gray-800">
                Tři sezení
              </h3>

              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl font-bold text-gray-800">
                  5400 Kč
                </span>
              </div>

              <div className="flex items-center justify-center gap-1 mb-4 text-xs text-gray-500">
                zvýhodněná cena 1800 Kč za sezení
              </div>
            </div>
          </div>

          {/* plan - start */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col gap-4 p-4 pt-6 border rounded-lg">
              <h3 className="text-2xl font-semibold text-center text-gray-800">
                Pět sezení
              </h3>

              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl font-bold text-gray-800">
                  7750 Kč
                </span>
              </div>

              <div className="flex items-center justify-center gap-1 mb-4 text-sm text-gray-500">
                zvýhodněná cena 1550 Kč za sezení
              </div>
            </div>
          </div>
          {/* plan - end */}
        </div>
      </div>
      <How />
    </div>
  );
}
