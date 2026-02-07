"use client";

import { motion } from "framer-motion";
import { Building2, Store, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Building2,
    title: "For Agencies",
    headline: "Launch PSEO for Clients Without Risk",
    benefits: [
      "Launch free PSEO promos for prospects",
      "White-label websites & CRM",
      "Upsell retainers, ads, CRO, automation",
      "Centralized workflow management",
    ],
    cta: "Partner With Us",
  },
  {
    icon: Store,
    title: "For Marketplaces",
    headline: "Turn SEO Into a Marketplace Flywheel",
    benefits: [
      "Programmatic SEO brings traffic",
      "Free sites attract listings",
      "Listings create content",
      "Content compounds rankings",
    ],
    cta: "Start Building",
  },
  {
    icon: Building,
    title: "For Enterprises",
    headline: "Enterprise-Grade, Fully Customizable",
    benefits: [
      "Multi-domain architecture",
      "Multi-language support",
      "API-driven content",
      "Dedicated infrastructure",
    ],
    cta: "Talk to an Expert",
  },
];

export default function ForAudiences() {
  return (
    <section id="agencies" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <audience.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{audience.title}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-6">{audience.headline}</h3>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {audience.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button variant="heroOutline" className="w-full">
                  {audience.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
