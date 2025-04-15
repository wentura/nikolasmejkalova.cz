import Link from "next/link";
import React from "react";
export default function SjednatSchuzku({
  klass,
  text = "Chci si sjednat schůzku",
}) {
  return (
    <Link href="/kontakt" className={`${klass} btn-primary align-middle h-14`}>
      {text}
    </Link>
  );
}
