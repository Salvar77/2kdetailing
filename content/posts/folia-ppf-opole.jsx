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

import ppfImg from "../../assets/images/wlasciciel-2k-auto-detailing-folia-ppf-opole.webp";

export const meta = {
  id: 6,
  slug: "folia-ppf-opole",
  title: "Folia PPF – pancerne zabezpieczenie lakieru",
  subtitle: "OSTATNIA LINIA OBRONY TWOJEJ KAROSERII",
  date: "2026-02-28",
  image: ppfImg,
  dynamicImage: ppfImg,
  mainImageAltText: "Samochód zabezpieczony bezbarwną folią PPF",
  images: [ppfImg],
  imagesAltText: ["Praca przy montażu folii PPF"],
  description:
    "Dowiedz się, dlaczego folia ochronna PPF to najlepsza inwestycja w Twój samochód. Skuteczna ochrona przed odpryskami i zarysowaniami.",
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
