import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";

const BasementFont = localFont({
  src: "../public/fonts/basement-grotesqueRegularRegular.woff",
  variable: "--font-basement",
});

export const metadata: Metadata = {
  title: "Basement Supply",
  description:
    "basement is a boutique studio that brings what brands envision to life, through branding, visual design & development of the highest quality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${BasementFont.className} font-basement`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
