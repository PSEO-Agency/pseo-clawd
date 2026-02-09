import { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing | Start Free, Scale Infinitely | PSEO Growth Stack",
  description: "PSEO Growth Stack pricing: Start free with full features. Upgrade as you scale. Transparent pricing for agencies, marketplaces, and enterprises.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
