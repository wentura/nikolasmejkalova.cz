import Image from "next/image";
import SjednatSchuzku from "./sjednatSchuzku";

export default function Hero() {
  return (
    <div className="mx-auto w-full bg-yellow-600 bg-opacity-10">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 pb-6 sm:pb-10 lg:pb-16 ">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 md:flex-row">
          <div className="flex flex-col text-center lg:py-12 lg:text-left xl:w-6/12 xl:py-4">
            <h1 className="mb-0 text-4xl md:text-6xl lg:text-8xl play relative zvyraznenyText nadpis flex text-left pm-8 mt-4 md:mt-20">
              Cesta k vnitřnímu klidu a lepšímu životu
            </h1>
            <Image
              src="/podpis.png"
              width={600}
              height={200}
              alt="Nikola Smejkalová"
              className="self-center lg:self-end lg:mb-4 -rotate-12 lg:-top-16 xl:-top-12 lg:relative "
            />
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-left ">
              <SjednatSchuzku
                klass="mx-right-0"
                text="Chci udělat první krok"
              />
            </div>
          </div>

          <div className="h-auto w-72 md:w-full md:max-w-lg mx-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-full mt-8">
            <Image
              width={1000}
              height={700}
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/f_auto,q_auto,w_1200/v1742743890/nikolasmejkalova_cz/ja.webp"
              priority
              alt="Nikola Smejkalová, Vaše facilitátorka metody Psych-K"
              className="h-full w-full object-cover object-center"
              sizes="(max-width: 768px) 288px, (max-width: 1280px) 512px, 600px"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
