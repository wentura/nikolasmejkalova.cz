import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 bg-white pt-4 sm:pt-10 lg:pt-12">
      <div className="flex flex-col items-center border-t pt-6">
        <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
          <Link
            href="/"
            className="text-gray-500 transition duration-100 hover:text-yellow-600"
          >
            Nikola Smejkalová
          </Link>
          <Link
            href="/recenze"
            className="text-gray-500 transition duration-100 hover:text-yellow-600"
          >
            recenze
          </Link>
          <Link
            href="/cenik"
            className="text-gray-500 transition duration-100 hover:text-yellow-600"
          >
            ceník
          </Link>
          <Link
            href="/kontakt"
            className="text-gray-500 transition duration-100 hover:text-yellow-600"
          >
            kontakt
          </Link>
        </nav>
      </div>

      <div className="py-8 text-center text-sm text-gray-400">
        Nikola Smejkalová © 2020 - {new Date().getFullYear()} - vytvořil{" "}
        <a
          href="https://www.zbyneksvoboda.cz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zbyněk Svoboda
        </a>
      </div>
    </div>
  );
}
