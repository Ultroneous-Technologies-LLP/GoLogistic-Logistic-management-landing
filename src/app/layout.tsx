import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import data from "@/content/Layout-data.json";
import { layoutData } from "@/types/layout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gologistic.example"),
  title: {
    default: "GoLogistic – Logistics Management & Shipping Services",
    template: "%s | GoLogistic",
  },
  description:
    "Reliable logistics management platform offering shipping, warehousing, and supply chain solutions.",
  applicationName: "GoLogistic",
  keywords: [
    "logistics",
    "shipping",
    "freight",
    "supply chain",
    "warehousing",
    "transportation",
  ],
  authors: [{ name: "GoLogistic" }],
  openGraph: {
    type: "website",
    siteName: "GoLogistic",
    title: "GoLogistic – Logistics Management & Shipping Services",
    description:
      "Reliable logistics management platform offering shipping, warehousing, and supply chain solutions.",
    url: "/",
    images: [
      { url: "/favicon.png", width: 512, height: 512, alt: "GoLogistic logo" },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoLogistic – Logistics Management & Shipping Services",
    description:
      "Reliable logistics management platform offering shipping, warehousing, and supply chain solutions.",
    images: ["/favicon.png"],
    creator: "@gologistic",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },

      // Dark mode versions
      {
        url: "/favicon-dark.ico",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-dark.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-dark.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180" },
      {
        url: "/favicon-dark.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutData = data as layoutData;
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} antialiased`}>
        <Header data={layoutData.header} />
        <main>{children}</main>
        <Footer data={layoutData.footer} />
      </body>
    </html>
  );
}
