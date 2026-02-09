"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { integrations } from "@/data/integrations";
import { WordPressLogo, WebflowLogo, ShopifyLogo, NextjsLogo } from "@/components/logos";

const logoComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  wordpress: WordPressLogo,
  webflow: WebflowLogo,
  shopify: ShopifyLogo,
  nextjs: NextjsLogo,
};

export default function IntegrationsIndexClient() {
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
              Publish to <span className="gradient-text">Any Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect your favorite CMS or framework. Generate pages here, publish everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {integrations.map((integration, index) => {
              const LogoComponent = logoComponents[integration.logoKey];
              return (
                <motion.div
                  key={integration.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/integrations/${integration.slug}`}>
                    <div className="p-8 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all group cursor-pointer h-full">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${integration.color}15` }}
                      >
                        {LogoComponent && (
                          <LogoComponent className="w-10 h-10" />
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {integration.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{integration.description}</p>
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
