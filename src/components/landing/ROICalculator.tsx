"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [pages, setPages] = useState(500);

  // Calculations
  const hoursPerPageManual = 4; // Research, write, optimize, publish
  const costPerPageWriter = 50; // Average cost to hire a writer
  const hoursWithPSEO = 2; // Initial setup
  const costWithPSEO = 0; // Free tier

  const manualHours = pages * hoursPerPageManual;
  const manualCost = pages * costPerPageWriter;
  const hoursSaved = manualHours - hoursWithPSEO;
  const moneySaved = manualCost - costWithPSEO;

  return (
    <section className="relative py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            ROI Calculator
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See How Much You&apos;ll <span className="gradient-text">Save</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your time and money savings with programmatic SEO.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl glass gradient-border p-8 md:p-12 glow">
            {/* Slider */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-medium flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  How many pages do you need?
                </label>
                <span className="text-3xl font-bold gradient-text">{pages.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10"
                max="10000"
                step="10"
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                className="w-full h-3 rounded-full bg-secondary appearance-none cursor-pointer accent-primary"
                style={{
                  background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${(pages / 10000) * 100}%, hsl(var(--secondary)) ${(pages / 10000) * 100}%, hsl(var(--secondary)) 100%)`,
                }}
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>10 pages</span>
                <span>10,000 pages</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                key={`hours-${pages}`}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="p-6 rounded-2xl bg-secondary/50 text-center"
              >
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl font-bold gradient-text mb-2">
                  {hoursSaved.toLocaleString()}h
                </div>
                <div className="text-sm text-muted-foreground">Hours Saved</div>
                <div className="text-xs text-muted-foreground/70 mt-2">
                  vs {manualHours.toLocaleString()}h manual
                </div>
              </motion.div>

              <motion.div
                key={`money-${pages}`}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="p-6 rounded-2xl bg-secondary/50 text-center"
              >
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl font-bold gradient-text mb-2">
                  ${moneySaved.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Money Saved</div>
                <div className="text-xs text-muted-foreground/70 mt-2">
                  vs ${manualCost.toLocaleString()} hiring writers
                </div>
              </motion.div>

              <motion.div
                key={`speed-${pages}`}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="p-6 rounded-2xl bg-secondary/50 text-center"
              >
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl font-bold gradient-text mb-2">
                  {Math.round(manualHours / hoursWithPSEO)}x
                </div>
                <div className="text-sm text-muted-foreground">Faster</div>
                <div className="text-xs text-muted-foreground/70 mt-2">
                  Launch in hours, not months
                </div>
              </motion.div>
            </div>

            {/* Bottom note */}
            <div className="mt-8 pt-6 border-t border-border/30 text-center">
              <p className="text-sm text-muted-foreground">
                Based on average costs: <span className="text-foreground">${costPerPageWriter}/page</span> for writers, 
                <span className="text-foreground"> {hoursPerPageManual}h/page</span> for manual creation.
                <br />
                With PSEO Growth Stack: <span className="text-primary font-semibold">Free tier available</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
