import React from "react";
import Link from "next/link";
import {
  PhoneCall as Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import classes from "../../app/blog/[slug]/page.module.scss";

export const meta = {
  id: 8,
  slug: "czyszczenie-wnetrza-samochodu-opole",
  title: "Kompleksowe Czyszczenie Samochodu i Pranie Tapicerki",
  subtitle: "CZYSTOŚĆ I ŚWIEŻOŚĆ WNĘTRZA",
  date: "2026-06-09",
  image: "/czyszczenie-wnetrza-samochodu-opole.jpg",
  dynamicImage: "/czyszczenie-wnetrza-samochodu-opole.jpg",
  mainImageAltText:
    "Kompleksowe czyszczenie wnętrza samochodu i pranie tapicerki w Opolu",
  images: [
    "/pranie-tapicerki-czyszczenie-wnetrza-opole-po.jpg",
    "/czyszczenie-wnetrza-samochodu-opole.jpg",
    "/pranie-tapicerki-czyszczenie-wnetrza-opole-przed.jpg",
    "/2k-logo-black-biale-tlo.svg",
  ],
  imagesAltText: [
    "Czyszczenie wnętrza po zabiegu",
    "Pranie tapicerki samochodowej",
    "Czyszczenie wnętrza przed zabiegiem",
    "2K Auto Detailing logo",
  ],
  description:
    "Kompleksowe czyszczenie wnętrza samochodu i pranie tapicerki. Zadbaj o higienę, świeży zapach i perfekcyjny wygląd w swoim aucie.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Czyszczenie samochodu i kompleksowe czyszczenie wnętrza
      </h2>
      <p className={classes.textShadow}>
        Czyste wnętrze to nie tylko kwestia estetyki, ale przede wszystkim komfortu i zdrowia. <strong>Kompleksowe czyszczenie wnętrza</strong>, które oferujemy, to proces obejmujący każdy detal – od odkurzania trudno dostępnych miejsc, przez precyzyjne czyszczenie plastików i kratek nawiewu, aż po aplikację antystatycznych dressingów. Dzięki temu wnętrze Twojego samochodu odzyskuje fabryczny, matowy wygląd i naturalną świeżość, a codzienne podróże stają się o wiele przyjemniejsze.
      </p>

      <h2 className={classes.blogTitle}>
        Pranie tapicerki – skuteczna walka z brudem i zapachami
      </h2>
      <p className={classes.textShadow}>
        Podstawą zachowania pełnej higieny w kabinie jest profesjonalne <strong>pranie tapicerki</strong>. Domowe sposoby często wciskają brud głębiej w struktury gąbki, co prowadzi do nawracających plam i nieprzyjemnych zapachów. Nasza metoda ekstrakcyjna polega na zmiękczeniu tkaniny ciepłym pre-sprayem, a następnie bezwzględnym wypłukaniu całego nagromadzonego brudu z głębi foteli. Skutecznie usuwamy roztocza, plamy po jedzeniu, czy osady z potu, pozostawiając tapicerkę pachnącą i idealnie czystą, całkowicie pozbawioną uciążliwej wilgoci przed oddaniem samochodu w ręce właściciela.
      </p>

      <h2 className={classes.blogContactTitle}>
        Pielęgnacja uszyta na miarę dla Ciebie
      </h2>
      <p className={classes.contactInfo}>
        Chcesz porozmawiać o możliwościach jakie drzemią pod warstwą ubytków zarysowań Twojej karoserii lub odświeżyć wnętrze? Odwiedź nas na konsultacji wzrokowej Twojego auta i dzwoń śmiało!
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
          <Clock className={classes.iconDownP} /> Pon–Pt: 08:00–17:00, Sob: 09:00–14:00
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
