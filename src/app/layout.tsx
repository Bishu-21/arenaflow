import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ArenaFlow - Intelligent Venue Management",
  description: "B2B venue management and crowd flow optimization platform. Maximize physical event experiences at large-scale sporting venues.",
  openGraph: {
    title: "ArenaFlow - Intelligent Venue Management",
    description: "B2B venue management and crowd flow optimization platform. Maximize physical event experiences at large-scale sporting venues.",
    url: "https://arenaflow.events",
    siteName: "ArenaFlow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArenaFlow - Intelligent Venue Management",
    description: "B2B venue management and crowd flow optimization platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { GoogleAnalytics } from "@/components/google-analytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "ArenaFlow",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Stadium",
        "name": "ArenaFlow Supported Venues",
        "description": "Optimized crowd flow and management software for large scale stadiums."
      }
    ]
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground text-base tracking-tight">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
