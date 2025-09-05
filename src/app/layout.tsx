import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import data from "@/content/Layout-data.json";
import { layoutData } from "@/types/layout";

export const montserrat400 = Montserrat({
  variable: "--font-montserrat-400",
  subsets: ["latin"],
  weight: ["400"], 
  preload: true,
});

export const montserrat600 = Montserrat({
  variable: "--font-montserrat-600",
  subsets: ["latin"],
  weight: ["600"],
  preload: true,
});

export const montserratRest = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "700"], 
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gologistic.example"),
  title: {
    default:
      "Logistics & Transport Website Landing Page – Shipping, Delivery & Supply Chain UI",
    template: "%s | GoLogistic",
  },
  description:
    "Professional logistics and transport landing page UI design. Ideal for delivery companies, freight businesses, and supply chain platforms to showcase services online.",
  applicationName: "GoLogistic",
  keywords: [
    "logistics website design",
    "transport landing page",
    "delivery UI",
    "shipping company website",
    "supply chain web design",
    "freight and cargo website",
    "courier service landing page",
    "logistics platform UI",
  ],
  authors: [{ name: "GoLogistic" }],
  openGraph: {
    type: "website",
    siteName: "GoLogistic",
    title:
      "Logistics & Transport Website Landing Page – Shipping, Delivery & Supply Chain UI",
    description:
      "Professional logistics and transport landing page UI design. Ideal for delivery companies, freight businesses, and supply chain platforms to showcase services online. #LogisticsUI #TransportDesign #DeliveryWebsite #UIDesign #WebDesign #SupplyChain #ShippingUI #CourierDesign",
    url: "/",
    images: [
      { url: "/favicon.png", width: 512, height: 512, alt: "GoLogistic logo" },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Logistics & Transport Website Landing Page – Shipping, Delivery & Supply Chain UI",
    description:
      "Professional logistics and transport landing page UI design. Ideal for delivery companies, freight businesses, and supply chain platforms to showcase services online. #LogisticsUI #TransportDesign #DeliveryWebsite #UIDesign #WebDesign #SupplyChain #ShippingUI #CourierDesign",
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
      <body className={`${montserrat400.variable} ${montserrat600.variable} ${montserratRest.variable} antialiased`}>
        <Header data={layoutData.header} />
        <main>{children}</main>
        <Footer data={layoutData.footer} />
      </body>
    </html>
  );
}
