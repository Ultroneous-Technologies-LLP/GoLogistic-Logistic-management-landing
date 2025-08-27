import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";

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
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
