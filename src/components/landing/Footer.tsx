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
  compare: [
    { label: "vs SEOmatic", href: "/compare/pseo-growth-stack-vs-seomatic" },
    { label: "vs Byword", href: "/compare/pseo-growth-stack-vs-byword" },
    { label: "vs Letterdrop", href: "/compare/pseo-growth-stack-vs-letterdrop" },
    { label: "All Comparisons", href: "/compare" },
  ],
  alternatives: [
    { label: "SEOmatic Alternative", href: "/alternative/seomatic-alternative" },
    { label: "Byword Alternative", href: "/alternative/byword-alternative" },
    { label: "Surfer SEO Alternative", href: "/alternative/surfer-seo-alternative" },
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
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2">
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
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
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
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compare */}
            <div>
              <h4 className="font-semibold mb-4">Compare</h4>
              <ul className="space-y-2">
                {footerLinks.compare.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold mb-4 mt-6">Alternatives</h4>
              <ul className="space-y-2">
                {footerLinks.alternatives.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
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
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
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
