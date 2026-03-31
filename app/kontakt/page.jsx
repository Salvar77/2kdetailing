import React from "react";
import classes from "./page.module.scss";
import { ContactWithAnimation, ContactContent } from "./DynamicComponents";

export const metadata = {
  title: "Kontakt i Rezerwacje",
  description:
    "Umów wizytę lub zadaj pytanie – zadzwoń: 797 234 734, napisz: 2kdetailingopole@gmail.com lub odwiedź nas: ul. Prószkowska 43, 45-758 Opole.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    url: "/kontakt",
    title: "Kontakt i Rezerwacje",
    description:
      "Zadzwoń: 797 234 734 lub napisz: 2kdetailingopole@gmail.com. Nasz adres: ul. Prószkowska 43, 45-758 Opole.",
    images: [
      {
        url: "/og/logo-2kdetailing-opole.png",
        width: 1200,
        height: 630,
        alt: "2K Auto Detailing Opole - 797 234 734, ul. Prószkowska 43",
      },
    ],
  },
};

export default function KontaktPage() {
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
        name: "Kontakt",
        item: "https://www.2kdetailing.opole.pl/kontakt",
      },
    ],
  };

  return (
    <main className={classes.contact}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <h1 className={classes.contact__title}>Skontaktuj się !</h1>
      <ContactWithAnimation />
      <ContactContent />
    </main>
  );
}
