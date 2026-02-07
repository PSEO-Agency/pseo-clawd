import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pseo-growth-stack.com"),
  title: {
    default: "PSEO Growth Stack | Launch Programmatic SEO For Free At Any Scale",
    template: "%s | PSEO Growth Stack",
  },
  description:
    "Build high-ranking Programmatic SEO pages, directories, and marketplaces. Get free websites, CRM, and AI agents for every project. Launch without upfront costs.",
  keywords: [
    "programmatic SEO",
    "PSEO",
    "SEO automation",
    "directory builder",
    "marketplace SEO",
    "automated landing pages",
    "SEO at scale",
    "content generation",
    "AI SEO",
    "SEO growth engine",
  ],
  authors: [{ name: "Programmatic SEO B.V." }],
  creator: "Programmatic SEO B.V.",
  publisher: "Programmatic SEO B.V.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pseo-growth-stack.com",
    siteName: "PSEO Growth Stack",
    title: "PSEO Growth Stack | Launch Programmatic SEO For Free At Any Scale",
    description:
      "Build high-ranking Programmatic SEO pages, directories, and marketplaces. Get free websites, CRM, and AI agents for every project.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PSEO Growth Stack - Launch Programmatic SEO For Free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PSEO Growth Stack | Launch Programmatic SEO For Free At Any Scale",
    description:
      "Build high-ranking Programmatic SEO pages, directories, and marketplaces. Get free websites, CRM, and AI agents for every project.",
    images: ["/og-image.png"],
    creator: "@programmaticseo",
  },
  alternates: {
    canonical: "https://pseo-growth-stack.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
