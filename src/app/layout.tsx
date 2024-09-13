import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/app/Layout/Footer";
import Navbar from "@/app/Layout/Navbar";
import Image from "next/image";
import Bots from "./Layout/Bots";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Live.Fit",
  description: "Live Fit is a fitness app that helps you stay fit and healthy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative font-sans min-h-screen py-8 px-12 md:px-24 ${inter.className}`}
      >
        <Navbar />
        <div className="min-h-[calc(100vh-14rem)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
