import Content from "@/components/content";
import Heading from "@/components/heading";
import React from "react";
export default function Metoda() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">
        {/* text - start */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="flex gap-8 lg:gap-12  w-full flex-col md:flex-row-reverse">
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto w-full lg:w-1/2">
                <img
                  src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1708711872/nikolasmejkalova_cz/W45A4262copy_j6zeks.webp"
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
                  Metodu vyvinul Rob Williams a jeho kolega a přítel Dr. Bruce
                  H. Lipton, Ph.D. (vědec, buněčný biolog, průkopník
                  epigenetiky).
                </p>
                <p className="mb-6 text-gray-500 sm:text-xl md:mb-8">
                  Pomocí této metody se zbavujeme svých negativních přesvědčení
                  a ty pak nahrazujeme přesvědčeními pozitivními. V ČR je to
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
      <Heading title="Vše souvisí se vším." text="" klass="font-heading" />
      <Content />
    </div>
  );
}
