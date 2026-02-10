"use client";
import Image from "next/image";
import React from "react";

export default function Matomo() {
  return (
    <div aria-hidden="true">
      <Image
        referrerPolicy="no-referrer-when-downgrade"
        src="https://matomo.zbyneksvoboda.cz/matomo.php?idsite=11&rec=1"
        width={1}
        height={1}
        alt=""
        className="border-0 absolute w-px h-px opacity-0"
      />
    </div>
  );
}
