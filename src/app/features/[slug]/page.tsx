import { Metadata } from "next";
import { notFound } from "next/navigation";
import { features } from "@/data/features";
import FeaturePageClient from "./FeaturePageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = features.find((f) => f.slug === slug);

  if (!feature) {
    return { title: "Not Found" };
  }

  return {
    title: `${feature.title} | PSEO Growth Stack`,
    description: feature.description,
    openGraph: {
      title: feature.title,
      description: feature.description,
    },
  };
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const feature = features.find((f) => f.slug === slug);

  if (!feature) {
    notFound();
  }

  return <FeaturePageClient feature={feature} />;
}
