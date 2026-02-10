"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, FileStack, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudiesIndexClient() {
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
              Real Results from <span className="gradient-text">Real Companies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how companies across industries use programmatic SEO to scale their organic traffic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 border-y border-border/50 bg-secondary/20">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: FileStack, value: "200K+", label: "Pages Generated" },
              { icon: TrendingUp, value: "650%", label: "Avg Traffic Growth" },
              { icon: Users, value: "400%", label: "Avg Lead Increase" },
              { icon: Clock, value: "4 mo", label: "Avg Time to Results" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container px-4">
          <div className="space-y-8 max-w-5xl mx-auto">
            {caseStudies.map((cs, index) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/case-studies/${cs.slug}`}>
                  <div className="p-8 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all group cursor-pointer">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-4xl">{cs.logo}</span>
                          <div>
                            <span className="text-sm text-primary font-medium">{cs.industry}</span>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                              {cs.company}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{cs.description}</p>
                        <div className="flex items-center text-primary font-medium">
                          Read case study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 lg:w-64">
                        <div className="p-4 rounded-xl bg-secondary/50 text-center">
                          <div className="text-2xl font-bold gradient-text">{cs.metrics.pages}</div>
                          <div className="text-xs text-muted-foreground">Pages</div>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/50 text-center">
                          <div className="text-2xl font-bold gradient-text">{cs.metrics.traffic}</div>
                          <div className="text-xs text-muted-foreground">Traffic</div>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/50 text-center">
                          <div className="text-2xl font-bold gradient-text">{cs.metrics.leads}</div>
                          <div className="text-xs text-muted-foreground">Leads</div>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/50 text-center">
                          <div className="text-2xl font-bold gradient-text">{cs.metrics.timeline}</div>
                          <div className="text-xs text-muted-foreground">Timeline</div>
                        </div>
                      </div>
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
              Want Results Like These?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your programmatic SEO journey today — free to begin.
            </p>
            <Button variant="hero" size="xl" className="group">
              Start Building Free
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
