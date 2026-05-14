import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/services";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | CELANI Physiotherapy",
    };
  }

  return {
    title: `${service.title} in Nairobi | CELANI Physiotherapy & Sports Injuries`,
    description: `${service.tagline}. ${service.intro.slice(0, 120)}...`,
    openGraph: {
      title: `${service.title} in Nairobi | CELANI Physiotherapy`,
      description: `${service.tagline}. ${service.intro.slice(0, 120)}...`,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
