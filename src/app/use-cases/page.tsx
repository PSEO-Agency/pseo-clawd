import { Metadata } from "next";
import UseCasesIndexClient from "./UseCasesIndexClient";

export const metadata: Metadata = {
  title: "Use Cases | Programmatic SEO Patterns That Scale | PSEO Growth Stack",
  description: "Explore proven programmatic SEO patterns: location pages, comparison pages, integration pages, and alternatives. Build thousands of pages that rank.",
};

export default function UseCasesPage() {
  return <UseCasesIndexClient />;
}
