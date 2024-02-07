import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: "KFC no oficial",
  description: "Marca líder especializada en los productos de pollo con más de 17.000 restaurantes en todo el mundo con sede en Louisville. P",
  metadataBase: new URL('https://kfc-no-oficial-page.vercel.app/'),
  openGraph: { images: 'opengraph-image.webp' }
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
