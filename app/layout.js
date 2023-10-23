import Hero from "../components/hero";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nikola Smejkalová</title>
      </head>
      <body className="">
        <Hero />
        <section className="container mx-auto bg-red-300">{children}</section>
      </body>
    </html>
  );
}
