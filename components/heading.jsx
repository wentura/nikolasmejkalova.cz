import React from "react";

export default function Heading({ title, text }) {
  return (
    <div className="mx-auto max-full px-4 md:px-8 bg-yellow-600 bg-opacity-10 my-12 py-24 lg:py-36 shadow-xl">
      <h2 className="mb-2 text-center text-4xl  text-gray-800 lg:text-7xl Heading">
        {title}
      </h2>

      <p className="mx-auto max-w-screen-xl px-4  text-center text-gray-500 md:text-xl">
        {text}
      </p>
      <p className="mx-auto max-w-screen-xl px-4 pt-4 text-left lg:pt-8 text-gray-500 md:text-xl"></p>
    </div>
  );
}
