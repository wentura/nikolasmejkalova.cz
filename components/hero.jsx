import Image from "next/image";
import Link from "next/link";
import SjednatSchuzku from "./sjednatSchuzku";
export default function Hero() {
  return (
    <div className="mx-auto w-full bg-yellow-600 bg-opacity-10">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 pb-6 sm:pb-10 lg:pb-16 ">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 md:flex-row">
          {/* content - start */}
          <div className="flex flex-col text-center lg:py-12 lg:text-left xl:w-6/12 xl:py-4">
            <div className="relative">
              <Image
                width={800}
                height={400}
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709719256/nikolasmejkalova_cz/logo-psych-k2_ylumqs.png"
                className="sepia opacity-70 md:hidden absolute -top-16 w-8"
                alt="logo metody Psych-K"
              />
              <Image
                width={800}
                height={400}
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709719256/nikolasmejkalova_cz/logo-psych-k2_ylumqs.png"
                className="sepia opacity-70 md:-top-12 md:w-2/5 lg:w-2/5 xl:w-1/4 hidden md:flex relative lg:-top-20 xl:-top-20 lg:left-4"
                alt="logo metody Psych-K"
              />
            </div>
            <h1 className="mb-0 text-4xl md:text-6xl lg:text-8xl play relative zvyraznenyText nadpis flex text-left pm-8">
              Cesta k vnitřnímu klidu a lepšímu životu
            </h1>
            <Image
              src="/podpis.png"
              width={600}
              height={200}
              alt="Nikola Smejkalová"
              className="self-center lg:self-end lg:mb-4 -rotate-12 lg:-top-16 xl:-top-12 lg:relative "
            />
            {/* <p className="mb-8 md:mb-12 lg:w-4/5 text-xl lg:text-2xl relative">
              jsem vaše průvodkyně k osobnímu rozvoji
            </p> */}
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-left ">
              <SjednatSchuzku klass="mx-right-0" />
            </div>
          </div>
          {/* content - end */}

          {/* image - start */}
          <div className="h-auto w-72 md:w-full md:max-w-lg mx-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-full mt-8">
            <Image
              width={1000}
              height={700}
              //   src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707674374/nikolasmejkalova_cz/nikola_byuj6t.webp"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1742743890/nikolasmejkalova_cz/ja.webp"
              loading="lazy"
              alt="Nikola Smejkalova, Vaše facilitátorka metody Psych-K"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* image - end */}
        </section>
      </div>
    </div>
  );
}
