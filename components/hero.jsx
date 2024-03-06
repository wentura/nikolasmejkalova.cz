import Link from "next/link";
import PsychK from "./pshychK";

export default function Hero() {
  return (
    <div className="mx-auto w-full bg-yellow-600 bg-opacity-10">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8  pb-12 sm:pb-24 lg:pb-36 ">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 md:flex-row">
          {/* content - start */}
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-6/12 xl:py-24">
            
            <h1 className="mb-0 text-4xl font-extralight md:text-6xl lg:text-8xl font-heading">
              Nikola Smejkalová
            </h1>

            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 text-lg">
              facilitátorka metody PSYCH-K®
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/kontakt" className="btn-primary">
                chci si sjednat schůzku
              </Link>
            </div>
          </div>
          {/* content - end */}

          {/* image - start */}
          <div className="h-auto w-72 md:w-full md:max-w-xl mx-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
            <img
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707674374/nikolasmejkalova_cz/nikola_byuj6t.webp"
              loading="lazy"
              alt="Nikola Smejkalova"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* image - end */}
        </section>
      </div>
    </div>
  );
}
