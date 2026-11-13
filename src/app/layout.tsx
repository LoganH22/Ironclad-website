import type { Metadata, Viewport } from "next";
import { Public_Sans, Newsreader } from "next/font/google";
import Script from "next/script";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES, SITE_NAME, SITE_URL } from "@/lib/site";
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

// Every page sets its own title, description, and preview (see pageMetadata
// in lib/site.ts); these apply to anything that doesn't.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Financial & Management Consulting in Lancaster, PA | Ironclad",
  description:
    "Financial and management consulting for growing Lancaster, PA businesses: cash flow tracking, real budgets, business valuation, and hands-on guidance.",
};

export const viewport: Viewport = {
  themeColor: "#0e1524",
};

// What search engines read about the business. Only facts that are on the site:
// no ratings, hours, or prices.
const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      description:
        "Financial and management consulting: cash flow tracking, budget building, business valuation, and hands-on operating guidance.",
      url: SITE_URL,
      logo: `${SITE_URL}/logo/04-mark-navy-steel.svg`,
      image: `${SITE_URL}/opengraph-image`,
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: { "@id": `${SITE_URL}/#business` },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#business` },
    },
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
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
