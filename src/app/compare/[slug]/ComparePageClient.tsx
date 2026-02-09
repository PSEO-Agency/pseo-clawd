"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { Comparison } from "@/data/comparisons";

export default function ComparePageClient({ comparison }: { comparison: Comparison }) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />

        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Comparison
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PSEO Growth Stack vs{" "}
              <span className="gradient-text">{comparison.competitor}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {comparison.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl glass gradient-border overflow-hidden"
            >
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-6 border-b border-border/50 bg-secondary/30">
                <div className="font-semibold text-muted-foreground">Feature</div>
                <div className="font-semibold text-center gradient-text">PSEO Growth Stack</div>
                <div className="font-semibold text-center text-muted-foreground">{comparison.competitor}</div>
              </div>

              {/* Rows */}
              {comparison.advantages.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-3 gap-4 p-6 border-b border-border/30 hover:bg-secondary/20 transition-colors"
                >
                  <div className="font-medium">{row.feature}</div>
                  <div className="text-center flex items-center justify-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{row.us}</span>
                  </div>
                  <div className="text-center flex items-center justify-center gap-2">
                    {row.them.toLowerCase().includes("no") || row.them.toLowerCase().includes("not") ? (
                      <X className="w-5 h-5 text-destructive" />
                    ) : (
                      <Check className="w-5 h-5 text-muted-foreground" />
                    )}
                    <span className="text-sm text-muted-foreground">{row.them}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Verdict */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-[hsl(199,89%,48%)]/10 border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4">Our Verdict</h3>
              <p className="text-muted-foreground">{comparison.verdict}</p>
            </motion.div>
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
              Ready to Try <span className="gradient-text">PSEO Growth Stack</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start free and see why teams choose us over {comparison.competitor}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Launch for Free
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/compare">
                <Button variant="heroOutline" size="xl">
                  See All Comparisons
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
