export const guides = [
  {
    slug: "create-1000-landing-pages",
    title: "How to Create 1,000 Landing Pages",
    description: "Learn how to generate 1,000+ SEO-optimized landing pages in hours, not months. Step-by-step guide with templates.",
    readTime: "10 min read",
    steps: [
      {
        title: "Prepare Your Data",
        content: "Gather your data in a structured format. This could be a CSV file, Google Sheet, or database. Each row becomes a unique landing page.",
        tips: ["Include all variations (locations, products, keywords)", "Clean and deduplicate your data", "Add unique identifiers for each entry"],
      },
      {
        title: "Design Your Template",
        content: "Create a single template that works for all pages. Use variables/placeholders where content will be dynamically inserted.",
        tips: ["Focus on conversion elements", "Include schema markup placeholders", "Design for mobile-first"],
      },
      {
        title: "Map Data to Template",
        content: "Connect your data fields to template variables. Each column in your data becomes a dynamic element on the page.",
        tips: ["Map title, meta description, H1s", "Include image and CTA mappings", "Set up internal link rules"],
      },
      {
        title: "Generate & Review",
        content: "Generate a batch of pages and review quality. Check for duplicates, missing data, and formatting issues.",
        tips: ["Start with 10-50 pages as a test", "Review on mobile and desktop", "Check page speed scores"],
      },
      {
        title: "Publish with Drip Strategy",
        content: "Don't publish all at once. Use drip publishing to release pages gradually for better indexing.",
        tips: ["Start with 50-100 pages per day", "Monitor Google Search Console", "Adjust based on indexing rate"],
      },
    ],
  },
  {
    slug: "rank-long-tail-keywords",
    title: "How to Rank for Long-Tail Keywords",
    description: "Master long-tail keyword strategy with programmatic SEO. Target thousands of low-competition keywords at scale.",
    readTime: "8 min read",
    steps: [
      {
        title: "Identify Keyword Patterns",
        content: "Find repeatable keyword patterns that can be scaled. Look for [modifier] + [core term] + [location/variation] structures.",
        tips: ["Use tools like Ahrefs or SEMrush", "Look at competitor programmatic pages", "Focus on commercial intent patterns"],
      },
      {
        title: "Build Your Keyword Matrix",
        content: "Create a spreadsheet combining all variations. Cross-reference modifiers, core terms, and variables.",
        tips: ["Include search volume data", "Prioritize by competition level", "Group by intent and funnel stage"],
      },
      {
        title: "Create Targeted Content",
        content: "Design templates that naturally include your long-tail keywords. Each page targets a specific variation.",
        tips: ["Use keywords in titles and H1s naturally", "Include related terms (LSI keywords)", "Answer the search intent directly"],
      },
      {
        title: "Build Topical Authority",
        content: "Link related pages together. Create hub pages that link to all variations within a topic cluster.",
        tips: ["Create category/hub pages", "Use consistent internal linking", "Build supporting content"],
      },
      {
        title: "Monitor & Optimize",
        content: "Track rankings for your long-tail keywords. Optimize underperforming pages and double down on winners.",
        tips: ["Use rank tracking tools", "Update content based on performance", "Add more variations for winning patterns"],
      },
    ],
  },
  {
    slug: "build-directory-website",
    title: "How to Build a Directory Website",
    description: "Build a profitable directory or marketplace website with programmatic SEO. Complete guide from idea to launch.",
    readTime: "12 min read",
    steps: [
      {
        title: "Choose Your Niche",
        content: "Select a directory niche with search demand. Look for verticals where people search for lists, comparisons, or local services.",
        tips: ["Validate demand with keyword research", "Check existing competition", "Consider monetization potential"],
      },
      {
        title: "Plan Your Data Structure",
        content: "Design your listing schema. What fields will each listing have? How will they be categorized and filtered?",
        tips: ["Include all filterable attributes", "Plan for scalability", "Design for SEO (unique URLs, titles)"],
      },
      {
        title: "Seed Initial Listings",
        content: "Populate your directory with initial listings. You can scrape public data, use APIs, or manually curate quality entries.",
        tips: ["Aim for 100+ listings at launch", "Ensure data quality and accuracy", "Include rich descriptions"],
      },
      {
        title: "Build Category & Location Pages",
        content: "Create programmatic pages for every category, location, and combination. These become your long-tail landing pages.",
        tips: ["Generate [category] + [location] pages", "Add unique content per page", "Include aggregate data (counts, averages)"],
      },
      {
        title: "Enable User Submissions",
        content: "Let users add and claim listings. This creates a flywheel where users generate content and SEO compounds.",
        tips: ["Add free listing option", "Offer premium/featured listings", "Build review/rating system"],
      },
    ],
  },
];

export type Guide = typeof guides[number];
