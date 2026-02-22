import React from "react";
import classes from "./page.module.scss";
import { ContactWithAnimation, ContactContent } from "./DynamicComponents";

export const metadata = {
  title: "Kontakt | 2K Detailing Opole",
  description:
    "Umów wizytę lub zadaj pytanie – sprawdź dane kontaktowe do 2K Detailing w Opolu: telefon, e‑mail i adres warsztatu.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    url: "/kontakt",
    title: "Kontakt | 2K Detailing  Opole",
    description:
      "Skontaktuj się z nami, aby zarezerwować termin korekty lakieru, folii PPF, powłoki ceramicznej lub prania tapicerki.",
    images: [
      {
        url: "/og/logo-2kdetailing-opole.png",
        width: 1200,
        height: 630,
        alt: "Dane kontaktowe 2K Detailing - Pranie tapicerki - Korekta lakieru",
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
