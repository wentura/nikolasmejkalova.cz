import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-screen-md px-4 py-24 text-center">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">
        Stránka nenalezena
      </h1>
      <p className="mb-8 text-gray-500">
        Omlouváme se, tato stránka neexistuje nebo byla přesunuta.
      </p>
      <Link href="/" className="btn-primary inline-flex w-auto px-8">
        Zpět na úvod
      </Link>
    </main>
  );
}
