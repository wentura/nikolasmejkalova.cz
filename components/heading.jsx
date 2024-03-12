import React from "react";
// const inter = Inter();
// const lora = Lora();
export default function Heading({ title, text, klass }) {
  return (
    <div className="mx-auto max-full px-4 md:px-8 bg-yellow-600 bg-opacity-10 my-12 py-8 lg:py-14 shadow-xl">
      <h2
        className={`${klass}  text-center text-4xl sm:text-5xl text-gray-800 lg:text-7xl`}
      >
        {title}
      </h2>
      <p className="mx-auto max-w-screen-xl px-0  text-center text-gray-500 md:text-xl">
        {text}
      </p>
    </div>
  );
}
