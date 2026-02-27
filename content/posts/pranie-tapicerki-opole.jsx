import React from "react";
import Link from "next/link";
import {
  Droplet,
  Wrench,
  Feather,
  PhoneCall as Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import classes from "../../app/blog/[slug]/page.module.scss";

export const meta = {
  id: 2,
  slug: "pranie-tapicerki-opole",
  title:
    "Definitywne Zwalczenie Zagnieceń i Żółcią Siłą Ekstrakcyjnego Prania Tapicerki",
  subtitle: "MISTRZOSTWO W CZYSTOŚCI FOTELI",
  date: "2026-02-05",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText:
    "Przezroczysta rura odkurzacza z wypieraną silnie zanieczyszczoną wodą wprost z wypranego fotela",
  images: [
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
  ],
  imagesAltText: [
    "Pranie ekstrakcyjne",
    "Czysty dywan pasażera",
    "Auto po sprzątaniu foteli",
    "Odkurzacz pracujący",
  ],
  description:
    "Zapewniamy najnowocześniejsze techniki podnoszące skuteczność ostatecznego wydobycia wylanych soków napojów czy tłustych zanieczyszczeń.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Pewne, Technologiczne Rozpuszczanie Żółtych Plam z Wody i Tytoniu
      </h2>
      <p className={classes.textShadow}>
        Domowe wcieranie piankowej "rewolucyjnie piorącej gąbki z internetu"
        polega głównie na wepchnięciu naelektryzowanych tłustych zatorów w głąb
        samego fizycznego splotu nitki na gąbce siedzenia! Z pozoru staje się
        wyczyszczone, ale na następny dzień słońce paruje włożoną piankę
        zostawiając po bokach wżarty powracający szmatławy okrąg brudnych plam.
        Nasze dedykowane, zawodowe{" "}
        <strong>
          <Link href="/oferta/pranie-tapicerki" className={classes.textLink}>
            Ekstrakcyjne Pranie Tapicerki
          </Link>
        </strong>{" "}
        bazuje na wstępnym namoczeniu plam silną i obficie spiętrzoną
        szczotkarką oraz bezstresowym "wyrywaniem" breji brudnej ściekowej
        cieczy za pomocą niezwykle potężnego próżniowego odkurzacza wyciągowego
        który u samej fizyki uwalnia materiał.
      </p>

      <h2 className={classes.blogTitle}>
        Pełne Odsysanie dla Braku Smrodu Wilgoci
      </h2>
      <p className={classes.textShadow}>
        Nikt nie lubi zapachu mokrej, kwaśnej gąbki. My po głębokiej ekstrakcji
        podłączamy specjalistyczne pompy, na nagrzewanie siedzeń obiegowym
        wirowanym powietrzem po warsztacie po to, aby pozbawić wóz chłodu w
        porannych dowozach dzieci. Zlecenie uwieńczamy możliwością dedykowanego
        wdrożenia preparatu do zrzutu hydrofobowej osłony na wypraną tkaninę
        fotelową by utrudnić zadomowianie nowo ulanego płynu na dłużej.
      </p>

      <h2 className={classes.blogContactTitle}>
        Pielęgnacja uszyta na miarę dla Ciebie
      </h2>
      <p className={classes.contactInfo}>
        Chcesz porozmawiać o możliwościach jakie drzemią pod warstwą ubytków
        zarysowań Twojej karoserii? Odwiedź nas na konsultacji wzrokowej Twojego
        auta i dzwoń śmiało!
      </p>
      <div className={classes.contactDetails}>
        <div className={classes.contactItem}>
          <Phone className={classes.iconDownP} />{" "}
          <a href="tel:+48797234734">797 234 734</a>
        </div>
        <div className={classes.contactItem}>
          <Mail className={classes.iconDownP} />{" "}
          <a href="mailto:2kdetailingopole@gmail.com">
            2kdetailingopole@gmail.com
          </a>
        </div>
        <div className={classes.contactItem}>
          <MapPin className={classes.iconDownP} /> Opole i Okolice
        </div>
        <div className={classes.contactItem}>
          <Clock className={classes.iconDownP} /> Pon–Pt: 08:00–17:00, Sob:
          09:00–14:00
        </div>
      </div>
      <div className={classes.ctaWrapper}>
        <Link href="/kontakt">
          <span className={classes.ctaButton}>
            Skontaktuj się ze specjalistami 2K
          </span>
        </Link>
      </div>
    </>
  );
}
