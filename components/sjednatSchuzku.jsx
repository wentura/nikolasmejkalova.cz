import Link from "next/link";
import React from "react";
export default function SjednatSchuzku({ klass }) {
  return (
    <Link href="/kontakt" className={`${klass} btn-primary align-middle h-14`}>
      chci si sjednat schůzku
    </Link>
  );
}
