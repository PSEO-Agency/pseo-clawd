export const useCases = [
  {
    slug: "location-pages",
    name: "Location Pages",
    title: "Location Pages at Scale",
    description: "Create thousands of location-specific landing pages that rank for '[service] in [city]' searches.",
    pattern: "Best [Service] in [City]",
    examples: [
      "Best Pizza in Brooklyn",
      "Plumbers in Austin",
      "Real Estate Agents in Miami",
    ],
    benefits: [
      "Capture local search intent",
      "Rank for thousands of city/neighborhood variations",
      "Automated content for each location",
      "Local schema markup included",
      "Dynamic location data integration",
    ],
    companies: ["Zillow", "Yelp", "Thumbtack", "Angi"],
  },
  {
    slug: "comparison-pages",
    name: "Comparison Pages",
    title: "Comparison Pages at Scale",
    description: "Generate [Tool A] vs [Tool B] comparison pages that capture high-intent buyers researching options.",
    pattern: "[Product A] vs [Product B]",
    examples: [
      "Slack vs Teams",
      "Shopify vs WooCommerce",
      "React vs Vue",
    ],
    benefits: [
      "Capture bottom-of-funnel traffic",
      "High commercial intent keywords",
      "Automated competitor matrix",
      "Dynamic feature comparisons",
      "Conversion-optimized templates",
    ],
    companies: ["G2", "Capterra", "TrustRadius", "SoftwareAdvice"],
  },
  {
    slug: "integration-pages",
    name: "Integration Pages",
    title: "Integration Pages at Scale",
    description: "Build landing pages for every integration your product supports, capturing '[Tool] + [Your Product]' searches.",
    pattern: "[Your Product] + [Integration]",
    examples: [
      "Zapier + Slack",
      "Notion + Google Calendar",
      "HubSpot + Salesforce",
    ],
    benefits: [
      "Page for every integration partner",
      "Capture integration search traffic",
      "Automated use case content",
      "API data integration",
      "Partner co-marketing opportunities",
    ],
    companies: ["Zapier", "Make", "n8n", "Pipedream"],
  },
  {
    slug: "alternative-pages",
    name: "Alternative Pages",
    title: "Alternative Pages at Scale",
    description: "Capture competitor traffic with '[Competitor] alternative' pages that convert switchers.",
    pattern: "[Competitor] Alternative",
    examples: [
      "Mailchimp Alternative",
      "Salesforce Alternative",
      "Monday.com Alternative",
    ],
    benefits: [
      "Capture competitor brand traffic",
      "High-intent switcher audience",
      "Automated competitor analysis",
      "Feature comparison tables",
      "Migration guides and CTAs",
    ],
    companies: ["Most successful SaaS companies"],
  },
];

export type UseCase = typeof useCases[number];
