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

import wnetrzeImg from "../../assets/images/wlasciciel-2k-auto-detailing-detailing-wnetrza-opole.webp";

export const meta = {
  id: 8,
  slug: "detailing-wnetrza-opole",
  title: "Ekskluzywny Detailing Wnętrza",
  subtitle: "CZYSTOŚĆ I HIGIENA KABINY",
  date: "2026-03-02",
  image: wnetrzeImg,
  dynamicImage: wnetrzeImg,
  mainImageAltText: "Idealnie czyste wnętrze samochodu",
  images: [wnetrzeImg],
  imagesAltText: ["Wnętrze po detailingu"],
  description:
    "Kompleksowe czyszczenie i zabezpieczenie wnętrza pojazdu. Skuteczna pielęgnacja plastików, pędzelkowanie detali i odzyskiwanie zapachu nowości.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Cofnij czas do pierwszego wyjazdu z salonu
      </h2>
      <p className={classes.textShadow}>
        Kurz, okruchy i alergeny najchętniej gromadzą się w najciaśniejszych
        punktach - w głębokich szczelinach drzwiowych, przeszyciach kierownicy
        czy gęstych zakamarkach kratek nawiewowych. W naszym studiu operujemy
        niezwykle delikatnymi pędzelkami z końskiego włosia, by bezpiecznie
        rozbić zastałe osady kurzu, nie rysując przy tym tak niezwykle podatnych
        na zmatowienie dekorów z fortepianowej czerni (Piano Black). Nasz
        autorski{" "}
        <Link href="/oferta/detailing-wnetrza" className={classes.textLink}>
          detailing wnętrza
        </Link>{" "}
        to praca z aptekarską wręcz precyzją, obejmująca sterylne wieloetapowe
        mycie wszystkich twardych paneli, zaawansowaną konserwację głośnych
        uszczelek pod szybami oraz pełne, bezkompromisowe odkurzanie.
      </p>

      <h2 className={classes.blogTitle}>
        Antystatyczny, nowy charakter Twoich plastików
      </h2>
      <p className={classes.textShadow}>
        Na samym końcu zabijamy proces utleniania. W 2K Auto Detailing wieńczymy
        każdą procedurę sprzątania poprzez staranne nałożenie na elementy
        kokpitu dedykowanych, antystatycznych dressingów wzbogaconych o silne
        blokery UV. Gwarantuje to potężnie odpychanie kurzu (efekt nieosiadania
        drobinek w lecie) oraz trwale zapobiega płowieniu i pękaniu plastiku na
        podszybiu od nagrzanego słońca. Stosujemy tylko rozwiązania z najwyższej
        półki, które pozostawiają na elementach pożądane, w pełni fabryczne
        atłasowe i matowe wykończenia. Odrzucamy tłuste "plaki" ze stacji
        benzynowych pozostawiające nieestetyczny kleisty połysk.
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
