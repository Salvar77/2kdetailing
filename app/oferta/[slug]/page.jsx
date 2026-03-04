import { notFound } from "next/navigation";
import { servicesData } from "../../../constants";
import OfertaClient from "./OfertaClient";

export async function generateStaticParams() {
  return servicesData.map(({ id }) => ({
    slug: id.replace("oferta/", ""),
  }));
}

export async function generateMetadata({ params }) {
  // ✅ AWAIT – params to Promise!
  const { slug } = await params;

  const svc = servicesData.find((s) => s.id === `oferta/${slug}`);
  if (!svc) return notFound();

  let mod = null;
  try {
    mod = await import(`../../../content/services/${slug}.jsx`);
  } catch {}

  const title = mod?.meta?.title ?? svc.title;
  const description =
    mod?.meta?.lead ?? svc.additionalInfo.replace(/<[^>]+>/g, "");

  const heroMeta =
    typeof mod?.meta?.hero === "string" ? mod.meta.hero : mod?.meta?.hero?.src;
  const heroSvc =
    typeof svc.largeImage === "string" ? svc.largeImage : svc.largeImage?.src;
  const ogImage = heroMeta ?? heroSvc ?? "/og/logo-2kdetailing-opole.png";

  const url = `/oferta/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
  };
}

export default async function OfertaStrona({ params }) {
  const { slug } = await params;
  const svc = servicesData.find((s) => s.id === `oferta/${slug}`);
  if (!svc) return notFound();

  let mod = null;
  try {
    mod = await import(`../../../content/services/${slug}.jsx`);
  } catch {}

  const title = mod?.meta?.title ?? svc.title;
  const description = mod?.meta?.lead ?? svc.description;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@id": "https://www.2kdetailing.opole.pl/#business",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Opole",
    },
    url: `https://www.2kdetailing.opole.pl/oferta/${slug}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "21",
    },
  };

  let faqJsonLd = null;
  if (mod?.meta?.faq && mod.meta.faq.length > 0) {
    faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: mod.meta.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona Główna",
        item: "https://www.2kdetailing.opole.pl/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Oferta",
        item: "https://www.2kdetailing.opole.pl/oferta",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://www.2kdetailing.opole.pl/oferta/${slug}`,
      },
    ],
  };

  const jsonLdArray = [serviceJsonLd, breadcrumbJsonLd];
  if (faqJsonLd) {
    jsonLdArray.push(faqJsonLd);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArray) }}
      />
      <OfertaClient slugFromParent={slug} />
    </>
  );
}
