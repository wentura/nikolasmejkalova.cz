"use client";

import Link from "next/link";
import React, { useState } from "react";
export default function MenuMobilni() {
  //   const [isOpen, setIsOpen] = useState(false);
  console.log("test");
  let [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    console.log("first");
    setIsOpen(!isOpen);
  }
  return (
    <div className="mobilniMenu">
      <button className="flex justify-end p-4 md:hidden" onClick={toggleMenu}>
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
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        }  top-0 left-0 right-0 bg-white px-2 pt-2 pb-4 z-20 flex flex-col text-gray-900 shadow-md opacity-90 w-full h-screen fixed`}
      >
        <button className="flex justify-end p-4" onClick={toggleMenu}>
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
              d="M 0 0 L 20 20 L 0 0 M 20 0 L 0 20 L 20 0"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col gap-y-4 w-full items-center text-xl my-12">
          <li className="flex">
            test
            {/* <Link
              rel="noopener noreferrer"
              href="/ubytovani"
              className="flex items-center px-4 -mb-1 hover:underline transition duration-300 ease-in-out underline-offset-4"
            >
              ubytování
            </Link> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}
