import { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternatives } from "@/data/alternatives";
import AlternativePageClient from "./AlternativePageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return alternatives.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const alt = alternatives.find((a) => a.slug === slug);

  if (!alt) {
    return { title: "Not Found" };
  }

  return {
    title: `${alt.title} in 2025 | PSEO Growth Stack`,
    description: alt.description,
    openGraph: {
      title: `${alt.title} in 2025`,
      description: alt.description,
    },
  };
}

export default async function AlternativePage({ params }: Props) {
  const { slug } = await params;
  const alt = alternatives.find((a) => a.slug === slug);

  if (!alt) {
    notFound();
  }

  return <AlternativePageClient alternative={alt} />;
}
