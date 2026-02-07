"use client";

import { motion } from "framer-motion";
import { Globe, Database, Bot, Sparkles } from "lucide-react";

const features = [
  { icon: Globe, label: "A free website" },
  { icon: Database, label: "A built-in CRM" },
  { icon: Bot, label: "AI agents for automation" },
  { icon: Sparkles, label: "Lead qualification" },
];

export default function FreeLayer() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass gradient-border p-8 md:p-12 lg:p-16 glow"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Wellplan Joint Venture
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Every Project Includes a{" "}
                  <span className="gradient-text">Free Website, CRM & AI Agents</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Thanks to our joint venture with Wellplan, every PSEO project can include a complete growth stack. 
                  Any person, company, or agency can launch PSEO-driven promotion without technical or financial barriers.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-primary font-semibold">Start free. Upgrade only when you scale.</span>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  {/* Visual representation of the stack */}
                  <div className="space-y-4">
                    {['Website', 'CRM', 'AI Agents', 'Analytics'].map((layer, index) => (
                      <motion.div
                        key={layer}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{layer}</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Included</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${85 - index * 10}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-primary to-[hsl(199,89%,48%)]"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
