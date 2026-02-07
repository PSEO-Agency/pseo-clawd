"use client";

import { motion } from "framer-motion";
import { Scan, Cpu, FileStack, RefreshCw, Zap } from "lucide-react";

const capabilities = [
  { icon: Scan, title: "Crawl any site or dataset", description: "Extract structured data from any source" },
  { icon: Cpu, title: "Detect structure automatically", description: "AI-powered schema recognition" },
  { icon: FileStack, title: "Generate infinite SEO pages", description: "Scale to millions of pages" },
  { icon: RefreshCw, title: "Sync with APIs & live data", description: "Real-time content updates" },
  { icon: Zap, title: "Continuously improve pages", description: "Performance-based optimization" },
];

export default function PSEOBuilder() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Core Engine
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Engine Behind It All: <span className="gradient-text">PSEO Builder</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A production-grade system that turns data into ranking pages at massive scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-6 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all duration-300 ${
                index === 4 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
