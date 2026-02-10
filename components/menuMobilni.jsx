"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { menuData } from "./menuData";

export default function MenuMobilni() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mobilniMenu">
      <button className="flex justify-end p-2 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } top-0 left-0 right-0 bg-white px-2 pt-2 pb-4 z-20 flex flex-col text-gray-900 shadow-md opacity-95 w-full h-screen fixed`}
      >
        <button className="flex justify-end p-4" onClick={() => setIsOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-y-2 w-full items-center text-xl my-2">
          <li className="flex px-8 py-4" key="home">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/podpis.png"
                width={250}
                height={100}
                alt="Nikola Smejkalová"
                className="self-center"
              />
            </Link>
          </li>
          {menuData.map((menu) => (
            <li className="flex py-2" key={menu.link}>
              <Link
                href={`/${menu.link}`}
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-yellow-600"
                onClick={() => setIsOpen(false)}
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
