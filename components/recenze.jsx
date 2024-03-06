import { sanitize } from "isomorphic-dompurify";
import React from "react";
import { recenze } from "./recenze_data";

export default function Recenze({ lp }) {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-6 sm:py-8 lg:py-12 mt-24 text-gray-500">
      <h3 className="mb-2 text-left text-xl font-bold text-gray-600 sm:text-2xl md:mb-3">
        Řekli o mě...
      </h3>
      <div className="flex flex-wrap">
        {/* quote - start */}
        {lp ? (
          <div className="flex flex-wrap">
            <div
              key={recenze[3].name}
              className="flex flex-col px-4 my-4 gap-4 w-full lg:w-1/3 md:w-1/2"
            >
              <div
                className="text-left border-t-8 border-t-gray-200"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(recenze[3].text),
                }}
              ></div>

              <div className="text-6xl text-right text-gray-300 font-extralight">
                {recenze[3].name}
              </div>
            </div>
            <div
              key={recenze[4].name}
              className="flex flex-col px-4 my-4 gap-4 w-full lg:w-1/3 md:w-1/2"
            >
              <div
                className="text-left border-t-8 border-t-gray-200 "
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(recenze[4].text),
                }}
              ></div>

              <div className="text-6xl text-right text-gray-300 font-extralight">
                {recenze[4].name}
              </div>
            </div>
            <div className="mx-auto">
              <p className="text-center pt-12">
                <a
                  href="/recenze"
                  className="text-gray-500 text-xl py-4 px-8 text-center border-4 border-amber-400 rounded-xl shadow-2xl hover:shadow-md transition duration-500 hover:scale-95 hover:border-amber-500"
                >
                  více ohlasů mých klientů
                </a>
              </p>
            </div>
          </div>
        ) : (
          recenze.map((recen) => {
            return (
              <div
                key={recen.name}
                className="flex flex-col px-4 my-4 gap-4 w-full md:w-1/2"
              >
                <div
                  className="text-left border-t-8 border-t-gray-200 "
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(recen.text),
                  }}
                ></div>

                <div className="text-6xl text-right text-gray-300 font-extralight">
                  {recen.name}
                </div>
              </div>
            );
          })
        )}

        {/* quote - end */}
      </div>
    </div>
  );
}
