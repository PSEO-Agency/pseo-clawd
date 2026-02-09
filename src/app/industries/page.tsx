import { Metadata } from "next";
import IndustriesPageClient from "./IndustriesPageClient";

export const metadata: Metadata = {
  title: "Industries | Programmatic SEO for Every Vertical | PSEO Growth Stack",
  description: "Discover how programmatic SEO drives results across SaaS, E-commerce, Real Estate, Healthcare, Finance, and more. Industry-specific strategies that scale.",
  openGraph: {
    title: "Industries | Programmatic SEO for Every Vertical",
    description: "Discover how programmatic SEO drives results across SaaS, E-commerce, Real Estate, Healthcare, Finance, and more.",
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
