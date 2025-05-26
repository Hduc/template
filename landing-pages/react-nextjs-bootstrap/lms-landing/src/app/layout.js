import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "material-symbols";
import "swiper/css";
import "swiper/css/bundle";

// Styles
import "../../styles/style.css";

import { Inter } from "next/font/google";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import SidebarSettings from "@/components/Layout/SidebarSettings";
import GoTop from "@/components/Layout/GoTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trezo - Landing Page",
  description: "Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} for-landing-page-body`}>
        <Navbar />
        
        {children}

        <Footer />

        <SidebarSettings />

        <GoTop />
      </body>
    </html>
  );
}
