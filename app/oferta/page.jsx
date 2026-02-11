import React from "react";
import classes from "./Oferta.module.scss";
import Services from "../../components/Main/Services";

export const metadata = {
  title: "Oferta usług | 2K Auto Detailing Opole",
  description:
    "Pełen zakres auto detailingu w Opolu: korekta lakieru, powłoka ceramiczna, folia PPF i więcej.",
  alternates: { canonical: "/oferta" },
  openGraph: {
    url: "/oferta",
    title: "Oferta usług | 2K Auto Detailing Opole",
    description:
      "Pełen zakres auto detailingu w Opolu: korekta lakieru, powłoka ceramiczna, folia PPF i więcej.",
    images: [
      {
        url: "/2k-detailing-og-image.png",
        width: 1200,
        height: 630,
        alt: "Oferta usług 2K Auto Detailing - Korekta lakieru - Powłoki ceramiczne - Folie PPF Opole",
      },
    ],
  },
};

const Oferta = () => {
  return (
    <div className={classes.oferta}>
      <h1 className={classes.oferta__title}>Usługi</h1>
      <Services />
    </div>
  );
};

export default Oferta;
