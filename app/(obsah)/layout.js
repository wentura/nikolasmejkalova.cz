import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Menu from "@/components/menuObsah";
import "@/public/style.css";
import "../globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
