import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Nav";


export const metadata: Metadata = {
  title: "Pongsaky's Portfolio",
  description: "Pongsaky's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-800`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
