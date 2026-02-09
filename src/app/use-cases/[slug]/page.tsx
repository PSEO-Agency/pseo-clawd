import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCases } from "@/data/useCases";
import UseCasePageClient from "./UseCasePageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const useCase = useCases.find((u) => u.slug === slug);

  if (!useCase) {
    return { title: "Not Found" };
  }

  return {
    title: `${useCase.title} | Programmatic SEO | PSEO Growth Stack`,
    description: useCase.description,
    openGraph: {
      title: useCase.title,
      description: useCase.description,
    },
  };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const useCase = useCases.find((u) => u.slug === slug);

  if (!useCase) {
    notFound();
  }

  return <UseCasePageClient useCase={useCase} />;
}
