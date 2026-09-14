import { CONTACT } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-yellow-600 bg-opacity-10 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-3xl play md:text-5xl lg:text-6xl zvyraznenyText nadpis"
          >
            Nikola Smejkalová
          </Link>
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
                sizes="(max-width: 768px) 96px, 224px"
                alt="Nikola Smejkalová, Vaše facilitátorka metody Psych-K"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="pt-4">
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-gray-900 text-xl py-4 px-8 text-center bg-amber-400 rounded-xl shadow-2xl hover:shadow-md transition duration-500 hover:scale-95 hover:bg-amber-500 flex w-80 justify-between"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="w-72 text-center">{CONTACT.phoneDisplay}</span>
            </a>
          </div>
          <div className="pt-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-gray-900 text-xl py-4 px-8 text-center bg-amber-400 rounded-xl shadow-2xl hover:shadow-md transition duration-500 hover:scale-95 hover:bg-amber-500 flex w-80 justify-between"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="w-72 text-center">{CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
