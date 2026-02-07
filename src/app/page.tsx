import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhatYouCanBuild from "@/components/landing/WhatYouCanBuild";
import FreeLayer from "@/components/landing/FreeLayer";
import PSEOBuilder from "@/components/landing/PSEOBuilder";
import TwoSidedGrowth from "@/components/landing/TwoSidedGrowth";
import ForAudiences from "@/components/landing/ForAudiences";
import HowItWorks from "@/components/landing/HowItWorks";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PSEO Growth Stack",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Build high-ranking Programmatic SEO pages, directories, and marketplaces. Get free websites, CRM, and AI agents for every project.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free tier available",
  },
  provider: {
    "@type": "Organization",
    name: "Programmatic SEO B.V.",
    url: "https://pseo-growth-stack.com",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "127",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Programmatic SEO B.V.",
  url: "https://pseo-growth-stack.com",
  logo: "https://pseo-growth-stack.com/logo.png",
  sameAs: [
    "https://twitter.com/programmaticseo",
    "https://linkedin.com/company/programmatic-seo",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@pseo-growth-stack.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main className="min-h-screen bg-background overflow-hidden">
        <Navbar />
        <Hero />
        <WhatYouCanBuild />
        <FreeLayer />
        <PSEOBuilder />
        <TwoSidedGrowth />
        <ForAudiences />
        <HowItWorks />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
