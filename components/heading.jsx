import React from "react";
export default function Heading({ title, text, klass }) {
  return (
    <div className="mx-auto max-full px-4 md:px-8 bg-yellow-600 bg-opacity-10 my-12 py-8 lg:py-14 shadow-xl">
      <h2
        className={`${klass}  text-center text-2xl sm:text-4xl lg:text-6xl play zvyraznenyText
        nadpis`}
      >
        {title}
      </h2>
      <p className="mx-auto max-w-screen-xl px-0  text-center md:text-xl">
        {text}
      </p>
    </div>
  );
}
