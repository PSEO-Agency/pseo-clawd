import { Metadata } from "next";
import { notFound } from "next/navigation";
import { integrations } from "@/data/integrations";
import IntegrationPageClient from "./IntegrationPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return integrations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const integration = integrations.find((i) => i.slug === slug);

  if (!integration) {
    return { title: "Not Found" };
  }

  return {
    title: `${integration.title} | PSEO Growth Stack`,
    description: integration.description,
    openGraph: {
      title: integration.title,
      description: integration.description,
    },
  };
}

export default async function IntegrationPage({ params }: Props) {
  const { slug } = await params;
  const integration = integrations.find((i) => i.slug === slug);

  if (!integration) {
    notFound();
  }

  return <IntegrationPageClient integration={integration} />;
}
