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
      </Head>
      <Menu />
      <main className="">{children}</main>
      <Contact />
      <Footer />
    </html>
  );
}
