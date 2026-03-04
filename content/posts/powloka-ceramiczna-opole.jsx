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
  id: 5,
  slug: "powloka-ceramiczna-opole",
  title: "Powłoka Ceramiczna – Hydrofobowość i Blask",
  subtitle: "ZACHWYCAJĄCA CERAMIKA NA LAKIER ",
  date: "2026-02-24",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText:
    "Efekt hydrofobowy wody na powłoce ceramicznej 2K Auto Detailing",
  images: [
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
  ],
  imagesAltText: [
    "Woda perląca się na masce",
    "Auto po wyjeździe",
    "Detailing Opole",
    "Struktura powłoki w Opolu",
  ],
  description:
    "Aplikujemy certyfikowane powłoki ceramiczne, które zapewniają spektakularny szklisty blask, silną hydrofobowość i długoletnią ochronę.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Brud, który sam spływa z Twojego samochodu
      </h2>
      <p className={classes.textShadow}>
        Ręczne mycie auta z dbałością o każdy detal potrafi być czasochłonne,
        szczególnie w sezonie jesienno-zimowym czy podczas letniego pylenia. A
        gdyby całkowite usunięcie luźnego piasku wymagało od Ciebie precyzyjnego
        spłukania czystą wodą pod ciśnieniem przez zaledwie 15 minut? Staje się
        to możliwe, kiedy karoseria automatycznie „odpycha” zabrudzenia,
        chroniona niewidzialną barierą technologiczną, jaką stanowi{" "}
        <strong>
          <Link href="/oferta/powloka-ceramiczna" className={classes.textLink}>
            Ochrona Ceramiczna
          </Link>
        </strong>
        . Certyfikowana chemia, którą operujemy, trwale wiąże się u podstawy
        usieciowania lakieru bezbarwnego. Stanowi doskonały pancerz chemiczny
        broniący nadwozie m.in. przed agresywnymi ptasimi odchodami oraz
        szkodliwym działaniem soli drogowej zimą.
      </p>

      <h2 className={classes.blogTitle}>
        Zyskany czas oraz spektakularny efekt „szklistej tafli”
      </h2>
      <p className={classes.textShadow}>
        Pomijając ogromne korzyści praktyczne: takie jak znacząca degradacja i
        odbijanie promieniowania UV uszkadzającego klar oraz spięcie struktury
        obniżające ryzyko przypadkowych mikrorys powstałych od piasku w rękawicy
        w trakcie mycia – powłoka ceramiczna to wielki skok estetyczny dla
        Twojego pojazdu. Odpowiednio zaaplikowana wielowarstwowa ochrona
        optycznie „pogrubia” lakier, niezwykle intensywnie wydobywając i
        podbijając bazowy kolor, co generuje lustrzany, spektakularny błysk
        niemożliwy do osiągnięcia konwencjonalnymi woskami.
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
