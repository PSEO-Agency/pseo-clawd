"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Clock, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { Industry } from "@/data/industries";

export default function IndustryPageClient({ industry }: { industry: Industry }) {
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
              {industry.name} Industry
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {industry.hero.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="gradient-text">{industry.hero.split(" ").slice(-2).join(" ")}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {industry.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Start Free for {industry.name}
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                See {industry.name} Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/50">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileStack className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{industry.stats.pages}</div>
              <div className="text-muted-foreground">Pages Generated</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{industry.stats.traffic}</div>
              <div className="text-muted-foreground">Traffic Growth</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{industry.stats.time}</div>
              <div className="text-muted-foreground">To Launch</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What You Can Build for <span className="gradient-text">{industry.name}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proven programmatic SEO strategies tailored for {industry.name.toLowerCase()}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industry.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass gradient-border"
              >
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <p className="font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-24 bg-secondary/20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Proven <span className="gradient-text">Patterns</span> That Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These companies built billion-dollar SEO engines. Now you can too.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industry.examples.map((example, index) => (
              <motion.div
                key={example}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass gradient-border text-center"
              >
                <p className="text-lg font-medium">{example}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Scale Your <span className="gradient-text">{industry.name} SEO</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join leading {industry.name.toLowerCase()} companies using programmatic SEO to dominate search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Launch for Free
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/industries">
                <Button variant="heroOutline" size="xl">
                  View All Industries
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
