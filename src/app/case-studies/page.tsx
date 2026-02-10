import { Metadata } from "next";
import CaseStudiesIndexClient from "./CaseStudiesIndexClient";

export const metadata: Metadata = {
  title: "Case Studies | Real Programmatic SEO Results | PSEO Growth Stack",
  description: "See how companies use programmatic SEO to generate 500%+ traffic growth. Real case studies with metrics from SaaS, e-commerce, real estate, and more.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesIndexClient />;
}
