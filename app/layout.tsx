import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alphabinet - Digital Solutions Agency",
  description:
    "Alphabinet is a premier digital solutions agency offering web development, UI/UX design, e-commerce solutions, and more.",
  keywords: "digital agency, web development, UI/UX design, e-commerce, mobile app development, digital marketing",
  authors: [{ name: "Alphabinet Team" }],
  creator: "Alphabinet",
  publisher: "Alphabinet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alphabinet.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Alphabinet - Digital Solutions Agency",
    description:
      "Alphabinet is a premier digital solutions agency offering web development, UI/UX design, e-commerce solutions, and more.",
    url: "https://alphabinet.com",
    siteName: "Alphabinet",
    images: [
      {
        url: "https://alphabinet.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alphabinet - Digital Solutions Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alphabinet - Digital Solutions Agency",
    description:
      "Alphabinet is a premier digital solutions agency offering web development, UI/UX design, e-commerce solutions, and more.",
    images: ["https://alphabinet.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon-16x16.png",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-verification-code" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Alphabinet",
              url: "https://alphabinet.com",
              logo: "https://alphabinet.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8273873950",
                contactType: "customer service",
                email: "alphabinetglobal@gmail.com",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
              },
              sameAs: [
                "https://www.facebook.com/alphabinet",
                "https://www.instagram.com/alphabinet",
                "https://twitter.com/alphabinet",
              ],
            }),
          }}
        />

        {/* Favicon Links */}
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="shortcut icon" href="/favicon_io/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
