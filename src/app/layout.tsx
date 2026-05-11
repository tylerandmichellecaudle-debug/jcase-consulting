import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Inter, Cormorant_Garamond } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jcaseconsultingtx.com"),

  manifest: "/site.webmanifest",

  title: {
    default: "J Case Consulting",
    template: "%s | J Case Consulting",
  },

  description:
    "Faith-driven coaching for high-performance living focused on leadership, discipline, family, finances, and fitness.",

  keywords: [
    "life coaching",
    "men's coaching",
    "faith-driven coaching",
    "leadership coaching",
    "discipline coaching",
    "family leadership",
    "fitness coaching",
    "financial stewardship",
    "J Case Consulting",
  ],

  openGraph: {
    title: "J Case Consulting",
    description:
      "Faith-driven coaching for high-performance living.",
    url: "https://jcaseconsultingtx.com",
    siteName: "J Case Consulting",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/social/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "J Case Consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "J Case Consulting",
    description:
      "Faith-driven coaching for high-performance living.",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1E2E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#0F1E2E] text-white antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}