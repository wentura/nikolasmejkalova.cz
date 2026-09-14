import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Matomo from "@/components/matomo";
import Menu from "@/components/menuObsah";

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main className="main">{children}</main>
      <Contact />
      <Footer />
      <Matomo />
    </>
  );
}
