import "material-symbols";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import 'swiper/css/bundle';
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import GoTop from "@/components/Layout/GoTop";
import SidebarSettings from "@/components/Layout/SidebarSettings";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trezo - Tailwind CSS Landing Page Template",
  description: "Tailwind CSS Landing Page Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased !bg-[#fffef8] dark:!bg-dark`}>
        <Navbar />

        {children}

        <Footer />

        <GoTop />

        <SidebarSettings />
      </body>
    </html>
  );
}
