import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="bg-yellow-600 bg-opacity-10 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* quote - start */}
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-3xl play md:text-5xl lg:text-6xl zvyraznenyText nadpis"
            aria-label="logo"
          >
            Nikola Smejkalová
          </a>
          <div className="max-w-md text-center text-gray-600 lg:text-lg">
            jsem vaše průvodkyně k osobnímu rozvoji
          </div>
          <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
            <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-56 md:w-56">
              <Image
                width={300}
                height={300}
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707674374/nikolasmejkalova_cz/nikola_byuj6t.webp"
                loading="lazy"
                alt="Nikola Smejkalová, Vaše facilitátorka metody Psych-K"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="pt-4">
            <a
              href="tel:+420737081416"
              className="text-gray-900 text-xl py-4 px-8 text-center bg-amber-400 rounded-xl shadow-2xl hover:shadow-md transition duration-500 hover:scale-95 hover:bg-amber-500 flex w-80 justify-between"
            >
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707679724/nikolasmejkalova_cz/phone_zp1ffp.svg"
                className="w-6"
              />
              <span className="w-72 text-center">737081416</span>
            </a>
          </div>
          <div className="pt-4">
            <a
              href="mailto:nsnikola@seznam.cz"
              className="text-gray-900 text-xl py-4 px-8 text-center bg-amber-400 rounded-xl shadow-2xl hover:shadow-md transition duration-500 hover:scale-95 hover:bg-amber-500 flex w-80 justify-between"
            >
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707679724/nikolasmejkalova_cz/mail_rhkiyo.svg"
                className="w-6"
              />
              <span className="w-72 text-center">nsnikola@seznam.cz</span>
            </a>
          </div>
        </div>
        {/* quote - end */}
      </div>
    </div>
  );
}
