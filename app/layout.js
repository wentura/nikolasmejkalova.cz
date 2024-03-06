import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import "@/public/style.css";
import Head from "next/head";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Nikola Smejkalová</title>
        <meta name="author" content="www.zbyneksvoboda.cz" />
        {/* <meta name="copyright" content="2024" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="kokořín,ubytování v přírodě,kempy,kokořínsko,škola v přírodě,teambuilding,srazy,rodinná dovolená, kokořín, autokemp, kemp"
        />
        <meta
          name="description"
          content="Autokemp Kokořín ubytování v nádherném údolí Kokořínska"
        /> */}
      </Head>
      <body>
        <main className="">{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
