import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Menu from "@/components/menuObsah";
import "@/public/style.css";
import "../globals.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        <main className="main">{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
