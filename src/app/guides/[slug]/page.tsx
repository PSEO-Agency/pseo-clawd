import { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import GuidePageClient from "./GuidePageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return { title: "Not Found" };
  }

  return {
    title: `${guide.title} | PSEO Growth Stack Guide`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return <GuidePageClient guide={guide} />;
}
