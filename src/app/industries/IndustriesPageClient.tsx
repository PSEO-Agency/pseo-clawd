"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { industries } from "@/data/industries";

export default function IndustriesPageClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />

        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Programmatic SEO for{" "}
              <span className="gradient-text">Every Industry</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Proven strategies and templates tailored to your vertical. 
              Launch thousands of pages that rank and convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/industries/${industry.slug}`}>
                  <div className="h-full p-8 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all duration-300 group cursor-pointer">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {industry.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-sm">
                        <span className="text-primary font-semibold">{industry.stats.pages} pages</span>
                        <span className="text-muted-foreground">{industry.stats.traffic} growth</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our platform works for any vertical. Let&apos;s discuss your specific use case.
            </p>
            <Button variant="hero" size="xl" className="group">
              Talk to Us
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
