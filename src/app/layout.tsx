import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://portalis.ae";
const SHARE_IMAGE = "/projects/labrioche-waters-edge/DSC_0007.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Interior Fit-Out Company in UAE | Portalis Interiors",
    template: "%s | Portalis Interiors",
  },
  description:
    "Portalis Interiors is an interior fit-out company based in Ajman, UAE. Design, approvals, MEP and joinery for restaurants, cafés, retail and offices.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Portalis Interiors",
    locale: "en_AE",
    url: SITE_URL,
    title: "Interior Fit-Out Company in UAE | Portalis Interiors",
    description:
      "Design, approvals, MEP and joinery for restaurants, cafés, retail and offices across the UAE.",
    images: [{ url: SHARE_IMAGE, width: 2400, height: 1547, alt: "La Brioche at Water's Edge, fitted out by Portalis Interiors" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [SHARE_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

/* Business details for Google (local search & Maps) */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Portalis Interiors LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  image: `${SITE_URL}${SHARE_IMAGE}`,
  email: "info@portalis.ae",
  telephone: "+971555222074",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Area 2",
    addressLocality: "Ajman",
    addressCountry: "AE",
  },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-light-cream text-charcoal-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <LenisProvider>
          {children}
          <WhatsAppButton />
        </LenisProvider>
      </body>
      <GoogleAnalytics gaId="G-32HZ02ZN3M" />
    </html>
  );
}