import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer"; 
import Loading from "@/app/loading";
import {
  ClerkProvider,
  ClerkLoading,
  ClerkLoaded
} from '@clerk/nextjs'

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
    // <html lang="en">
    //   <body
    //     className={`${inter.className} bg-bg`}
    //   >
    //     <Navbar />
    //       {children}
    //     <Footer />
    //   </body>
    // </html>
    <ClerkProvider
    appearance={{
      layout: {
        unsafe_disableDevelopmentModeWarnings: true,
      },
      elements: {
        footer: "hidden",
      },
    
    }}
  >
  <html lang="en">
    <body
      className={`${inter.className} bg-bg`}
    >
      <div>
        <Navbar />
        <ClerkLoading>
        <Loading />
        </ClerkLoading>
        <ClerkLoaded>
            {children}
        </ClerkLoaded>
        <Footer />
      </div>
    </body>
  </html>
  </ClerkProvider>
  );
}
