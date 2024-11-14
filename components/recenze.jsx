import { sanitize } from "isomorphic-dompurify";
import React from "react";
import { recenze } from "./recenze_data";

export default function Recenze({ lp }) {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-6 sm:py-8 my-24 text-gray-500">
      <h2 className="my-4 text-4xl text-center md:text-left md:text-6xl play relative zvyraznenyText nadpis mb-6 md:mb-8">
        Řekli o mně...
      </h2>
      <div className="flex flex-wrap">
        {/* quote - start */}
        {lp ? (
          <div>
            {/* <div className="flex flex-wrap"> */}
            <div className="grid gap-4 sm:grid-cols-1 md:gap-12 xl:grid-cols-3 xl:gap-24">
              {recenze.map((rec, index) => {
                return (
                  rec.landing && (
                    <div key={index} className="flex flex-col my-4">
                      <div
                        className="text-left "
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(rec.text),
                        }}
                      ></div>

                      <div className="text-6xl text-right text-gray-300 font-extralight pt-12">
                        {rec.name}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className="mx-auto">
              <p className="text-center pt-12">
                <a
                  href="/recenze"
                  className="text-gray-500 text-xl py-4 px-8 text-center underline-offset-2 underline decoration-gray-400"
                >
                  ... a další říkají
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-1 md:gap-12 xl:grid-cols-3 xl:gap-24">
            {recenze.map((recen) => {
              return (
                <div key={recen.name} className="flex flex-col my-4">
                  <div
                    className="text-left"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(recen.text),
                    }}
                  ></div>
                  <div className="text-6xl text-right text-gray-300 font-extralight pt-12">
                    {recen.name}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* quote - end */}
      </div>
    </div>
  );
}
