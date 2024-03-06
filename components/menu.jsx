import Link from "next/link";
import React from "react";
import PsychK from "./pshychK";

export default function Menu() {
  return (
    <div className="mx-auto w-full bg-yellow-600 bg-opacity-10">
      <div className="px-4 mx-auto max-w-screen-2xl  flex items-center justify-end py-4 md:py-8 xl:py-12">
        {/* logo - start */}
        {/* <PsychK /> */}
        <Link
          href="/"
          className="md:hidden gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          Nikola Smejkalová
        </Link>
        {/* logo - end */}

        {/* nav - start */}
        <nav className="gap-12 flex justify-end w-full lg:w-auto">
          <Link
            href="terapie"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-yellow-600"
          >
            terapie
          </Link>
          <Link
            href="/metoda"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-yellow-600"
          >
            metoda
          </Link>
          <Link
            href="/recenze"
            className="hidden md:block text-lg font-semibold text-gray-600 transition duration-100 hover:text-yellow-600"
          >
            recenze
          </Link>
          <Link
            href="/akce"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-yellow-600"
          >
            akce
          </Link>
          <Link
            href="/cenik"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-yellow-600"
          >
            ceník
          </Link>
          <Link
            href="/kontakt"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-yellow-600"
          >
            kontakt
          </Link>
        </nav>
        {/* nav - end */}
      </div>
    </div>
  );
}
