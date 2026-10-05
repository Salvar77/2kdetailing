import React from "react";
import Link from "next/link";
import {
  Lightbulb,
  ShieldCheck,
  Wrench,
  PhoneCall as Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import classes from "../../app/blog/[slug]/page.module.scss";

export const meta = {
  id: 10,
  slug: "regeneracja-reflektorow-przeglad-opole",
  title: "Regeneracja reflektorów przed przeglądem – czy auto przejdzie?",
  subtitle: "REFLEKTORY, PRZEGLĄD I JAZDA PO ZMROKU",
  date: "2026-10-05",
  hero: "/2k-logo-black-biale-tlo.png",
  image: "/2k-logo-black-biale-tlo.png",
  dynamicImage: "/2k-logo-black-biale-tlo.png",
  mainImageAltText:
    "Regeneracja zmatowiałych reflektorów przed przeglądem technicznym – 2K Auto Detailing Opole",
  description:
    "Zmatowiałe, pożółkłe reflektory to słabsze światło, gorsza widoczność jesienią i ryzyko problemów na przeglądzie. Sprawdź, kiedy wystarczy regeneracja kloszy, a kiedy potrzebna jest wymiana.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Jesień i zima to egzamin dla Twoich reflektorów
      </h2>
      <p className={classes.textShadow}>
        Po zmianie czasu na zimowy robi się ciemno już po 16:00, a do tego
        dochodzą deszcz, mgła i mokry asfalt, który „pochłania” światło. To
        właśnie w tym okresie najbardziej odczuwasz, w jakim stanie są Twoje
        reflektory. Zmatowiałe, pożółkłe klosze rozpraszają strumień światła –
        zamiast oświetlać drogę przed autem, światło rozlewa się na boki, a
        zasięg wyraźnie spada. Efekt? Później zauważasz pieszego, zwierzę na
        poboczu czy dziurę w jezdni, a kierowcy z naprzeciwka częściej są
        oślepiani przez rozproszone światło.
      </p>

      <h2 className={classes.blogTitle}>
        Matowe reflektory a przegląd techniczny
      </h2>
      <p className={classes.textShadow}>
        Podczas badania technicznego diagnosta sprawdza nie tylko, czy światła
        się świecą. Kontroluje również <strong>ustawienie świateł</strong>,
        ich <strong>natężenie</strong> oraz <strong>stan kloszy</strong>. Mocno
        zmatowiały, porysowany lub pożółkły klosz potrafi tak bardzo osłabić i
        rozproszyć światło, że wynik pomiaru wypada poza normę albo granica
        światła i cienia staje się nieczytelna. W takiej sytuacji diagnosta
        może nie podbić przeglądu i odesłać Cię z autem do poprawki. Wtedy
        zostaje albo wymiana lamp (często za kilka tysięcy złotych), albo{" "}
        <strong>
          <Link
            href="/oferta/regeneracja-reflektorow"
            className={classes.textLink}
          >
            regeneracja reflektorów
          </Link>
        </strong>{" "}
        – czyli ułamek tej kwoty.
      </p>
      <p className={classes.textShadow}>
        Dlatego jeśli termin przeglądu zbliża się, a Twoje lampy wyglądają na
        „mleczne”, warto zająć się nimi kilka dni wcześniej. Po regeneracji
        dobrze jest też poprosić diagnostę o sprawdzenie i ewentualną korektę
        ustawienia świateł – czysty klosz pokaże wtedy pełnię możliwości
        reflektora.
      </p>

      <h2 className={classes.blogTitle}>
        Skąd się bierze zmatowienie kloszy?
      </h2>
      <p className={classes.textShadow}>
        Współczesne reflektory mają klosze z poliwęglanu – tworzywa lekkiego i
        odpornego na uderzenia, ale wrażliwego na promieniowanie UV. Fabryczna
        warstwa ochronna z czasem się wyciera i utlenia. Swoje dokładają sól
        drogowa, piasek, agresywna chemia na myjniach automatycznych i
        szczotki. Najpierw pojawia się delikatna mgiełka, potem żółty nalot, a
        na końcu drobne pęknięcia powierzchni. Im wcześniej zareagujesz, tym
        prostszy (i tańszy) jest zabieg.
      </p>

      <h2 className={classes.blogTitle}>
        Jak wygląda regeneracja w 2K Auto Detailing?
      </h2>
      <ul>
        <li>
          <Wrench className="icon" />
          <strong>Szlifowanie na mokro</strong> – usuwamy zniszczoną,
          utlenioną warstwę poliwęglanu, stopniowo przechodząc do coraz
          drobniejszych gradacji papieru. Lakier wokół lampy jest wcześniej
          dokładnie zabezpieczony taśmą.
        </li>
        <li>
          <Lightbulb className="icon" />
          <strong>Polerowanie maszynowe</strong> – dedykowanymi pastami do
          tworzyw przywracamy kloszom pełną przejrzystość i gładkość.
        </li>
        <li>
          <ShieldCheck className="icon" />
          <strong>Zabezpieczenie UV</strong> – to kluczowy etap. Bez
          niego klosz zmatowieje ponownie w ciągu kilku miesięcy. Stosujemy
          powłokę ochronną lub bezbarwną{" "}
          <Link href="/oferta/folia-ppf">folię PPF</Link>, która chroni lampę
          także przed piaskowaniem i odpryskami.
        </li>
      </ul>
      <p className={classes.textShadow}>
        Cały zabieg dla kompletu przednich reflektorów trwa zwykle{" "}
        <strong>1,5–2,5 godziny</strong>, a jego koszt to najczęściej{" "}
        <strong>200–350 zł</strong>. Pracujemy na zamontowanych lampach – nie
        musisz niczego demontować.
      </p>

      <h2 className={classes.blogTitle}>
        Kiedy regeneracja nie wystarczy?
      </h2>
      <p className={classes.textShadow}>
        Regeneracja działa na zewnętrzną powierzchnię klosza. Nie pomoże, jeśli
        klosz jest pęknięty na wylot, reflektor jest nieszczelny i paruje od
        środka, albo odbłyśnik w środku lampy jest spalony lub skorodowany. W
        takich przypadkach uczciwie powiemy Ci, że lepszym rozwiązaniem będzie
        naprawa lub wymiana lampy. Ocenę stanu reflektorów robimy przed
        rozpoczęciem pracy.
      </p>

      <h2 className={classes.blogTitle}>Przygotuj auto na sezon w komplecie</h2>
      <p className={classes.textShadow}>
        Jeśli i tak szykujesz samochód na zimę, przy okazji warto zadbać o
        lakier i wnętrze. Przeczytaj, jak{" "}
        <Link
          href="/blog/przygotowanie-lakieru-na-zime-opole"
          className={classes.textLink}
        >
          przygotować lakier na zimę
        </Link>{" "}
        oraz dlaczego{" "}
        <Link
          href="/blog/parujace-szyby-w-samochodzie"
          className={classes.textLink}
        >
          szyby parują od środka
        </Link>{" "}
        i jak sobie z tym poradzić.
      </p>

      <h2 className={classes.blogContactTitle}>
        Umów regenerację przed przeglądem
      </h2>
      <p className={classes.contactInfo}>
        Masz zmatowiałe lampy albo zbliża się termin badania technicznego?
        Przyjedź na bezpłatne oględziny – ocenimy stan kloszy i podamy dokładną
        cenę. Zadzwoń lub napisz!
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
