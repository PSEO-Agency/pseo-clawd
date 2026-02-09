"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { UseCase } from "@/data/useCases";

export default function UseCasePageClient({ useCase }: { useCase: UseCase }) {
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
              Use Case
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {useCase.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="gradient-text">{useCase.title.split(" ").slice(-2).join(" ")}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {useCase.description}
            </p>
            <Button variant="hero" size="xl" className="group">
              Build {useCase.name} Now
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pattern */}
      <section className="py-16 border-y border-border/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass gradient-border">
              <Code className="w-6 h-6 text-primary" />
              <span className="text-2xl font-mono font-bold">{useCase.pattern}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Example Pages</h2>
            <p className="text-muted-foreground">Real patterns that generate millions in traffic</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {useCase.examples.map((example, index) => (
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

      {/* Benefits */}
      <section className="py-24 bg-secondary/20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why {useCase.name} Work</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCase.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-6 rounded-2xl glass gradient-border"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Uses This Pattern?</h2>
            <p className="text-muted-foreground">Companies that built empires with {useCase.name.toLowerCase()}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {useCase.companies.map((company) => (
              <div key={company} className="text-2xl font-semibold text-muted-foreground">
                {company}
              </div>
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
              Ready to Build <span className="gradient-text">{useCase.name}</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Launch your first batch of {useCase.name.toLowerCase()} today — for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Start Building
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/use-cases">
                <Button variant="heroOutline" size="xl">
                  See All Use Cases
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
