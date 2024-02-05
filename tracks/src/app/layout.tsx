import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LikedTracksProvider } from "../contexts/LikedTracksContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracks",
  description: "See all tracks and add liked tracks to a user page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LikedTracksProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </LikedTracksProvider>
  );
}
