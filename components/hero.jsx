export default function Hero() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 bg-white pb-12 sm:pb-24 lg:pb-36">
      <div className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
        {/* logo - start */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          Nikola Smejkalová
        </a>
        {/* logo - end */}

        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex">
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Terapie
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            dsfklh
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            About
          </a>
        </nav>
        {/* nav - end */}
      </div>

      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        {/* content - start */}
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="text-xs mb-2 font-extralight md:text-base">jsem</p>

          <h1 className="mb-0 text-4xl font-bold text-black sm:text-6xl md:text-7xl ">
            Nikola Smejkalová
          </h1>

          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            facilitátorka metody PSYCH-K®
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#"
              className="text-gray-900 text-xl py-4 px-8 text-center bg-amber-400 rounded-xl shadow-2xl hover:shadow-md transition duration-500 hover:scale-95 hover:bg-amber-500"
            >
              chci sjednat schůzku
            </a>
          </div>
        </div>
        {/* content - end */}

        {/* image - start */}
        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
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
  );
}
