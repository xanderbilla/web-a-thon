import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/app/Layout/Footer";
import Navbar from "@/app/Layout/Navbar";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AWS Amplify Gen 2",
  description: "Next Gen AWS Amplify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans min-h-screen py-8 px-12 md:px-24 ${inter.className}`}
      >
        <Navbar />
        <div className="min-h-[calc(100vh-14rem)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
