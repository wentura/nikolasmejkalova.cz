import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Menu from "@/components/menuObsah";
import "@/public/style.css";
import Head from "next/head";
import "../globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Nikola Smejkalová</title>
      </Head>
      <body>
        <Menu />
        <main className="">{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
