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
  id: 9,
  slug: "myjnia-reczna-opole",
  title: "Myjnia Ręczna - Detailingowe Mycie Samochodu",
  subtitle: "BEZPIECZEŃSTWO LAKIERU",
  date: "2026-06-09",
  image: "/myjnia-reczna-opole-3.jpg",
  dynamicImage: "/myjnia-reczna-opole-3.jpg",
  mainImageAltText:
    "Profesjonalna myjnia ręczna w Opolu, bezpieczne mycie detailingowe",
  images: [
    "/myjnia-reczna-opole-1.jpg",
    "/myjnia-reczna-opole-4.jpg",
    "/myjnia-reczna-opole-5.jpg",
    "/myjnia-reczna-opole-3.jpg",
  ],
  imagesAltText: [
    "Aktywna piana na samochodzie",
    "Mycie ciśnieniowe karoserii z zewnątrz",
    "Dokładne mycie detali samochodu",
    "Czysty i błyszczący lakier po myciu",
  ],
  description:
    "Bezpieczna myjnia ręczna i mycie detailingowe. Zadbaj o lakier swojego auta, wybierając profesjonalne mycie techniką na dwa wiadra.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Dlaczego profesjonalna myjnia ręczna to najlepszy wybór?
      </h2>
      <p className={classes.textShadow}>
        Wielu kierowców wciąż korzysta z myjni automatycznych lub szczotkowych bezdotykowych, nie zdając sobie sprawy ze szkód, jakie wyrządzają one na powłoce lakierniczej. Nasza profesjonalna <strong>myjnia ręczna</strong> to gwarancja bezpiecznego usunięcia brudu bez ryzyka powstawania mikro-rys i tzw. hologramów. Stosujemy restrykcyjne zasady, takie jak mycie metodą "na dwa wiadra" oraz używamy separatorów brudu, co sprawia, że drobiny piasku opadają na dno i nie wracają na lakier.
      </p>

      <h2 className={classes.blogTitle}>
        Proces mycia detailingowego i aktywna chemia
      </h2>
      <p className={classes.textShadow}>
        Mycie detailingowe zaczynamy od pre-washu – aplikacji gęstej, aktywnej piany, która bezdotykowo zmiękcza i zdejmuje najcięższy osad z karoserii. Następnie, używając luksusowych, miękkich rękawic z mikrofibry i puszystych ręczników, przechodzimy do ręcznego mycia zakamarków, znaczków, wnęk oraz felg. Po dokładnym umyciu i osuszeniu auta z użyciem sprężonego powietrza i ręczników wysokiej gramatury, nierzadko wieńczymy proces aplikacją wosku lub quick detailera, co pozostawia powierzchnię nieskazitelnie gładką z głębokim szklistym połyskiem i wysoką hydrofobowością.
      </p>

      <h2 className={classes.blogContactTitle}>
        Pielęgnacja uszyta na miarę dla Ciebie
      </h2>
      <p className={classes.contactInfo}>
        Chcesz umówić się na mycie detailingowe lub porozmawiać o możliwościach jakie drzemią pod warstwą ubytków zarysowań Twojej karoserii? Odwiedź nas na konsultacji wzrokowej Twojego auta i dzwoń śmiało!
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
