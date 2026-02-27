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
  id: 4,
  slug: "korekta-lakieru-opole",
  title: "Korekta Lakieru w Opolu – wyeliminuj niekończące się zarysowania",
  subtitle: "USUWANIE HOLOGRÓM I ZMATOWIEŃ ŚWIETLNYCH",
  date: "2026-02-15",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText: "Polerowanie maszyną polerską lakieru samochodowego",
  images: [
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
  ],
  imagesAltText: [
    "Praca polerką 2K",
    "Zarysowania przed i po",
    "Maszyny orbitalne do polerowania",
    "Moc pracy oświetleniowej",
  ],
  description:
    "Przywracamy fabryczną wielobarwność w mocnym słońcu eliminując osłabiające połysk hologramy i mocne uszkodzenia lakieru.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Trzeci Wymiar - Tajemnica Szklistego Odbicia
      </h2>
      <p className={classes.textShadow}>
        Powód, dla którego zupełnie nowe auta prosto od uśmiechniętego dilera
        wyglądają zniewalająco, polega w głównej mierze na warstwie absolutnie
        nienaruszonego i mikroskopijnie płaskiego lakieru (tzw. powłoki
        bezbarwnej, klaru), z którego światło odbija się niczym z czystego
        lustra. Z czasem brud używanie twardych miejń, rysują ją w taką
        poszarpaną strukturę a mikrorysy działają jako swoiste załomacze
        promieniusłonecznych, trwale mętowiąc i skażając cały wygląd wozu
        powłoką "mgły". Nasza precyzowana usługa tj.{" "}
        <strong>
          <Link href="/oferta/korekta-lakieru" className={classes.textLink}>
            Korekta Lakieru
          </Link>
        </strong>{" "}
        polega na niezwykle delikatnym spolerowaniu fizycznej wady by otrzymać
        lustrzaną prostą taflę twardo zmatowionego materiału.
      </p>

      <h2 className={classes.blogTitle}>
        Od Odświeżających "One-Stepów" po Pełną Wieloetapową Chirurgię
        Cięcia{" "}
      </h2>
      <p className={classes.textShadow}>
        Zależy od warunku aut. Dla większości pojazdów które u nas witają,
        idealnym, i wysoce opłacalnym kosztowo rozwiązaniem będzie odświeżające
        spolerowanie całości technologią "One-Stepu" gdzie przy jednym paście
        łączymy tnące wygładzenie i polerujące rozświetlenie udręczonego koloru,
        ścinając bezpieczną setną warstwę utlenionego klaru - pozostawiając
        nadal potężną zapasową porcję grubości ochronnej na fabrycznej powłoce
        elementu blachy.
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
