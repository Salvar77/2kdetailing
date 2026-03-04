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
  id: 3,
  slug: "renowacja-skor-opole",
  title: "Zwróć Miękkość w Dotyku: Ekspert od Skór",
  subtitle: "ODŻYWIAMY TWOJE SKÓRZANE WNĘTRZE",
  date: "2026-02-28",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText: "Precyzyjne Pędzelkowanie Skóry i szczotkowanie brudu",
  images: [
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
  ],
  imagesAltText: [
    "Czysta biała skóra auta",
    "Odnowiona kierownica skórzana",
    "Brud pod mydelkiem",
    "Zestaw do zniszczonej struktury",
  ],
  description:
    "Przywróć swojemu skórzanemu wnętrzu elastyczność i naturalny mat. Profesjonalna renowacja, czyszczenie i impregnacja skór samochodowych.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Błyszcząca tapicerka skórzana to powszechne złudzenie zadbania
      </h2>
      <p className={classes.textShadow}>
        Panuje powszechne mniemanie, że gdy ciemne boczki drzwi, kierownica czy
        fotel kierowcy wręcz mienią się w słońcu niczym nasmarowane oliwą, jest
        to naturalny dowód "prestiżowej skóry". Zdecydowanie temu zaprzeczamy!
        Taki "lakierowany" i śliski wygląd Twoja tapicerka zyskuje z wiekiem,
        kumulując osady, brud, pot i tłuszcz wbijany w nią podczas wielu tysięcy
        godzin jazd. Naturalna i czysta skóra premium charakteryzuje się w pełni
        matowym wykończeniem. Zabiegi z{" "}
        <strong>
          <Link href="/oferta/renowacja-skor" className={classes.textLink}>
            Zakresu Renowacji Skóry
          </Link>
        </strong>{" "}
        które oferujemy, mają na celu fizyczne wyciągnięcie kleistych warstw
        brudu, uwalniając fabryczny mat bez stosowania nabłyszczającej, taniej
        chemii w sprayu.
      </p>

      <h2 className={classes.blogTitle}>
        Odżywiaj materiał, a trwale unikniesz załamań i pęknięć
      </h2>
      <p className={classes.textShadow}>
        Pracujemy starannie z użyciem miękkich szczoteczek i wysoce
        skoncentrowanych preparatów typu "strong cleaner". Umiejętnie ujęta
        gęsta, luźna piana wyciąga zanieczyszczenia z zagłębień porów,
        minimalizując tym samym przemoczenie delikatnych, dekoracyjnych szwów
        naramiennych wokół ramy oparcia. Po sterylnym oczyszczeniu serwujemy
        wysuszonej ekspozycją na słońce skórze silny zastrzyk dedykowanych
        mleczek i inhibitorów UV. Olejki penetrują strukturę przywracając jest
        sprężystą miękkość i trwale hamując tendencje do wycierania i brzydkich
        załamań, w naturalny sposób konserwując elementy na lata.
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
