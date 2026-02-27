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
  id: 7,
  slug: "auto-detailing-opole",
  title:
    "Auto Detailing w Opolu – kompleksowa kosmetyka na najwyższym poziomie",
  subtitle: "PEŁNY PAKIET USŁUG",
  date: "2026-02-22",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText: "Kompleksowo wyczyszczone auto w studiu 2K Detailing",
  images: [
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
  ],
  imagesAltText: [
    "Prace nad lakierem",
    "Czyste wnętrze",
    "Polerowanie maszynowe",
    "Wyjazd ze studia",
  ],
  description:
    "Zapewnij swojemu samochodowi kompleksową pielęgnację w 2K Detailing. Zobacz naszą ofertę od podstaw po gotowy efekt salonowy.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>Nowe Życie Twojego Auta</h2>
      <p className={classes.textShadow}>
        W <strong>2K Auto Detailing</strong> łączymy w jedną luksusową całość
        to, co do tej pory rozbite było na dziesiątki drobnych usług. Decydując
        się na kompleksowy{" "}
        <Link href="/oferta/auto-detailing" className={classes.textLink}>
          auto detailing
        </Link>
        , fundujesz swojemu samochodowi absolutny reset wizualny. Proces
        obejmuje zarówno ekstremalne przemycie wszystkich zewnętrznych
        zakamarków, jak i odżywienie wnętrza. Nie pomijamy bagażnika, komory
        silnika ani żadnego detalu na kokpicie.
      </p>

      <h2 className={classes.blogTitle}>Nasze główne procesy</h2>
      <ul>
        <li>
          <Droplet className="icon" />
          <strong>
            <Link href="/oferta/pranie-tapicerki">
              Detailing wnętrza i pranie
            </Link>
          </strong>{" "}
          – Stosujemy preparaty rozbijające brud u podstaw, bez użycia ostrych
          szczotek niszczących materiał. Każdy zapach po zwierzętach czy
          papierosach zostaje ostatecznie usunięty.
        </li>
        <li>
          <Wrench className="icon" />
          <strong>
            <Link href="/oferta/korekta-lakieru">
              Usuwanie zarysowań z lakieru
            </Link>
          </strong>{" "}
          – Przy pomocy maszyn orbitalnych wyrównujemy powierzchnię klaru,
          uwalniając lustrzane, zapierające dech w piersiach odbicie z pod
          zmatowionej powłoki.
        </li>
        <li>
          <Feather className="icon" />
          <strong>
            <Link href="/oferta/powloka-ceramiczna">
              Ochrona ceramiczna karoserii
            </Link>
          </strong>{" "}
          – Chronimy osiągnięty blask używając niezwykle twardych pancerzy
          ceramicznych, które diametralnie utrudniają ponowne rysowanie się auta
          podczas codziennego mycia.
        </li>
      </ul>

      <h2 className={classes.blogTitle}>
        Poczuj różnicę, gdy odbierasz kluczyki
      </h2>
      <p className={classes.textShadow}>
        Stawiamy na transparentność – na podstawie wieku i stanu lakieru
        dobieramy proces w taki sposób, aby przywrócić około 90-95% fabrycznego
        blasku, zostawiając bezpieczny margines powłoki bezbarwnej na
        przyszłość. Dla nas to absolutna sztuka, a każda oddawana z garażu
        maszyna jest najlepszą wizytówką naszego zaangażowania.
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
