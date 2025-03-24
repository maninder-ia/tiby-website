import "./globals.css";
import { NavBar } from "./components";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Tiby.AI",
  description: "Tiby.AI - Your AI Intelligence Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavBar />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
