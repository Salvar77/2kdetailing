import React from "react";
import Link from "next/link";
import {
  Snowflake,
  ShieldCheck,
  Droplet,
  Wrench,
  PhoneCall as Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import classes from "../../app/blog/[slug]/page.module.scss";

import korektaImg from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-opole.webp";
import korektaImg2 from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-2-opole.webp";
import korektaImg3 from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-3-opole.webp";

export const meta = {
  id: 11,
  slug: "przygotowanie-lakieru-na-zime-opole",
  title: "Jak przygotować lakier na zimę – sól, błoto i powłoka ceramiczna",
  subtitle: "OCHRONA LAKIERU PRZED ZIMĄ",
  date: "2026-10-03",
  hero: korektaImg.src,
  image: korektaImg,
  dynamicImage: korektaImg,
  mainImageAltText:
    "Przygotowanie lakieru samochodu na zimę – polerowanie i zabezpieczenie w 2K Auto Detailing Opole",
  images: [korektaImg2, korektaImg3],
  imagesAltText: [
    "Odświeżenie lakieru przed nałożeniem zabezpieczenia na zimę",
    "Polerowanie karoserii przed aplikacją powłoki ochronnej",
  ],
  description:
    "Sól drogowa, błoto pośniegowe i myjnie szczotkowe to największy wróg lakieru. Sprawdź, jak krok po kroku przygotować auto na zimę i dlaczego jesień to najlepszy moment na powłokę ceramiczną.",
};

export default function PostComponent() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Zima to najtrudniejszy sezon dla lakieru
      </h2>
      <p className={classes.textShadow}>
        Przez kilka zimowych miesięcy karoseria Twojego auta przechodzi
        prawdziwą próbę. <strong>Sól drogowa</strong> rozpuszczona w wodzie
        tworzy agresywną solankę, która wnika w każdą mikrorysę i przyspiesza
        korozję – szczególnie na progach, nadkolach i krawędziach drzwi.{" "}
        <strong>Błoto pośniegowe</strong> i piasek działają jak papier ścierny,
        a szybkie mycie na myjni szczotkowej „na odwal się” dokłada kolejne
        warstwy rys i hologramów. Wiosną wiele osób z zaskoczeniem odkrywa, że
        lakier stracił połysk, jest szorstki w dotyku i pełen mikrozarysowań.
      </p>
      <p className={classes.textShadow}>
        Dobra wiadomość jest taka, że większości tych szkód da się uniknąć. Klucz
        to przygotowanie auta <strong>zanim</strong> drogowcy wyjadą z solą – czyli
        właśnie teraz, jesienią.
      </p>

      <h2 className={classes.blogTitle}>
        Krok 1: Dokładne mycie i dekontaminacja
      </h2>
      <p className={classes.textShadow}>
        Zabezpieczenie nałożone na brudny lakier nie ma sensu – zamknęłoby pod
        sobą zanieczyszczenia. Dlatego zaczynamy od bezpiecznej{" "}
        <Link href="/oferta/myjnia-reczna" className={classes.textLink}>
          myjni ręcznej
        </Link>{" "}
        metodą dwóch wiader, a następnie usuwamy zanieczyszczenia, których
        zwykłe mycie nie zdejmie: osady z klocków hamulcowych, smołę, żywicę i
        wtopione w lakier drobinki metalu. Po takim przygotowaniu lakier jest
        gładki jak szkło i gotowy na kolejne etapy.
      </p>

      <h2 className={classes.blogTitle}>
        Krok 2: Odświeżenie lub korekta lakieru
      </h2>
      <p className={classes.textShadow}>
        Jeśli lakier jest zmatowiały i porysowany, warto go odświeżyć przed
        zimą. Każda rysa to miejsce, w którym zbiera się brud i sól. Lekkie
        polerowanie typu „one step” przywraca połysk i wygładza powierzchnię, a
        pełna{" "}
        <Link href="/oferta/korekta-lakieru" className={classes.textLink}>
          korekta lakieru
        </Link>{" "}
        usuwa nawet głębsze zarysowania i hologramy. Dopiero na tak
        przygotowany lakier nakłada się trwałe zabezpieczenie.
      </p>

      <h2 className={classes.blogTitle}>
        Krok 3: Wybierz zabezpieczenie na zimę
      </h2>
      <ul>
        <li>
          <Droplet className="icon" />
          <strong>Wosk lub sealant</strong> – szybkie i tańsze rozwiązanie.
          Daje hydrofobowość i ułatwia mycie, ale jego trwałość to zwykle
          kilka tygodni do kilku miesięcy. Przy częstym kontakcie z solą może
          nie „dotrwać” do wiosny.
        </li>
        <li>
          <ShieldCheck className="icon" />
          <strong>
            <Link href="/oferta/powloka-ceramiczna">Powłoka ceramiczna</Link>
          </strong>{" "}
          – twarda, chemicznie odporna warstwa, która chroni lakier przez lata,
          a nie tygodnie. Sól, błoto i brud znacznie słabiej się do niej
          przyklejają, a auto po zimowej jeździe myje się dużo szybciej i
          bezpieczniej. To najlepszy wybór, jeśli auto codziennie jeździ po
          posolonych drogach.
        </li>
        <li>
          <Snowflake className="icon" />
          <strong>
            <Link href="/oferta/folia-ppf">Folia PPF</Link>
          </strong>{" "}
          – fizyczna bariera na elementy najbardziej narażone na piaskowanie i
          odpryski od kamieni i grysu: przedni zderzak, maskę, lusterka czy
          progi. Świetnie łączy się z powłoką ceramiczną na reszcie karoserii.
        </li>
      </ul>

      <h2 className={classes.blogTitle}>
        Dlaczego powłokę ceramiczną najlepiej zrobić jesienią?
      </h2>
      <p className={classes.textShadow}>
        Powłoka ceramiczna potrzebuje odpowiednich warunków do aplikacji i
        czasu na utwardzenie, zanim zetknie się z solą i agresywną chemią
        drogową. Jeśli zrobisz ją w październiku lub listopadzie, wjedziesz w
        zimę z w pełni utwardzonym zabezpieczeniem. Więcej o samej technologii
        przeczytasz w naszym wpisie o{" "}
        <Link
          href="/blog/powloka-ceramiczna-opole"
          className={classes.textLink}
        >
          powłoce ceramicznej
        </Link>
        .
      </p>

      <h2 className={classes.blogTitle}>
        Krok 4: Nie zapomnij o detalach
      </h2>
      <ul>
        <li>
          <Wrench className="icon" />
          <strong>Felgi</strong> – zabezpieczenie felg ułatwia zmywanie
          zapieczonego pyłu z klocków i soli, które potrafią trwale uszkodzić
          lakier felgi.
        </li>
        <li>
          <Wrench className="icon" />
          <strong>Uszczelki</strong> – zabezpieczone preparatem silikonowym nie
          przymarzają i nie pękają przy otwieraniu drzwi na mrozie.
        </li>
        <li>
          <Wrench className="icon" />
          <strong>Reflektory</strong> – po zmroku liczy się każdy metr
          widoczności. Jeśli klosze są matowe, sprawdź, czym jest{" "}
          <Link href="/oferta/regeneracja-reflektorow">
            regeneracja reflektorów
          </Link>{" "}
          i{" "}
          <Link href="/blog/regeneracja-reflektorow-przeglad-opole">
            czy z matowymi lampami przejdziesz przegląd
          </Link>
          .
        </li>
      </ul>

      <h2 className={classes.blogTitle}>Jak myć auto zimą, żeby nie szkodzić?</h2>
      <p className={classes.textShadow}>
        Nawet najlepsze zabezpieczenie wymaga rozsądnej pielęgnacji. Myj auto
        regularnie, szczególnie po okresach intensywnego solenia dróg – sól
        zostawiona na lakierze na kilka tygodni robi najwięcej szkód. Wybieraj
        myjnię ręczną lub bezdotykową zamiast szczotkowej, zaczynaj od
        dokładnego spłukania piasku i nie zapominaj o podwoziu i nadkolach. Nie
        zdrapuj szronu i śniegu z lakieru twardą szczotką ani skrobaczką – to
        prosta droga do rys.
      </p>

      <h2 className={classes.blogContactTitle}>
        Przygotujmy Twoje auto na zimę
      </h2>
      <p className={classes.contactInfo}>
        Chcesz wjechać w zimę z dobrze zabezpieczonym lakierem? Przyjedź na
        konsultację – ocenimy stan karoserii i dobierzemy zabezpieczenie do
        tego, jak i gdzie jeździsz. Zadzwoń lub napisz!
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
