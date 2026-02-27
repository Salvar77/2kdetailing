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
  id: 8,
  slug: "detailing-wnetrza-opole",
  title: "Ekskluzywny Detailing Wnętrza w Opolu",
  subtitle: "CZYSTOŚĆ I HIGIENA KABINY",
  date: "2026-02-21",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText: "Idealnie czyste wnętrze samochodu",
  images: [
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
    "/2k-logo-black-biale-tlo.png",
  ],
  imagesAltText: ["Wnętrze po detailingu", "Odkurzanie zakamarków"],
  description:
    "Przywróć swojemu autu zapach nowości. Kompleksowe odświeżenie plastików, kratek i wyświetlaczy.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Cofnij czas do pierwszego wyjazdu z salonu
      </h2>
      <p className={classes.textShadow}>
        Brud zazwyczaj gromadzi się w najciaśniejszych punktach - w szczelinach
        drzwi, porach kierownicy i zakamarkach kratek nawiewowych. Używamy
        pędzelków z delikatnym włosiem, by skutecznie uporać się z twardymi,
        osiadłymi osadami kurzu, nie zostawiając przy tym ani grama zarysowań na
        fortepianowej czerni (tzw. piano black). Nasz{" "}
        <Link href="/oferta/detailing-wnetrza" className={classes.textLink}>
          detailing wnętrza
        </Link>{" "}
        to aptekarska precyzja, obejmująca mycie z zewnątrz, czyszczenie paneli,
        konserwację uszczelek oraz głębokie odkurzanie szybowe.
      </p>

      <h2 className={classes.blogTitle}>
        Antystatyczny, nowy charakter Twoich plastików
      </h2>
      <p className={classes.textShadow}>
        W 2K Auto Detailing na koniec każdej usługi mycia pokrywamy elementy
        kokpitu dedykowanymi w tym celu dressingami z dodatkiem silnych filtrów
        UV. Posiadają w sobie ładunek antystatyczny, przez co odpychają kurz
        oraz zapobiegają szybkiemu płowieniu plastików od żaru słonecznego.
        Stosujemy tylko rozwiązania, które zachowują matowe bądź lekko satynowe
        odbicia światła, broniąc się stanowczo przeciwko tanim "dressingom" ze
        stacji benzynowych pozostawiającym świecący się i lepki od tłuszczu
        błysk.
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
