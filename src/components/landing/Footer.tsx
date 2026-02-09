"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = {
  useCases: [
    { label: "Location Pages", href: "/use-cases/location-pages" },
    { label: "Comparison Pages", href: "/use-cases/comparison-pages" },
    { label: "Integration Pages", href: "/use-cases/integration-pages" },
    { label: "Alternative Pages", href: "/use-cases/alternative-pages" },
  ],
  industries: [
    { label: "SaaS", href: "/industries/saas" },
    { label: "E-commerce", href: "/industries/ecommerce" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "All Industries", href: "/industries" },
  ],
  features: [
    { label: "Datasets", href: "/features/datasets" },
    { label: "Drip Publishing", href: "/features/drip-publishing" },
    { label: "Internal Linking", href: "/features/internal-linking" },
    { label: "AI Content", href: "/features/ai-content" },
    { label: "Indexing", href: "/features/indexing" },
  ],
  integrations: [
    { label: "WordPress", href: "/integrations/wordpress" },
    { label: "Webflow", href: "/integrations/webflow" },
    { label: "Shopify", href: "/integrations/shopify" },
    { label: "Next.js", href: "/integrations/nextjs" },
  ],
  resources: [
    { label: "Guides", href: "/guides" },
    { label: "Compare Tools", href: "/compare" },
    { label: "SEOmatic Alternative", href: "/alternative/seomatic-alternative" },
    { label: "Byword Alternative", href: "/alternative/byword-alternative" },
  ],
  company: [
    { label: "Pricing", href: "/pricing" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link href="/" className="text-xl font-bold gradient-text">
                PSEO Growth Stack
              </Link>
              <p className="text-sm text-muted-foreground mt-3 max-w-xs">
                Launch programmatic SEO for free. Build directories, marketplaces, and landing pages at scale.
              </p>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="font-semibold mb-4">Use Cases</h4>
              <ul className="space-y-2">
                {footerLinks.useCases.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                {footerLinks.features.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Integrations */}
            <div>
              <h4 className="font-semibold mb-4">Integrations</h4>
              <ul className="space-y-2">
                {footerLinks.integrations.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Programmatic SEO B.V. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built by Programmatic SEO B.V., in joint venture with Wellplan.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
