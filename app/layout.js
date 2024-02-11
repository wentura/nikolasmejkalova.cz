import Footer from "@/components/footer";
import Head from "next/head";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap"
          rel="stylesheet"
        /> */}

        <title>Nikola Smejkalová</title>
      </Head>

      <body className="">{children}</body>
      <Footer />
    </html>
  );
}
