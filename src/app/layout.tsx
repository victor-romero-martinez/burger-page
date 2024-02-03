import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: "Burger",
  description: "Page about bugers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
