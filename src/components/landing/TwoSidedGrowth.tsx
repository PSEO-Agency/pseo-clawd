"use client";

import { motion } from "framer-motion";
import { Crown, Users } from "lucide-react";

export default function TwoSidedGrowth() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built for <span className="gradient-text">Network Effects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your SEO scales because your users help you scale it.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Platform Owner Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl glass gradient-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Platform Owner</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Launch a directory or marketplace",
                  "Control taxonomy, SEO structure, monetization",
                  "Own the domain authority",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Users & Listings Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl glass gradient-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[hsl(199,89%,48%)]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[hsl(199,89%,48%)]" />
                </div>
                <h3 className="text-2xl font-bold">Users & Listings</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Create their own free website",
                  "Get SEO exposure automatically",
                  "Manage leads via CRM",
                  "Use AI agents to grow",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[hsl(199,89%,48%)]" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Result Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-[hsl(199,89%,48%)]/10 border border-primary/20 text-center"
          >
            <p className="text-lg font-semibold">
              <span className="gradient-text">Result:</span> Your SEO scales because your users help you scale it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
