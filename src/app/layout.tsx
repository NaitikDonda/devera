import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DEVERA — Digital Experiences Built with Intention",
  description: "DEVERA is a premium creative studio designing digital experiences, products, and visual systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
