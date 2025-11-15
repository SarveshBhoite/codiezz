// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import { Providers } from "./providers";
import { SkipToContent } from "../components/skip-to-content";
import { BackgroundDecoration } from "../components/background-decoration";

// Font configuration
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

// === SITE CONFIG ===
const siteConfig = {
  name: "Codiezz",
  tagline: "Full-Stack Digital Solutions for the Future",
  title: "Web Development, App Development, AI & Automation Services",
  description:
    "Codiezz delivers cutting-edge web and mobile applications, AI-powered solutions, and intelligent automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://codiezz.com",
  ogImage:
    "https://res.cloudinary.com/dpu1q7m4e/image/upload/v1755672221/OG_28_ymepir.png",
  logo: "/logobg.png", // ✅ Updated
  links: {
    twitter: "https://twitter.com/codiezz",
    github: "https://github.com/codiezz",
    linkedin: "https://linkedin.com/company/codiezz",
    whatsapp: "https://wa.me/971552652014",
    calendar: "https://cal.com/prathamesh-gaikwad-63bhom",
  },
};

// === VIEWPORT CONFIG ===
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#191B18" },
  ],
};

// === METADATA ===
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: [{ url: "/logobg.png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

// === JSON-LD Structured Data ===
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`, // ✅ Updated
    sameAs: Object.values(siteConfig.links),
  };
}

// === ROOT LAYOUT ===
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ✅ Preload correct logo */}
        <link rel="preload" as="image" href={siteConfig.logo} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
      </head>

      <body
        className="
          font-sans antialiased
          bg-white text-dark-gray
          motion-safe:scroll-smooth
        "
      >
        <Providers>
          <SkipToContent />
          {/* <BackgroundDecoration /> */}

          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
