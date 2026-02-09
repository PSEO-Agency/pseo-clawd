import { Metadata } from "next";
import CompareIndexClient from "./CompareIndexClient";

export const metadata: Metadata = {
  title: "Compare PSEO Growth Stack | vs SEOmatic, Byword, Letterdrop & More",
  description: "See how PSEO Growth Stack compares to other programmatic SEO tools. Feature comparisons, pricing, and honest reviews.",
};

export default function ComparePage() {
  return <CompareIndexClient />;
}
