import type { Metadata, Viewport } from "next";
import { Public_Sans, Newsreader } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title:
    "Ironclad Consulting Group | Financial & Management Consulting in Lancaster, PA",
  description:
    "Ironclad Consulting Group provides cash flow tracking, budget building, business valuation, and management advisory services for growing businesses in Lancaster, PA and beyond.",
};

export const viewport: Viewport = {
  themeColor: "#0e1524",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Ironclad Consulting Group",
  description:
    "Financial and management consulting: cash flow tracking, budget building, business valuation, and management advisory.",
  url: "https://ironcladconsultinggroup.net",
  telephone: "+1-717-945-8210",
  email: "info@ironcladconsultinggroup.net",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Lancaster County, PA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lancaster",
    addressRegion: "PA",
    addressCountry: "US",
  },
  founder: [
    { "@type": "Person", name: "Logan Hostetter" },
    { "@type": "Person", name: "Matt Welsey" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Script
          src="https://news.google.com/swg/js/v1/publisher.js"
          strategy="afterInteractive"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
