import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { MobileBookingBar } from "@/components/ui/MobileBookingBar";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.celaniphysio.com"),
  title: "Physiotherapy & Sports Injury Rehabilitation in Nairobi | CELANI Physiotherapy",
  description: "CELANI Physiotherapy and Sports Injuries Clinic offers professional orthopedic, sports and pelvic floor rehabilitation in Nairobi.",
  openGraph: {
    title: "Physiotherapy & Sports Injury Rehabilitation in Nairobi | CELANI Physiotherapy",
    description: "CELANI Physiotherapy and Sports Injuries Clinic offers professional orthopedic, sports and pelvic floor rehabilitation in Nairobi.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy & Sports Injury Rehabilitation in Nairobi | CELANI Physiotherapy",
    description: "CELANI Physiotherapy and Sports Injuries Clinic offers professional orthopedic, sports and pelvic floor rehabilitation in Nairobi.",
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
      className={`${manrope.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
        <MobileBookingBar />
      </body>
    </html>
  );
}
