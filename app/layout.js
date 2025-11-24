import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import LenisSmooth from "../components/LenisSmooth";
import Footer from "../components/Footer";

// Load Poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Rills | School",
  description:
    "At RILLS, we imagine a future where every child shines bright with possibilities. As the best school in Pakistan, our mission is to nurture strong, kind, and curious individuals within a safe and inspiring space. Guided by a child-centered learning philosophy, a dedicated team, and a balanced curriculum, we provide the groundwork for lifelong growth. /n Whether your child is just beginning their early childhood education or getting ready for their next big steps, our school is here to support and guide them at every turn.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        {/* <TopBar /> */}
        <LenisSmooth />
        <main className="relative">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
