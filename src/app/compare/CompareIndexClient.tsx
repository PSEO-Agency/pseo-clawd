"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { comparisons } from "@/data/comparisons";

export default function CompareIndexClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Compare <span className="gradient-text">PSEO Growth Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we stack up against other programmatic SEO tools. Honest comparisons, real features.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/compare/${comparison.slug}`}>
                  <div className="p-8 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all group cursor-pointer h-full">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      vs {comparison.competitor}
                    </h3>
                    <p className="text-muted-foreground mb-4">{comparison.competitorDescription}</p>
                    <div className="flex items-center text-primary font-medium">
                      See comparison
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
