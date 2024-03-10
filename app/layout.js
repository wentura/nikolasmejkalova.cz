import Contact from "@/components/contact";
import Footer from "@/components/footer";
import "@/public/style.css";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <main className="main">{children}</main>
        
      </body>
    </html>
  );
}
