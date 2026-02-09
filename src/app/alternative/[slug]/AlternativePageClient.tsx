"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Alternative } from "@/data/alternatives";

export default function AlternativePageClient({ alternative }: { alternative: Alternative }) {
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
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {alternative.competitor} Alternative
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Best <span className="gradient-text">{alternative.competitor} Alternative</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {alternative.description}
            </p>
            <Button variant="hero" size="xl" className="group">
              Try PSEO Growth Stack Free
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Switch from <span className="gradient-text">{alternative.competitor}</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {alternative.reasons.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass gradient-border"
              >
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <p className="font-medium">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Make the Switch <span className="gradient-text">Today</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join teams who switched from {alternative.competitor} and never looked back.
            </p>
            <Button variant="hero" size="xl" className="group">
              Start Free
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
