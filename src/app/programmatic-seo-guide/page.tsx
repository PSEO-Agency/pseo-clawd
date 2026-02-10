import { Metadata } from "next";
import PSEOGuideClient from "./PSEOGuideClient";

export const metadata: Metadata = {
  title: "The Complete Programmatic SEO Guide 2025 | Everything You Need to Know",
  description: "The definitive guide to programmatic SEO. Learn how to create thousands of landing pages, rank for long-tail keywords, and scale organic traffic. With examples from Zapier, Airbnb, Zillow, and more.",
  keywords: [
    "programmatic SEO",
    "pSEO",
    "programmatic SEO guide",
    "how to do programmatic SEO",
    "programmatic SEO examples",
    "SEO at scale",
    "automated landing pages",
    "long-tail keywords",
  ],
  openGraph: {
    title: "The Complete Programmatic SEO Guide 2025",
    description: "The definitive guide to programmatic SEO. Learn how to create thousands of landing pages and scale organic traffic.",
    type: "article",
  },
};

export default function PSEOGuidePage() {
  return <PSEOGuideClient />;
}
