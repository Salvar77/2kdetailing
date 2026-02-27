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
  title: "Powłoka Ceramiczna – Hydrofobowość w Deszczu i Olśnienie",
  subtitle: "ZACHWYCAJĄCA CERAMIKA NA LAKIER ",
  date: "2026-02-10",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText:
    "Efekt hydrofobowy wody na powłoce ceramicznej 2K Detailing",
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
    "Zafunduj profesjonalną ceramikę i ogranicz potrzebę trudnych uciążliwych myć, zyskując potężny, wieloletni blask oraz rewelacyjny zrzut brudnej wody.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Brud Który Automatycznie Spływa z Twojego Ulubionego Wozu
      </h2>
      <p className={classes.textShadow}>
        Mycie auta z czystą pedanterią w deszczowe jesienne lub pyłowe letnie
        dni potrafi zamieniać chęci na powstrzymywanie złości... A co jeśli do
        odmycia warstwy lepkiego piasku użyć by w głównej mierze jedynie
        ciśnienia czystej demineralizowanej wody, w przysłowiowe 15 minut... -
        gdy karoseria potyczek odpiera zabrudzenia dzięki założonemu niewidoczną
        "zbroi" czyli{" "}
        <strong>
          <Link href="/oferta/powloka-ceramiczna" className={classes.textLink}>
            Ochronie Ceramicznej
          </Link>
        </strong>
        . Dobrze zaaplikowana u nas chemia wgryza się gęsto w niewidzialne pory
        powłoki bezbarwnej z fabryki, dając chemiczną ochroną przed agresywnymi
        kwasami m.in owadzimi odchodami ptasimi lub solą na mocno obłożonych
        białych szosach dojazdowych.
      </p>

      <h2 className={classes.blogTitle}>
        Zyskany Czas, Oraz Głęboki Efekt "Szklistej Tafli"
      </h2>
      <p className={classes.textShadow}>
        Stosunkowo do ogromnej redukcji niszczącego promieniowania UV czy
        ochrony mikrorys na wozie przed mikrouszkodzeniami ręczników ze szczotki
        czy samej chłonności kwaśnego zjawiska ptasiego zanieczyszczenia,
        ceramika to estetyczny krok giełdowy! Położona trwała powłoka kwarcowa
        fizycznie zwiększa optyczną grubość zmatowienia odblaskowego i znacząco
        podnosi kolor oraz barwnik samego pigmentu w warstwoce odcinającej
        karoserii.
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
