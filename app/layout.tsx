import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pacman Tech Solutions - Lead Generation & Business Automation Specialist",
  description:
    "Transform your business with custom lead generation systems and automation that work 24/7. I help companies capture more leads, automate repetitive tasks, and scale faster.",
  generator: "v0.app",
  keywords: [
    "lead generation automation",
    "business automation",
    "sales automation",
    "data extraction",
    "workflow automation",
    "Python automation",
    "CRM automation",
  ],
  authors: [{ name: "Pacman Tech Solutions" }],
  openGraph: {
    title: "Turn Clicks Into Customers | Pacman Tech Solutions",
    description:
      "Custom lead generation and automation systems that capture qualified leads while you sleep. Stop losing opportunities—start growing on autopilot.",
    type: "website",
    locale: "en_US",
    siteName: "Pacman Tech Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn Clicks Into Customers | Pacman Tech Solutions",
    description:
      "Custom lead generation and automation systems that capture qualified leads while you sleep. Stop losing opportunities—start growing on autopilot.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}