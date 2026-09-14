import { sanitizeHtml } from "@/lib/sanitize";
import Link from "next/link";
import { recenze } from "./recenze_data";

export default function Recenze({ lp = false }) {
  const items = lp ? recenze.filter((rec) => rec.landing) : recenze;

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-6 sm:py-8 my-24 text-gray-500">
      <h2 className="my-4 text-4xl text-center md:text-left md:text-6xl play relative zvyraznenyText nadpis mb-6 md:mb-8">
        Řekli o mně...
      </h2>
      <div className="flex flex-wrap">
        <div className={lp ? "" : "contents"}>
          <div className="grid gap-4 sm:grid-cols-1 md:gap-12 xl:grid-cols-3 xl:gap-24">
            {items.map((rec) => (
              <div key={rec.name} className="flex flex-col my-4">
                <div
                  className="text-left"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(rec.text),
                  }}
                />
                <div className="text-6xl text-right text-gray-300 font-extralight pt-12">
                  {rec.name}
                </div>
              </div>
            ))}
          </div>
          {lp && (
            <div className="mx-auto">
              <p className="text-center pt-12">
                <Link
                  href="/recenze"
                  className="text-gray-500 text-xl py-4 px-8 text-center underline-offset-2 underline decoration-gray-400"
                >
                  ... a další říkají
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
