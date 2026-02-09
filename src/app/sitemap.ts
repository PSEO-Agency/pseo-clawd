import { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { comparisons } from "@/data/comparisons";
import { alternatives } from "@/data/alternatives";
import { useCases } from "@/data/useCases";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pseo-growth-stack.com";

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/use-cases`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  // Industry pages
  const industryPages = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Comparison pages
  const comparisonPages = comparisons.map((comparison) => ({
    url: `${baseUrl}/compare/${comparison.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Alternative pages
  const alternativePages = alternatives.map((alt) => ({
    url: `${baseUrl}/alternative/${alt.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Use case pages
  const useCasePages = useCases.map((useCase) => ({
    url: `${baseUrl}/use-cases/${useCase.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...industryPages,
    ...comparisonPages,
    ...alternativePages,
    ...useCasePages,
  ];
}
