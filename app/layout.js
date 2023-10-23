import Hero from "../components/hero";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nikola Smejkalová</title>
      </head>
      <body className="bg-orange-50">
        <div className="flex flex-col align-middle justify-center min-h-screen text-center">
          <div className="">
            <h2 className="mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl mx-auto">
              Nikola Smejkalová
            </h2>
            <p className="text-base text-gray-800 md:text-lg">
              jsem facilitátorka <br className="md:hidden" /> PSYCH-K® a
              Emočních kódů.
            </p>
          </div>
          <div className="flex justify-center gap-8 flex-wrap mt-4 sm:mt-8 md:mt-12">
            <a
              href="tel:+420737081416"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black rounded shadow-md bg-orange-200 hover:bg-orange-400 focus:shadow-outline focus:outline-none"
            >
              <svg
                className="w-8 pr-2"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 28.314 28.323"
                viewBox="0 0 28.314 28.323"
              >
                <path d="M27.728 20.384l-4.242-4.242a1.982 1.982 0 00-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 006.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 000 1.414l9.899 9.899a.999.999 0 001.414 0l3.535-3.536 4.243 4.244-4.242 4.242z"></path>
              </svg>{" "}
              737 081 416
            </a>
            <a
              href="mailto:nsnikola@seznam.cz"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-lime-200 hover:bg-lime-400 focus:shadow-outline focus:outline-none"
            >
              <svg
                className="w-8 pr-2"
                xmlns="http://www.w3.org/2000/svg"
                data-name="1-Mail"
                viewBox="0 0 32 32"
              >
                <path d="M28 28H4a4 4 0 01-4-4V8a4 4 0 014-4h24a4 4 0 014 4v16a4 4 0 01-4 4zM4 6a2 2 0 00-2 2v16a2 2 0 002 2h24a2 2 0 002-2V8a2 2 0 00-2-2z"></path>
                <path d="M16 18a1 1 0 01-.618-.214l-14-11a1 1 0 111.236-1.572L16 15.728 29.382 5.214a1 1 0 111.236 1.572l-14 11A1 1 0 0116 18z"></path>
                <path d="M2 27a1 1 0 01-.707-1.707l11-11a1 1 0 011.414 1.414l-11 11A1 1 0 012 27zm28 0a1 1 0 01-.707-.293l-11-11a1 1 0 011.414-1.414l11 11A1 1 0 0130 27z"></path>
              </svg>
              nsnikola@seznam.cz
            </a>
          </div>
          <div className="flex  justify-center bg-orange-950 text-neutral-100 text-center w-full py-4 fixed bottom-0">
            na webových stánkách usilovně pracuji{" "}
            <svg
              className="ml-4 w-5 fill-slate-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm0 20a9 9 0 119-9 9.011 9.011 0 01-9 9zm6-8a6 6 0 01-12 0 1 1 0 012 0 4 4 0 008 0 1 1 0 012 0zM8 10V9a1 1 0 012 0v1a1 1 0 01-2 0zm6 0V9a1 1 0 012 0v1a1 1 0 01-2 0z"></path>
            </svg>
          </div>
        </div>
        {/* <Hero /> */}
        {/* <section className="container mx-auto bg-red-300">{children}</section> */}
      </body>
    </html>
  );
}
