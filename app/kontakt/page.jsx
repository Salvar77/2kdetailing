import React from "react";
import classes from "./page.module.scss";
import { ContactWithAnimation, ContactContent } from "./DynamicComponents";

export const metadata = {
  title: "Kontakt | 2K Auto Detailing Opole",
  description:
    "Umów wizytę lub zadaj pytanie – zadzwoń: 797 234 734, napisz: 2kdetailingopole@gmail.com lub odwiedź nas: ul. Prószkowska 43, 45-758 Opole.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    url: "/kontakt",
    title: "Kontakt | 2K Auto Detailing Opole",
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
  return (
    <main className={classes.contact}>
      <h1 className={classes.contact__title}>Skontaktuj się !</h1>
      <ContactWithAnimation />
      <ContactContent />
    </main>
  );
}
