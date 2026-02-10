import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyPageClient from "./CaseStudyPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return { title: "Not Found" };
  }

  return {
    title: `${cs.title} | PSEO Growth Stack Case Study`,
    description: cs.description,
    openGraph: {
      title: cs.title,
      description: cs.description,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    notFound();
  }

  return <CaseStudyPageClient caseStudy={cs} />;
}
