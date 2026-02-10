"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, CheckCircle2, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";

const tableOfContents = [
  { id: "what-is-pseo", title: "What is Programmatic SEO?" },
  { id: "why-pseo", title: "Why Programmatic SEO Works" },
  { id: "examples", title: "Real-World Examples" },
  { id: "page-types", title: "Types of Programmatic Pages" },
  { id: "data-sources", title: "Data Sources for PSEO" },
  { id: "templates", title: "Creating Templates" },
  { id: "avoiding-penalties", title: "Avoiding Google Penalties" },
  { id: "tools", title: "Tools & Platforms" },
  { id: "getting-started", title: "Getting Started" },
];

const examples = [
  { name: "Zapier", pages: "7,000+", type: "Integration pages", url: "zapier.com/apps" },
  { name: "Airbnb", pages: "100,000+", type: "Location pages", url: "airbnb.com/[city]" },
  { name: "Zillow", pages: "1,000,000+", type: "Property & location pages", url: "zillow.com" },
  { name: "G2", pages: "500,000+", type: "Software review pages", url: "g2.com" },
  { name: "NomadList", pages: "600+", type: "City pages", url: "nomadlist.com" },
  { name: "Ahrefs", pages: "50+", type: "Free tool pages", url: "ahrefs.com/writing-tools" },
  { name: "Wise", pages: "10,000+", type: "Currency pages", url: "wise.com/us/currency-converter" },
  { name: "Yelp", pages: "10,000,000+", type: "Business listing pages", url: "yelp.com" },
];

const pageTypes = [
  { 
    type: "Location Pages",
    pattern: "[Service] in [City]",
    examples: ["Best pizza in Brooklyn", "Plumbers in Austin", "Hotels in Paris"],
    bestFor: "Local businesses, real estate, travel",
  },
  {
    type: "Comparison Pages",
    pattern: "[Product A] vs [Product B]",
    examples: ["Slack vs Teams", "React vs Vue", "iPhone vs Android"],
    bestFor: "SaaS, tech, e-commerce",
  },
  {
    type: "Integration Pages",
    pattern: "[Tool] + [Integration]",
    examples: ["Slack + Google Drive", "Zapier + Salesforce"],
    bestFor: "SaaS, APIs, platforms",
  },
  {
    type: "Alternative Pages",
    pattern: "[Competitor] Alternative",
    examples: ["Mailchimp alternative", "Salesforce alternative"],
    bestFor: "Any B2B company",
  },
  {
    type: "Directory/Listing Pages",
    pattern: "[Category] + [Location/Filter]",
    examples: ["Italian restaurants in NYC", "Remote JavaScript jobs"],
    bestFor: "Marketplaces, directories",
  },
  {
    type: "Stats/Data Pages",
    pattern: "[Topic] Statistics [Year]",
    examples: ["Email marketing statistics 2025", "Remote work stats"],
    bestFor: "Content marketing, B2B",
  },
];

