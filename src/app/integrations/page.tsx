import { Metadata } from "next";
import IntegrationsIndexClient from "./IntegrationsIndexClient";

export const metadata: Metadata = {
  title: "Integrations | WordPress, Webflow, Shopify, Next.js | PSEO Growth Stack",
  description: "Connect PSEO Growth Stack with WordPress, Webflow, Shopify, Next.js and more. Publish programmatic SEO pages to any platform.",
};

export default function IntegrationsPage() {
  return <IntegrationsIndexClient />;
}
