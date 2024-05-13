import Link from "next/link";
import React from "react";
import SjednatSchuzku from "./sjednatSchuzku";

export default function How() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-lg">
        {/* text - start */}

        {/* text - end */}

        <div className="grid gap-4 sm:grid-cols-1 md:gap-12 xl:grid-cols-3 xl:gap-16">
          {/* question - start */}
          <div>
            <h2 className="mb-4 text-left text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Jak to funguje?
            </h2>
            <p className="text-gray-500">
              Pomocí svalového testu určíme, jaké nové pozitivní přesvědčení
              zrovna ve svém životě potřebujete, aby vám to pomohlo ve vašem
              aktuálním problému. Vy sami, moudrost vašeho těla, nám v tom
              pomůže.
            </p>
          </div>
          {/* question - end */}

          {/* question - start */}
          <div>
            <h3 className="xl:mt-2 xl:mb-5 text-lg font-semibold text-gray-700 md:text-xl hidden lg:inline-block">
              &nbsp;
            </h3>
            <p className="text-gray-500">
              Vám zůstává moc, vaše síla změnit to, co vám nevyhovuje, já vám
              nabízím pouze nástroj, který vám v tom může pomoci.
            </p>
            <p className="text-gray-500 mt-2">
              Jednoduše vezmeme to, co nechcete, co vám špatně slouží a změníme
              to na to, co si přejete.
            </p>
          </div>
          {/* question - end */}

          {/* question - start */}
          <div className="">
            <img
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1708711872/nikolasmejkalova_cz/W45A4254copy_dcxwz5.webp"
              loading="lazy"
              alt="Nikola Smejkalova, květiny"
              className="h-full w-full object-cover object-center rounded-lg shadow-lg  max-w-lg mx-auto"
            />
          </div>
          {/* question - end */}

          {/* question - start */}
          <div>
            <h3 className="xl:mb-4 text-lg font-semibold text-gray-700 md:text-xl">
              Jak dlouho trvá schůzka?
            </h3>
            <p className="text-gray-500">
              Naše schůzka zabere cca hodinu až hodinu a půl.
            </p>
          </div>
          {/* question - end */}

          {/* question - start */}
          <div>
            <h3 className="xl:mb-4 text-lg font-semibold text-gray-700 md:text-xl">
              Zvládnu to i já?
            </h3>
            <p className="text-gray-500">
              Samostatně terapii zvádnou děti od 7 let a mému nejstaršímu
              klientovi je přes 90 let.
            </p>
            <p className="text-gray-500 pt-2">
              Je to jednoduchá, rychlá a neinvazivní metoda. Je velice
              efektivní.
            </p>
          </div>
          {/* question - end */}

          {/* question - start */}
          <div className="mt-7 flex">
            <SjednatSchuzku klass="mx-auto" />
          </div>
          {/* question - end */}
        </div>
        <div className="mb-10 md:mb-16 text-center sm:text-left">
          <h2 className="mt-8 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-2xl">
            Lze pracovat online.
          </h2>
        </div>
      </div>
    </div>
  );
}
