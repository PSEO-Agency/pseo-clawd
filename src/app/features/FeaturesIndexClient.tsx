"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Clock, Link as LinkIcon, Sparkles, Search } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { features } from "@/data/features";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Clock,
  Link: LinkIcon,
  Sparkles,
  Search,
};

export default function FeaturesIndexClient() {
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
              Powerful <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, scale, and optimize programmatic SEO pages.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Database;
              return (
                <motion.div
                  key={feature.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/features/${feature.slug}`}>
                    <div className="p-8 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all group cursor-pointer h-full">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {feature.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                      <div className="flex items-center text-primary font-medium">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
