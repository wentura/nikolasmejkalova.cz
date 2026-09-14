import React from "react";

export default function Matomo() {
  return (
    <div aria-hidden="true">
      {/* Obyčejný <img> místo next/image – tracking pixel nemá procházet
          Image optimizerem ani generovat zbytečný JS. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        referrerPolicy="no-referrer"
        src="https://matomo.zbyneksvoboda.cz/matomo.php?idsite=11&rec=1"
        width={1}
        height={1}
        alt=""
        loading="lazy"
        decoding="async"
        className="border-0 absolute w-px h-px opacity-0"
      />
    </div>
  );
}
