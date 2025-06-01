import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Navigation from "../components/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hengegjengen - Girls Trip Hub",
  description: "Plan the perfect girls trip to Sweden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${caveat.variable} antialiased min-h-screen bg-background`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
