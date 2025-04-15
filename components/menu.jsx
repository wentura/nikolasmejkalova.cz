import Link from "next/link";
import React from "react";
import { menuData } from "./menuData";
import MenuMobilni from "./menuMobilni";
export default function Menu() {
  return (
    <div className="mx-auto w-full bg-yellow-600 bg-opacity-10">
      <div className="px-0 md:px-4 mx-auto max-w-screen-2xl  flex items-center justify-end py-0 md:py-6 xl:py-8">
        <nav className="gap-4 md:gap-12 justify-end w-full lg:w-auto z-10 hidden lg:flex">
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
      </div>
    </div>
  );
}
