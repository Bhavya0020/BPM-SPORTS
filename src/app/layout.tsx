import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer"; 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "BMP Sports",
  description: "One stop for all sports needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-bg`}
      >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
