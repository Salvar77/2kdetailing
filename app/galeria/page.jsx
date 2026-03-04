import { realizationsData } from "./realizationsData";
import { Galeria } from "./DynamicGaleria";

export async function generateMetadata() {
  const pageTitle = "Galeria Realizacji | 2K Auto Detailing Opole";
  const pageDescription =
    "Przeglądaj naszą galerię realizacji detailingowych: auto detailing, korekta lakieru, powłoka ceramiczna, folia PPF w Opolu.";
  const url = "/galeria";

  const ogImage =
    realizationsData[0]?.image?.src || "/og/logo-2kdetailing-opole.png";
  const ogImageWidth = 1200;
  const ogImageHeight = 630;

  return {
    title: "Galeria Realizacji",
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      title: "Galeria Realizacji",
      description: pageDescription,
      images: [{ url: ogImage, width: ogImageWidth, height: ogImageHeight }],
      type: "website",
    },
  };
}

export default function GaleriaPage() {
  return <Galeria />;
}
