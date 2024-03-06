import Link from "next/link";
export default function Hero() {
  return (
    <div className="mx-auto w-full bg-yellow-600 bg-opacity-10">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8  pb-12 sm:pb-24 lg:pb-36 ">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 md:flex-row">
          {/* content - start */}
          <div className="flex flex-col sm:text-center lg:py-12 lg:text-left xl:w-6/12 xl:py-24">
            <div>
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709719256/nikolasmejkalova_cz/logo-psych-k2_ylumqs.png"
                className="sepia opacity-70 md:-top-12 md:w-2/3 lg:w-4/5 xl:w-3/5 hidden md:flex relative lg:-top-20 xl:-top-40 lg:left-4"
              />
            </div>
            <h1 className="mb-0 text-4xl font-extralight md:text-6xl lg:text-8xl font-heading relative xl:-top-24">
              Nikola Smejkalová
            </h1>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 text-lg xl:text-2xl relative xl:-top-12">
              facilitátorka metody PSYCH-K®
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-end">
              <Link href="/kontakt" className="btn-primary">
                chci si sjednat schůzku
              </Link>
            </div>
          </div>
          {/* content - end */}

          {/* image - start */}
          <div className="h-auto w-72 md:w-full md:max-w-xl mx-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 mt-8">
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
