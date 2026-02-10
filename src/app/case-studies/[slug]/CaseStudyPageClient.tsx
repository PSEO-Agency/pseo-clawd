"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Quote, FileStack, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyPageClient({ caseStudy }: { caseStudy: CaseStudy }) {
  const cs = caseStudy;
  
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
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">{cs.logo}</span>
              <div>
                <span className="text-sm text-primary font-medium">{cs.industry} Case Study</span>
                <h2 className="text-2xl font-bold">{cs.company}</h2>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{cs.title}</h1>
            <p className="text-xl text-muted-foreground">{cs.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-y border-border/50">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileStack, value: cs.metrics.pages, label: "Pages Generated" },
              { icon: TrendingUp, value: cs.metrics.traffic, label: "Traffic Growth" },
              { icon: Users, value: cs.metrics.leads, label: "Lead Increase" },
              { icon: Clock, value: cs.metrics.timeline, label: "Timeline" },
            ].map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass gradient-border text-center"
              >
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground">{cs.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-lg text-muted-foreground">{cs.solution}</p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">The Results</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cs.results.map((result, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl glass gradient-border">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p>{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-[hsl(199,89%,48%)]/10 border border-primary/20"
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-xl mb-6 italic">&ldquo;{cs.quote.text}&rdquo;</p>
              <div>
                <p className="font-semibold">{cs.quote.author}</p>
                <p className="text-sm text-muted-foreground">{cs.quote.role}</p>
              </div>
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
              Get Results Like <span className="gradient-text">{cs.company}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your programmatic SEO journey today — free to begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Start Building Free
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/case-studies">
                <Button variant="heroOutline" size="xl">
                  More Case Studies
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
