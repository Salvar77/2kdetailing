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
  title: "Auto Detailing – kosmetyka wysokiego poziomu",
  subtitle: "PEŁNY PAKIET USŁUG",
  date: "2026-03-03",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText: "Kompleksowo wyczyszczone auto w studiu 2K Auto Detailing",
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
    "Poznaj proces pełnego auto detailingu. Łączymy precyzyjne mycie, pranie tapicerki oraz korektę lakieru, aby Twoje auto znów wyglądało jak z salonu.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>Nowe Życie Twojego Auta</h2>
      <p className={classes.textShadow}>
        W <strong>2K Auto Detailing</strong> łączymy w jedną luksusową całość
        to, co zazwyczaj bywa rozbite na kilka pojedynczych usług. Decydując się
        na kompleksowy{" "}
        <Link href="/oferta/auto-detailing" className={classes.textLink}>
          auto detailing
        </Link>
        , fundujesz swojemu samochodowi absolutny reset wizualny i
        technologiczny. Nasz proces obejmuje zarówno wieloetapowe, precyzyjne
        mycie karoserii docierające do każdego milimetra zewnętrznych
        zakamarków, jak i gruntowne odżywienie wnętrza. Od kół, przez wnęki
        drzwiowe po dekory na kokpicie i komorę silnika – żaden detal nam nie
        umknie.
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
          – Pracujemy na certyfikowanych preparatach rozbijających brud od
          podszewki materiału. Gwarantujemy usunięcie trudnych wżerów, bakterii
          oraz powrót do jałowego, neutralnego zapachu z dnia wyjazdu od
          dealera.
        </li>
        <li>
          <Wrench className="icon" />
          <strong>
            <Link href="/oferta/korekta-lakieru">
              Wieloetapowa korekta lakieru
            </Link>
          </strong>{" "}
          – Przy użyciu maszyn orbitalnych wyrównujemy powierzchnię powłoki
          lakierniczej, uwalniając lustrzane, zapierające dech w piersiach
          odbicie i zdejmując tzw. "mgłę" matową z nadwozia.
        </li>
        <li>
          <Feather className="icon" />
          <strong>
            <Link href="/oferta/powloka-ceramiczna">
              Certyfikowane powłoki ochronne
            </Link>
          </strong>{" "}
          – Zamykamy por lakieru pod twardym pancerzem, który odrzuca krople
          brudnej wody i potężnie utrudnia ponowne rysowanie się samochodu
          podczas późniejszej manualnej pielęgnacji.
        </li>
      </ul>

      <h2 className={classes.blogTitle}>
        Poczuj różnicę, gdy odbierasz kluczyki
      </h2>
      <p className={classes.textShadow}>
        W 2K Auto Detailing stawiamy na transparentność i doświadczenie. Za
        każdym razem, na bieżąco, na podstawie wieku pojazdu, marki oraz
        pierwotnego zmierzonego nasycenia lakieru dobieramy proces dedykowany.
        Naszym celem jest bezpieczna odbudowa do niemalże nowości (eliminacja
        90-95% zarysowań) przy pozostawieniu odpowiedniego marginesu powłoki
        fabrycznej.
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
