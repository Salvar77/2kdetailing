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
  title: "Zwróć Miękkość w Dotyku i Pełen Mat: Ekspert od Renowacji Skór",
  subtitle: "ODŻYWIAMY TWOJE SKÓRZANE WNĘTRZE",
  date: "2026-02-02",
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
    "Skórę w Twoim samochodzie traktować trzeba nie mniej gorzej niż ciało po wysuszonym plażowaniu! Odżywiaj, regeneruj matuj.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Szklany Błysk Naturalnej Skóry Boczku to Tylko Twojer Złudzenie
      </h2>
      <p className={classes.textShadow}>
        Panuje powszechne motoryzacyjne mniemanie, że gdy po wielu trasach
        boczki drzwi z ciemnego pakietu czy fotele kierowcy omijające
        czyszczenia wręcz mienią się na słońcu niczym nasmarowane oliwą, to jest
        to fantastyczna wytyczna naturalnej "prestiżowej skóry". Absolutnie
        odrzucamy ten mit! Taki lakierowany wygląd zyskał Twój samochód ze
        względów tłuszczów na uboczu siedzących spod rąk, pleców - potu z
        długiej jazdy. Naturalna, oddychająca warstwa i celowe zabiegi np. z{" "}
        <strong>
          <Link href="/oferta/renowacja-skor" className={classes.textLink}>
            Zakresu Renowacji Skóry
          </Link>
        </strong>{" "}
        bazują na tym aby docrosać całe warstwy fizycznej kleistości uwalniając
        piękny mat z jakiego wyjechały w fabryki i oddychającą bezwonną powłokę
        bez chemii.
      </p>

      <h2 className={classes.blogTitle}>
        Odżywiaj a unikniesz Załamań i Pęknięć
      </h2>
      <p className={classes.textShadow}>
        Posługujemy się systemami wyodrębnienia brudu dedykowanymi produktami
        tworząc mięsnistą a bardzo luźną pianę pod pędzlem ujętym we
        wgłębieniach by nie przemaczać płynem delikatnych szwów w aucie.
        Następnie silny zastrzyk w postaci mleczek i olei naturalnych oddaje
        wysuszonej promieniami latem kierownicy nową sprężystą miękkość
        ograniczającą "pękanie i spękania" po długim nasilaniu zgniatających ich
        ud w drodze do firmowej podróży przy tysiącach wsiadań.
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
          <Clock className={classes.iconDownP} /> Pon–Pt: 08:00–18:00, Sob:
          09:00–15:00
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
