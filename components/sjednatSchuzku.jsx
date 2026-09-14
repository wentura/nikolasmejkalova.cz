import Link from "next/link";

export default function SjednatSchuzku({
  klass,
  text = "Chci si sjednat schůzku",
}) {
  return (
    <Link
      href="/kontakt"
      className={`${klass} btn-primary align-middle h-14 text-base md:text-lg p-0 md:p-2 flex items-center justify-center w-full md:w-96`}
    >
      {text}
    </Link>
  );
}
