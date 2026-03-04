import React from "react";
import classes from "./Oferta.module.scss";
import Services from "../../components/Main/Services";

export const metadata = {
  title: "Oferta Usług Auto Detailingu",
  description:
    "Pełen zakres auto detailingu w Opolu: korekta lakieru, powłoka ceramiczna, folia PPF i więcej.",
  alternates: { canonical: "/oferta" },
  openGraph: {
    url: "/oferta",
    title: "Oferta Usług Auto Detailingu",
    description:
      "Pełen zakres auto detailingu w Opolu: korekta lakieru, powłoka ceramiczna, folia PPF i więcej.",
    images: [
      {
        url: "/og/logo-2kdetailing-opole.png",
        width: 1200,
        height: 630,
        alt: "Oferta usług 2K Auto Detailing - Korekta lakieru - Powłoka ceramiczna - Folia PPF Opole",
      },
    ],
  },
};

const Oferta = () => {
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className={classes.oferta}>
        <h1 className={classes.oferta__title}>Usługi</h1>
        <Services />
      </div>
    </>
  );
};

export default Oferta;
