import Link from "next/link";
import React from "react";
import { menuData } from "./menuData";
import MenuMobilni from "./menuMobilni";

export default function Menu() {
  return (
    <div className="mx-auto w-full bg-yellow-600 bg-opacity-10">
      <div className="px-4 mx-auto max-w-screen-2xl flex items-center justify-between py-4 md:py-6 xl:py-8">
        <Link
          href="/"
          className="gap-2.5 text-3xl font-bold md:text-5xl leading-6 flex items-center font-heading"
          aria-label="logo"
        >
          <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709719256/nikolasmejkalova_cz/logo-psych-k2_ylumqs.png"
            className="sepia opacity-70 w-10 md:w-16"
          />
          Nikola Smejkalová
        </Link>
        {/* logo - end */}

        {/* nav - start */}
        <nav className="gap-12 justify-end w-full lg:w-auto z-10 hidden lg:flex">
          {menuData.map((menu) => {
            return (
              <Link
                key={menu.link}
                href={`/${menu.link}`}
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-yellow-600"
              >
                {menu.title}
              </Link>
            );
          })}
        </nav>
        {/* nav - end */}
        <div className="flex lg:hidden w-full justify-end">
          <MenuMobilni />
        </div>
        {/* <nav className="">hamb</nav> */}
      </div>
    </div>
  );
}
