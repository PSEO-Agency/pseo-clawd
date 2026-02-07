"use client";

import { motion } from "framer-motion";
import { Layers, Store, Globe, Rocket } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Programmatic SEO Campaigns",
    features: [
      "Thousands of landing pages",
      "Comparisons, alternatives, locations",
      "Fully automated generation",
    ],
  },
  {
    icon: Store,
    title: "Directories & Marketplaces",
    features: [
      "SaaS tools directories",
      "Local business listings",
      "Product catalogs",
    ],
  },
  {
    icon: Globe,
    title: "Free Websites for Listings",
    features: [
      "Each listing gets its own site",
      "SEO-ready out of the box",
      "Connected to CRM & AI agents",
    ],
  },
  {
    icon: Rocket,
    title: "Agency Growth Engines",
    features: [
      "Free PSEO promos for clients",
      "Upsell SEO, CRO, ads",
      "Automation at scale",
    ],
  },
];

export default function WhatYouCanBuild() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Can You <span className="gradient-text">Build</span> With This?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From single pages to massive marketplaces — the infrastructure adapts to your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
