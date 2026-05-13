import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
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
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
