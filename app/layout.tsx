import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "J Jayson | B.Tech Student • Programmer • AI Enthusiast",
  description:
    "Portfolio of J Jayson, a first-year B.Tech student at SRMIST Ramapuram exploring programming, artificial intelligence, and technology.",
  keywords: [
    "J Jayson",
    "Portfolio",
    "B.Tech Student",
    "SRMIST",
    "Programmer",
    "AI Enthusiast",
    "Java",
    "Python",
  ],
  authors: [{ name: "J Jayson" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased selection:bg-primary/30 selection:text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
