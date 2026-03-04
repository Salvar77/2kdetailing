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
  title: "Najwyższa Klasa Ochrony: Folia PPF",
  subtitle: "ZAAWANSOWANA ŚCIANA NA KAMYKI",
  date: "2026-02-21",
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
    "Zaawansowana folia PPF to najskuteczniejsza tarcza ochronna na rynku. Chroni lakier m.in. przed odpryskami, zarysowaniami i agresywną chemią.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Pancerna bariera chroniąca lakier nawet pod ostrzałem kamieni drogowych
      </h2>
      <p className={classes.textShadow}>
        Certyfikowane powłoki ceramiczne istotnie poprawiają twardość lakieru i
        minimalizują mikrorysy w codziennej eksploatacji (np. od przypadkowego
        piasku w gąbce z myjni). Z mocną fizyką jednak nie wygrają – kiedy w
        stronę Twojego zderzaka na autostradzie leci kilkumilimetrowy kawałek
        gruzu, lakier przed odpryskiem uratuje wyłącznie bardzo gruba (powyżej
        150 mikronów), elastyczna i ultrawytrzymała poliuretanowa{" "}
        <strong>
          <Link href="/oferta/folia-ppf" className={classes.textLink}>
            Folia PPF
          </Link>
        </strong>
        . Oferowana przez nas folia zapewnia genialny proces samoregeneracji.
        Uretanowa struktura reaguje blindowaniem pod wpływem ciepła (promienie
        słońca lub oblanie wrzątkiem) zamykając zarysowania, dodatkowo folia
        fizycznie pochłania niesamowitą siłę potężnych uderzeń punktowych
        rozbijając wektor naprężeń po panelu bez ubytku w karoserii.
      </p>

      <h2 className={classes.blogTitle}>
        Zabezpiecz Front, Lampy lub Cały Pojazd{" "}
      </h2>
      <p className={classes.textShadow}>
        Dbając o detale używamy wyłącznie najnowszych technologii, w ramach
        których dysponujemy specjalistycznym oprogramowaniem dla baz modeli aut
        z całego świata z milimetrowym rzutem siatki Twojego pojazdu. Przed
        montażem wycinamy z roli na własnym ploterze komputerowym gotowe
        formatki („szablony”) odpowiadające np. profilowi klamki lub maski.
        Pozwala nam to dokonać idealnej aplikacji i unikać cięcia na aucie
        ostrym nożykiem obok lakieru, minimalizując uszkodzenie do absolutnego
        zera.
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
