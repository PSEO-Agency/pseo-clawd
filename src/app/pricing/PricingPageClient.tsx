"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with programmatic SEO.",
    features: [
      "Up to 100 pages",
      "Basic templates",
      "Free website included",
      "CRM included",
      "AI agent access",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "/month",
    description: "For teams scaling their programmatic SEO.",
    features: [
      "Up to 10,000 pages",
      "Advanced templates",
      "Custom domains",
      "Full CRM features",
      "Priority AI agents",
      "API access",
      "Email support",
      "Analytics dashboard",
    ],
    cta: "Start Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale deployments and custom needs.",
    features: [
      "Unlimited pages",
      "Custom development",
      "Multi-domain support",
      "White-label",
      "Dedicated infrastructure",
      "SLA guarantee",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPageClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />

        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Start Free, <span className="gradient-text">Scale Infinitely</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No credit card required. Upgrade only when you need more power.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl ${
                  plan.highlighted
                    ? "glass gradient-border glow"
                    : "glass gradient-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "hero" : "heroOutline"}
                  className="w-full group"
                >
                  {plan.cta}
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is the Free tier really free forever?",
                  a: "Yes. You can use PSEO Growth Stack for free forever with up to 100 pages. No credit card required.",
                },
                {
                  q: "What counts as a page?",
                  a: "A page is any programmatically generated landing page, whether it's a location page, comparison page, or directory listing.",
                },
                {
                  q: "Can I upgrade or downgrade anytime?",
                  a: "Absolutely. Upgrade when you need more pages, downgrade when you don't. No long-term contracts.",
                },
                {
                  q: "Do you offer discounts for agencies?",
                  a: "Yes! Contact us for agency pricing with volume discounts and white-label options.",
                },
              ].map((faq) => (
                <div key={faq.q} className="p-6 rounded-2xl glass gradient-border">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
