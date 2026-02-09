import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import IndustryPageClient from "./IndustryPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${industry.title} | PSEO Growth Stack`,
    description: industry.description,
    openGraph: {
      title: `${industry.title} | PSEO Growth Stack`,
      description: industry.description,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return <IndustryPageClient industry={industry} />;
}
