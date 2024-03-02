import How from "@/components/how";
import React from "react";

export default function Cenik() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          Ceny tarapeutických sezení
        </h2>

        <div className="mb-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-x-8">
          {/* plan - start */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col gap-4 rounded-lg border p-4 pt-6">
              <h3 className="text-center text-2xl font-semibold text-gray-800">
                Jedno sezení
              </h3>

              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl font-bold text-gray-800">
                  1500 Kč
                </span>
              </div>
            </div>
          </div>
          {/* plan - end */}

          {/* plan - start */}
          <div className="flex flex-col space-y-4">
            <div className="relative flex flex-col gap-4 rounded-lg border border-yellow-600 p-4 pt-6">
              <div className="absolute inset-x-0 -top-3 flex justify-center">
                <span className="flex h-6 items-center justify-center rounded-full bg-yellow-600 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  oblíbenné
                </span>
              </div>

              <h3 className="text-center text-2xl font-semibold text-gray-800">
                Tři sezení
              </h3>

              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl font-bold text-gray-800">
                  4300 Kč
                </span>
              </div>

              <div className="mb-4 flex items-center justify-center gap-1 text-xs text-gray-500">
                zvýhodněná cena 1430 Kč za sezení
              </div>
            </div>
          </div>
          {/* plan - end */}

          {/* plan - start */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col gap-4 rounded-lg border p-4 pt-6">
              <h3 className="text-center text-2xl font-semibold text-gray-800">
                Pět sezení
              </h3>

              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl font-bold text-gray-800">
                  7000 Kč
                </span>
              </div>

              <div className="mb-4 flex items-center justify-center gap-1 text-sm text-gray-500">
                zvýhodněná cena 1400 Kč za sezení
              </div>
            </div>
          </div>
        </div>
      </div>
      <How />
    </div>
  );
}
