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
    mod = await import(`../../../../content/services/${slug}.jsx`);
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
  // ✅ AWAIT – params to Promise!
  const { slug } = await params;
  return <OfertaClient slugFromParent={slug} />;
}
