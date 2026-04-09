import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "M.H. Travel — Luxury Journeys & Senior Living",
  description:
    "M.H. Travel / El Ibdaa — Agence de Voyage Licence A. Premium travel packages, medical tourism and luxury senior living in Tunisia.",
  keywords: "travel agency, Tunisia, medical tourism, senior living, luxury hotel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
