"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { useCases } from "@/data/useCases";

export default function UseCasesIndexClient() {
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
              Programmatic SEO <span className="gradient-text">Use Cases</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven patterns that have generated billions in traffic. Now available for your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/use-cases/${useCase.slug}`}>
                  <div className="p-8 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all group cursor-pointer h-full">
                    <div className="text-sm text-primary font-mono mb-2">{useCase.pattern}</div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {useCase.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {useCase.examples.slice(0, 2).map((ex) => (
                        <span key={ex} className="text-xs px-2 py-1 rounded-full bg-secondary">
                          {ex}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-primary font-medium">
                      Learn more
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
