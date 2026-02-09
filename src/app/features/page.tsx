import { Metadata } from "next";
import FeaturesIndexClient from "./FeaturesIndexClient";

export const metadata: Metadata = {
  title: "Features | Programmatic SEO Tools & Capabilities | PSEO Growth Stack",
  description: "Explore PSEO Growth Stack features: datasets, drip publishing, internal linking, AI content, and fast indexing. Everything you need for programmatic SEO.",
};

export default function FeaturesPage() {
  return <FeaturesIndexClient />;
}
