import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { JsonLd } from "@/components/JsonLd";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const title = "AFH — Software Developer";
const description =
  "Ahmad Fakhrul Hadi (AFH) is a Software Developer based in Kuala Lumpur, MY. Specializing in Flutter, React, and Next.js to craft polished, high-performance mobile and web applications.";
const url = "https://hadiayo.site";
const ogImage = "/image/SEO.png";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | AFH`,
  },
  description,
  keywords: [
    "Ahmad Fakhrul Hadi",
    "Fakhrul Hadi",
    "hadiayo",
    "software developer",
    "portfolio",
    "AFH",
    "Flutter developer",
    "Next.js developer",
  ],
  authors: [{ name: "Ahmad Fakhrul Hadi", url }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "AFH Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "AFH — Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        "font-sans",
        geist.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-screen text-[var(--foreground)] font-sans relative bg-[var(--background-muted)]">
        <JsonLd />
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

