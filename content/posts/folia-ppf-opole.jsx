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
  id: 6,
  slug: "folia-ppf-opole",
  title: "Najwyższa Klasa Ochrony: Folia PPF w Detailingowaniu",
  subtitle: "ZAAWANSOWANA ŚCIANA NA KAMYKI",
  date: "2026-02-18",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText: "Nakładanie przezroczystej folii PPF na maskę",
  images: [
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
  ],
  imagesAltText: [
    "Aplikacja PPF",
    "Efekt uodpornienia lakieru",
    "Foliowanie Opolskiego warsztatu",
    "Zakończona praca",
  ],
  description:
    "Zabezpiecz auto najbardziej zaawansowaną folią poliuretanową o właściwościach samoregenerujących.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Pancerna Bariera Chroniąca Lakier Nawet pod Ostrzałem Z Kamieni
      </h2>
      <p className={classes.textShadow}>
        Powłoki ceramiczne poprawiają twardość i minimalizują rysy np. od
        przypadkowego piasku w gąbce z myjni, jednakże z prawami mocnej fizyki
        kiedy w stronę Twojego zderzaka na autostradzie leci kilkumilimetrowy
        kawałek gruzu – lakier uratuje wyłącznie bardzo elastyczna a co
        najważniejsze gruba i wytrzymała{" "}
        <strong>
          <Link href="/oferta/folia-ppf" className={classes.textLink}>
            Folia PPF
          </Link>
        </strong>
        . Oferowana przez nas folia to wysoce wytrzymała samoregenerująca
        uretanowa struktura, znikająca uszkodzenia pod wpływem promieni ciepła
        słońca - która fizycznie przyjmuje cios i pochłania siłę potężnych
        uderzeń punktowych.
      </p>

      <h2 className={classes.blogTitle}>Zabezpiecz Front lub Cały Karbon </h2>
      <p className={classes.textShadow}>
        Używamy technologii w której przed nałożeniem wycinamy komputerowym
        ploterem gotowe już kształty poszczególnych "plastronów" dla Twojego
        pojazdu, na podstawie ogromnej bazy gotowych maskownic formatek modeli
        samochodów. Aplikujemy pełny bezszwowy zestaw na przód, aby zabezpieczyć
        maskę, lampy, lusterka oraz często mocno profilowane zderzaki –
        minimalizując konieczność ostrego ciącia przy rantu elementu pojazdu.
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
