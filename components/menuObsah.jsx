import Image from "next/image";
import Link from "next/link";
import { menuData } from "./menuData";
import MenuMobilni from "./menuMobilni";

export default function Menu() {
  return (
    <header className="mx-auto w-full bg-yellow-600 bg-opacity-10">
      <div className="px-4 mx-auto max-w-screen-2xl flex items-center justify-between py-4 md:py-6 xl:py-8">
        <Link
          href="/"
          className="gap-2.5 text-3xl md:text-5xl leading-6 flex items-center font-extralight lg:text-8xl font-heading"
          aria-label="Nikola Smejkalová – domovská stránka"
        >
          <Image
            src="/podpis.png"
            width={600}
            height={165}
            sizes="(max-width: 768px) 240px, 600px"
            priority
            alt="Nikola Smejkalová"
            className="self-center md:max-h-24 md:w-full"
          />
        </Link>

        <nav
          aria-label="Hlavní navigace"
          className="gap-12 justify-end w-full lg:w-auto z-10 hidden lg:flex"
        >
          {menuData.map((menu) => (
            <Link
              key={menu.link}
              href={`/${menu.link}`}
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-yellow-600"
            >
              {menu.title}
            </Link>
          ))}
        </nav>

        <div className="flex lg:hidden w-full justify-end">
          <MenuMobilni />
        </div>
      </div>
    </header>
  );
}
