"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  {
    label: "Use Cases",
    href: "/use-cases",
    children: [
      { label: "Location Pages", href: "/use-cases/location-pages" },
      { label: "Comparison Pages", href: "/use-cases/comparison-pages" },
      { label: "Integration Pages", href: "/use-cases/integration-pages" },
      { label: "Alternative Pages", href: "/use-cases/alternative-pages" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "SaaS", href: "/industries/saas" },
      { label: "E-commerce", href: "/industries/ecommerce" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "View All →", href: "/industries" },
    ],
  },
  {
    label: "Features",
    href: "/features",
    children: [
      { label: "Datasets", href: "/features/datasets" },
      { label: "Drip Publishing", href: "/features/drip-publishing" },
      { label: "Internal Linking", href: "/features/internal-linking" },
      { label: "AI Content", href: "/features/ai-content" },
      { label: "Indexing", href: "/features/indexing" },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
    children: [
      { label: "WordPress", href: "/integrations/wordpress" },
      { label: "Webflow", href: "/integrations/webflow" },
      { label: "Shopify", href: "/integrations/shopify" },
      { label: "Next.js", href: "/integrations/nextjs" },
    ],
  },
  {
    label: "Resources",
    href: "/guides",
    children: [
      { label: "Guides", href: "/guides" },
      { label: "Compare Tools", href: "/compare" },
      { label: "vs SEOmatic", href: "/compare/pseo-growth-stack-vs-seomatic" },
      { label: "vs Byword", href: "/compare/pseo-growth-stack-vs-byword" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold gradient-text">
            PSEO Growth Stack
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="w-56 p-2 rounded-xl glass gradient-border shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Launch for Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border/50 max-h-[80vh] overflow-y-auto"
          >
            <div className="container px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block text-sm font-medium text-foreground py-2"
                    onClick={() => !link.children && setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-2 mt-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-sm text-muted-foreground hover:text-foreground py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border/50 space-y-2">
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  Launch for Free
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
