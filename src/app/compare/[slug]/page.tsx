import { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisons } from "@/data/comparisons";
import ComparePageClient from "./ComparePageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);

  if (!comparison) {
    return { title: "Comparison Not Found" };
  }

  return {
    title: `${comparison.title} | Feature Comparison 2025`,
    description: comparison.description,
    openGraph: {
      title: comparison.title,
      description: comparison.description,
    },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);

  if (!comparison) {
    notFound();
  }

  return <ComparePageClient comparison={comparison} />;
}
