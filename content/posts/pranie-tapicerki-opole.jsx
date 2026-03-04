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
  id: 2,
  slug: "pranie-tapicerki-opole",
  title: "Pranie Tapicerki - Czystość Wnętrza",
  subtitle: "MISTRZOSTWO W CZYSTOŚCI FOTELI",
  date: "2026-03-01",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText:
    "Przezroczysta rura odkurzacza z wypieraną silnie zanieczyszczoną wodą wprost z wypranego fotela",
  images: [
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
  ],
  imagesAltText: [
    "Pranie ekstrakcyjne",
    "Czysty dywan pasażera",
    "Auto po sprzątaniu foteli",
    "Odkurzacz pracujący",
  ],
  description:
    "Bezpieczne pranie ekstrakcyjne i usuwanie trudnych plam. Zadbaj o świeży zapach i higieniczną czystość materiałowych foteli w Twoim aucie.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Pewne, technologiczne rozpuszczanie i wyciąganie plam
      </h2>
      <p className={classes.textShadow}>
        Domowe czyszczenie tapicerki przy pomocy gąbek i ogólnodostępnych pianek
        polega z reguły na wciskaniu brudu i łoju głębiej – w same gąbki
        strukturalne siedziska! Fotel jedynie pobieżnie wyda się czysty z
        wierzchu, a kolejnego dnia w słońcu na powierzchni znów uformują się
        okrągłe, powracające plamy powypalanej i odparowanej wilgoci potu.
        Profesjonalne{" "}
        <strong>
          <Link href="/oferta/pranie-tapicerki" className={classes.textLink}>
            Ekstrakcyjne Pranie Tapicerki
          </Link>
        </strong>{" "}
        które przeprowadzamy, bazuje na zmiękczeniu tkaniny ciepłym, wibrującym
        pre-sprayem od podszewki. Następnie bezwzględnie „wyrywamy” zastały,
        zżółknięty i cuchnący brud do samego końca za pomocą potężnego
        podciśnienia generowanego przez zawodowe odkurzacze piorące. Materiał
        fizycznie uwalniania zablokowaną strukturę.
      </p>

      <h2 className={classes.blogTitle}>
        Mechaniczne odsysanie wilgoci i zero stęchłego zapachu
      </h2>
      <p className={classes.textShadow}>
        Nikt z kierowców nie akceptuje uporczywego zapachu i powłoki mokrej
        szyby na drugi dzień od wyjazdu z warsztatu. Zaraz po głębokiej
        ekstrakcji podłączamy specjalistyczne, dedykowane pompy nawiewowe.
        Ciepłe, precyzyjniej dysponowane powietrze w obiegu zamkniętym pozwala
        na oddanie Ci auta w stanie wolnym od uciążliwej, głębokiej wilgoci
        obicia. Zlecenie na życzenie klienta niezwykle efektywnie wieńczymy
        natryskowym preparatem hydrofobowym do impregnacji materiału. Skutecznie
        odrzuci to rozlewaną rano kawę nim zdąży wpić się w nić tkaniny,
        odraczając szybkie brudzenie powtórne w czasie.
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