export default function PSEOGuideClient() {
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                Definitive Guide
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm">
                <Clock className="w-4 h-4" />
                25 min read
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Complete <span className="gradient-text">Programmatic SEO</span> Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Learn how companies like Zapier, Airbnb, and Zillow generate millions of visitors 
              with programmatic SEO. This is everything you need to know to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Start Building PSEO Pages
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-y border-border/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-3 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                >
                  <span className="text-primary font-mono">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-muted-foreground hover:text-foreground">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            
            {/* Section 1: What is PSEO */}
            <section id="what-is-pseo" className="mb-20 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-primary font-mono text-lg">01</span>
                  What is Programmatic SEO?
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  <strong className="text-foreground">Programmatic SEO</strong> is a strategy where you create hundreds or thousands of 
                  landing pages automatically using templates and data. Instead of manually writing each page, 
                  you define a template once and generate unique pages at scale.
                </p>
                <div className="p-6 rounded-2xl glass gradient-border mb-6">
                  <p className="text-lg font-medium mb-4">The formula is simple:</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-mono">Template</span>
                    <span className="text-2xl">+</span>
                    <span className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-mono">Data</span>
                    <span className="text-2xl">=</span>
                    <span className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-mono">1000s of Pages</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg">
                  Think of it like mail merge, but for websites. You create one template with variables 
                  (like {"{{city}}"} or {"{{product_name}}"}), connect it to a dataset, and the system generates 
                  a unique page for every row in your data.
                </p>
              </motion.div>
            </section>

            {/* Section 2: Why PSEO Works */}
            <section id="why-pseo" className="mb-20 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-primary font-mono text-lg">02</span>
                  Why Programmatic SEO Works
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    { title: "Long-tail keyword coverage", desc: "Target thousands of specific queries that individually have low volume but collectively drive massive traffic." },
                    { title: "Search intent match", desc: "Each page is laser-focused on one specific query, giving users exactly what they searched for." },
                    { title: "Economies of scale", desc: "Creating 10,000 pages takes the same effort as creating 10 once you have the system." },
                    { title: "Compounding returns", desc: "More pages = more indexed content = more chances to rank = more backlinks = even more rankings." },
                  ].map((item) => (
                    <div key={item.title} className="p-6 rounded-2xl glass gradient-border">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-[hsl(199,89%,48%)]/10 border border-primary/20">
                  <p className="text-lg">
                    <strong>The math:</strong> If you rank #1 for a keyword with 100 searches/month, you get ~30 visitors. 
                    But if you rank #1 for <strong>10,000 keywords</strong> with 100 searches each, you get <strong>300,000 visitors/month</strong>.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Section 3: Examples */}
            <section id="examples" className="mb-20 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-primary font-mono text-lg">03</span>
                  Real-World Examples
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  The biggest companies in tech use programmatic SEO. Here are some examples:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold">Company</th>
                        <th className="text-left py-4 px-4 font-semibold">Pages</th>
                        <th className="text-left py-4 px-4 font-semibold">Type</th>
                        <th className="text-left py-4 px-4 font-semibold">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examples.map((ex) => (
                        <tr key={ex.name} className="border-b border-border/50 hover:bg-secondary/20">
                          <td className="py-4 px-4 font-medium">{ex.name}</td>
                          <td className="py-4 px-4 text-primary font-mono">{ex.pages}</td>
                          <td className="py-4 px-4 text-muted-foreground">{ex.type}</td>
                          <td className="py-4 px-4 text-muted-foreground text-sm">{ex.url}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </section>

            {/* Section 4: Page Types */}
            <section id="page-types" className="mb-20 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-primary font-mono text-lg">04</span>
                  Types of Programmatic Pages
                </h2>
                <div className="space-y-6">
                  {pageTypes.map((pt) => (
                    <div key={pt.type} className="p-6 rounded-2xl glass gradient-border">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">{pt.type}</h3>
                        <span className="text-primary font-mono text-sm">{pt.pattern}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        <strong>Best for:</strong> {pt.bestFor}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pt.examples.map((ex) => (
                          <span key={ex} className="px-3 py-1 rounded-full bg-secondary text-sm">{ex}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Section 5: Data Sources */}
            <section id="data-sources" className="mb-20 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-primary font-mono text-lg">05</span>
                  Data Sources for PSEO
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Public datasets", items: ["Government databases", "Wikipedia", "OpenStreetMap", "Public APIs"] },
                    { title: "Your own data", items: ["Product catalog", "Customer data (anonymized)", "Internal metrics", "User-generated content"] },
                    { title: "Scraped data", items: ["Competitor listings", "Review sites", "Industry directories", "Social media profiles"] },
                    { title: "Third-party APIs", items: ["Google Places", "Yelp API", "Clearbit", "Industry databases"] },
                  ].map((source) => (
                    <div key={source.title} className="p-6 rounded-2xl glass gradient-border">
                      <h3 className="font-semibold mb-4">{source.title}</h3>
                      <ul className="space-y-2">
                        {source.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Section 6: Templates */}
            <section id="templates" className="mb-20 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-primary font-mono text-lg">06</span>
                  Creating Templates
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  A good PSEO template has three key characteristics:
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { num: "1", title: "Unique value per page", desc: "Each page should offer something that page specifically provides. Not just swapped-out words." },
                    { num: "2", title: "Strong SEO fundamentals", desc: "Proper title tags, meta descriptions, H1s, schema markup, and internal linking." },
                    { num: "3", title: "Conversion-focused design", desc: "Clear CTAs, trust signals, and a path to convert visitors into leads or customers." },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 p-6 rounded-2xl glass gradient-border">
                      <span className="text-2xl font-bold text-primary font-mono">{item.num}</span>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                  <p className="font-mono text-sm mb-2 text-muted-foreground">Example template structure:</p>
                  <pre className="text-sm overflow-x-auto">
{`<title>Best {{service}} in {{city}} | {{brand}}</title>
<h1>Top {{service}} Services in {{city}}</h1>
<p>Looking for {{service}} in {{city}}? 
   We've ranked the best providers based on 
   {{num_reviews}} reviews.</p>
<ul>
  {{#each providers}}
    <li>{{name}} - {{rating}} stars</li>
  {{/each}}
</ul>`}
                  </pre>
                </div>
              </motion.div>
            </section>

            {/* Section 7: Avoiding Penalties */}
            <section id="avoiding-penalties" className="mb-20 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-primary font-mono text-lg">07</span>
                  Avoiding Google Penalties
                </h2>
                <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/30 mb-8">
                  <h3 className="font-semibold mb-2 text-destructive">⚠️ Warning: Thin content penalty</h3>
                  <p className="text-muted-foreground text-sm">
                    Google can penalize sites with thousands of low-quality, duplicate, or thin pages. 
                    Follow these guidelines to stay safe:
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { do: true, text: "Add unique, valuable content to each page (not just swapped keywords)" },
                    { do: true, text: "Use drip publishing (50-100 pages/day max)" },
                    { do: true, text: "Include user-generated content, reviews, or dynamic data" },
                    { do: true, text: "Build internal links between related pages" },
                    { do: true, text: "Ensure each page answers a specific search intent" },
                    { do: false, text: "Publish thousands of near-identical pages at once" },
                    { do: false, text: "Create pages with just find-and-replace keyword swapping" },
                    { do: false, text: "Generate pages for keywords with zero search volume" },
                    { do: false, text: "Ignore pages that don't get indexed" },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 p-4 rounded-xl ${item.do ? 'bg-primary/10' : 'bg-destructive/10'}`}>
                      <span className={`text-lg ${item.do ? 'text-primary' : 'text-destructive'}`}>
                        {item.do ? '✓' : '✗'}
                      </span>
                      <p className="text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Section 8: Tools */}
            <section id="tools" className="mb-20 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-primary font-mono text-lg">08</span>
                  Tools & Platforms
                </h2>
                <div className="space-y-4">
                  {[
                    { name: "PSEO Growth Stack", desc: "Free tier, built-in CRM, AI agents, directory/marketplace support", link: "/", highlight: true },
                    { name: "SEOmatic", desc: "Template-based page generation with CSV import", link: "/compare/pseo-growth-stack-vs-seomatic" },
                    { name: "Whalesync", desc: "Two-way sync between Airtable and Webflow", link: "#" },
                    { name: "Typemat", desc: "Free basic tool for WordPress XML generation", link: "#" },
                    { name: "Custom code", desc: "Next.js, Gatsby, or any SSG with generateStaticParams", link: "/integrations/nextjs" },
                  ].map((tool) => (
                    <div key={tool.name} className={`p-6 rounded-2xl ${tool.highlight ? 'bg-gradient-to-r from-primary/20 to-[hsl(199,89%,48%)]/20 border border-primary/30' : 'glass gradient-border'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{tool.name}</h3>
                          <p className="text-muted-foreground text-sm">{tool.desc}</p>
                        </div>
                        <Link href={tool.link}>
                          <ChevronRight className="w-5 h-5 text-primary" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Section 9: Getting Started */}
            <section id="getting-started" className="mb-20 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-primary font-mono text-lg">09</span>
                  Getting Started
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Ready to launch your first programmatic SEO campaign? Here's your action plan:
                </p>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Find your keyword pattern", desc: "Research what patterns work in your industry. Look at competitors' top pages." },
                    { step: "2", title: "Gather your data", desc: "Collect or create the dataset you'll use. Clean and structure it properly." },
                    { step: "3", title: "Design your template", desc: "Create a high-quality template that provides real value for each variation." },
                    { step: "4", title: "Generate a test batch", desc: "Start with 50-100 pages. Review quality and fix issues before scaling." },
                    { step: "5", title: "Launch with drip publishing", desc: "Publish gradually over weeks, not all at once." },
                    { step: "6", title: "Monitor and iterate", desc: "Track rankings, fix pages that don't index, and optimize winners." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-6 rounded-2xl glass gradient-border">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

          </div>
        </div>
      </article>

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
              Ready to Start Your <span className="gradient-text">PSEO Journey</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Launch your first programmatic SEO campaign today — completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Start Building Free
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/use-cases">
                <Button variant="heroOutline" size="xl">
                  Explore Use Cases
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
