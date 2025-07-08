import type { Metadata } from "next";
import { Montserrat, Figtree } from "next/font/google";
import "./globals.css";
import "easymde/dist/easymde.min.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer-elements/Footer"

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Stephanie Thompson, Web Application Engineer",
  description: "Steph codes is the portfolio website for Stephanie Thompson.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${figtree.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
