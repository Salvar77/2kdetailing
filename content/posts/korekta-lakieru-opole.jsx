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

import korektaImg from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-opole.webp";
import korektaImg2 from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-2-opole.webp";
import korektaImg3 from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-3-opole.webp";

export const meta = {
  id: 4,
  slug: "korekta-lakieru-opole",
  title: "Korekta Lakieru – wyeliminuj zarysowania",
  subtitle: "USUWANIE HOLOGRAMÓW I ZMATOWIEŃ ŚWIETLNYCH",
  date: "2026-02-26",
  image: korektaImg,
  dynamicImage: korektaImg,
  mainImageAltText: "Polerowanie maszyną polerską lakieru samochodowego",
  images: [korektaImg, korektaImg2, korektaImg3],
  imagesAltText: [
    "Praca polerką 2K",
    "Zarysowania przed i po",
    "Maszyny orbitalne do polerowania",
  ],
  description:
    "Wieloetapowe polerowanie karoserii. Usuwamy zarysowania, zmatowienia i hologramy, przywracając lakierowi idealną gładkość i głębię.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Trzeci Wymiar - Tajemnica Szklistego Odbicia
      </h2>
      <p className={classes.textShadow}>
        Głównym powodem, dla którego zupełnie nowe samochody wprost z salonu
        wyglądają tak zniewalająco, jest absolutnie nienaruszona, idealnie
        płaska warstwa lakieru bezbarwnego (tzw. klaru). Światło odbija się z
        niej niczym od tafli lustra, co gwarantuje pełną projekcję koloru z
        maksymalnym nasyceniem. Wraz z eksploatacją, wskutek korzystania z
        twardych myjni czy agresywnego szczotkowania zimą, struktura ta ulega
        dramatycznemu poszarpaniu. Setki tysięcy mikrorys skutecznie załamują i
        rozpraszają wchodzące w nie padające zewsząd promienie i światło
        słoneczne, całkowicie degradując głębię koloru i pokrywając karoserię
        swoistą "mgłą". Nasza flagowa usługa tj.{" "}
        <strong>
          <Link href="/oferta/korekta-lakieru" className={classes.textLink}>
            Korekta Lakieru
          </Link>
        </strong>{" "}
        polega na usunięciu zniszczonej struktury lakieru powracając do bazowej,
        gładkiej powłoki lakierniczej za pomocą odpowiednio dobranych past
        polerskich i rotacyjnych maszyn miksujących.
      </p>

      <h2 className={classes.blogTitle}>
        Od szybkich pomyślnych "One-Stepów" po pełną wieloetapową transformację
      </h2>
      <p className={classes.textShadow}>
        Wybór procesu zależy od stanu powłoki lakierniczej i oczekiwań
        właściciela. Dla większości regularnie użytkowanych aut rewelacyjnym i
        wysoce opłacalnym rozwiązaniem z doskonałym rezultatem okazuje się
        wdrożenie usługi "One Step". W trybie jednego etapu umiejętnie łączymy
        właściwości ściągające pasty z technologią nabłyszczającą i zarysowań
        ścinając minimalne ilości powłoki (lakieru bezbarwnego). Gwarantujemy
        niezwykle wymierny wynik z zachowaniem bogatej rezerwy produkcyjnej
        przezroczystej substancji lakierniczej chroniącej karoserię elementu.
        Dla fanatyków idealnego detalu oferujemy pełną, dwu i trzyetapową
        chirurgię cięcia.
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
