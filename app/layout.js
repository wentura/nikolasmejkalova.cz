import Footer from "@/components/footer";
import Head from "next/head";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Nikola Smejkalová</title>
      </Head>

      <main className="">{children}</main>
      {/* <Footer /> */}
    </html>
  );
}
