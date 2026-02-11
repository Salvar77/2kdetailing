import React from "react";
import Image from "next/image";
import classes from "../../app/oferta/[slug]/page.module.scss";
import Link from "next/link";

export const meta = {
  title: "Auto detailing w Opolu – kompleksowa metamorfoza auta",
  hero: "/2k-logo-black-biale-tlo.png",
  heroAltText:
    "Kompleksowy auto detailing w 2K Auto Detailing Opole – korekta lakieru, powłoka ceramiczna, detailing wnętrza",
  lead: "Oferujemy profesjonalny auto detailing w Opolu – kompleksową pielęgnację Twojego samochodu. Od precyzyjnej korekty lakieru i aplikacji powłok ceramicznych, przez zabezpieczenie folią PPF, aż po detailing wnętrza i ozonowanie. Przywracamy autu salonowy blask i długotrwałą ochronę.",
  slug: "auto-detailing",
};

export default function AutoDetailingPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Auto detailing – kompleksowa ochrona i metamorfoza</h2>
          <p>
            <Link href="/blog/auto-detailing-opole">Auto detailing</Link> to
            najwyższy standard pielęgnacji samochodu – połączenie zaawansowanych
            technik czyszczenia, korekty lakieru i długotrwałego zabezpieczenia.
            W 2K Auto Detailing Opole oferujemy kompleksowe usługi, które
            przywracają Twojemu autu salonowy blask i chronią je na lata. To nie
            zwykłe mycie – to prawdziwa metamorfoza.
          </p>

          <h2 className={classes.subtitle}>
            Kompleksowa pielęgnacja – od lakieru po wnętrze
          </h2>

          <p className={classes.description}>
            Auto detailing w 2K Auto Detailing to nie jedna usługa, a
            <strong> zestaw zaawansowanych procesów</strong> dopasowanych do
            stanu i potrzeb Twojego pojazdu. Łączymy technologie, produkty i
            doświadczenie, aby osiągnąć efekt, który Cię zachwyci.
          </p>

          <h3>Co wchodzi w skład auto detailingu?</h3>
          <ul>
            <li>
              <strong>Mycie detailingowe i dekontaminacja lakieru:</strong>{" "}
              Usuwamy wszelkie zanieczyszczenia – smołę, naloty metaliczne,
              żywicę, które są niewidoczne gołym okiem, ale niszczą strukturę
              lakieru. To podstawa każdej profesjonalnej pielęgnacji.
            </li>
            <li>
              <strong>Korekta lakieru (jedno- lub wieloetapowa):</strong>{" "}
              Usuwamy rysy, hologramy i zmatowienia. Przywracamy głębię koloru i
              idealną gładkość. Efekt lustra – perfekcyjny połysk.
            </li>
            <li>
              <strong>Zabezpieczenie lakieru:</strong> Aplikujemy powłokę
              ceramiczną (Cleantle Admire / Aqua 9H Self Healing) lub folię PPF,
              aby chronić lakier przed UV, solą, chemią i uszkodzeniami
              mechanicznymi.
            </li>
            <li>
              <strong>Detailing wnętrza:</strong> Kompleksowe czyszczenie
              tapicerki, plastików, szyb, podsufitki i bagażnika. Pranie
              ekstrakcyjne, impregnacja, ozonowanie – wnętrze staje się świeże,
              higieniczne i pachnące.
            </li>
            <li>
              <strong>Detailing kół i opon:</strong> Gruntowne czyszczenie felg,
              zabezpieczenie przed zabrudzeniem, dressing opon. Detal, który
              robi różnicę.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-black-biale-tlo.png"
            alt="Kompleksowy auto detailing w 2K Auto Detailing Opole – korekta lakieru i powłoka ceramiczna"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>Dlaczego warto wybrać 2K Auto Detailing?</h2>
          <p>
            Wybierając 2K Auto Detailing, stawiasz na pasję, precyzję i
            niekwestionowane doświadczenie. Każde auto traktujemy indywidualnie,
            a naszym celem jest nie tylko wysoka jakość, ale także Twoja
            satysfakcja.
          </p>
          <ul>
            <li>
              <strong>Ponad 10 lat doświadczenia:</strong> Specjalizujemy się w
              auto detailingu od dekady. Doskonaliliśmy techniki, testowaliśmy
              produkty i zdobywaliśmy wiedzę, aby zapewnić Ci najwyższy
              standard.
            </li>
            <li>
              <strong>Certyfikowane kosmetyki premium:</strong> Pracujemy na
              sprawdzonych produktach Koch-Chemie, Rupes, Cleantle, Aqua 9H,
              Colourlock. Bezpieczeństwo lakieru i trwałe efekty.
            </li>
            <li>
              <strong>Indywidualne podejście:</strong> Zawsze diagnozujemy stan
              pojazdu i dobieramy zakres usług do Twoich potrzeb i oczekiwań.
              Nie ma szablonów – jest indywidualny plan.
            </li>
            <li>
              <strong>Transparentność i komunikacja:</strong> Informujemy na
              bieżąco o postępach prac. Nie mamy ukrytych kosztów. Szanujemy
              Twój czas i zaufanie.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Z całego serca polecam 2K Auto Detailing. Samochód zyskał
              niesamowity blask, tapicerka jak nowa, a powłoka ceramiczna
              sprawia, że woda dosłownie ucieka z lakieru. Fachowość,
              kompetencja i życzliwość – wszystko na najwyższym poziomie!&rdquo;
            </p>
            <footer>
              <cite>Andreas Krefft, Opole</cite>
            </footer>
          </blockquote>

          <h3>Auto detailing – inwestycja w wartość Twojego auta</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Samochód z zadbanym, skorygowanym i zabezpieczonym lakierem oraz
              czystym, odświeżonym wnętrzem{" "}
              <strong>osiąga wyższą cenę przy odsprzedaży</strong>. To nie koszt
              – to inwestycja, która się zwraca. Dodatkowo każdego dnia
              czerpiesz radość z jazdy autem, które wygląda jak nowe.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-black-biale-tlo.png"
            alt="Zespół 2K Auto Detailing podczas kompleksowej pielęgnacji samochodu w Opolu"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section className={classes.callToActionSection}>
        <h2>Zobacz nasze realizacje</h2>
        <p>
          Przekonaj się o jakości naszych usług, przeglądając galerię zdjęć z
          projektów auto detailingu zrealizowanych w 2K Auto Detailing Opole.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Galeria realizacji
          </a>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o auto detailing</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące kompleksowej pielęgnacji samochodu? Sprawdź
          odpowiedzi na najczęstsze wątpliwości.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak długo trwa auto detailing?
            </summary>
            <p className={classes.faqAnswer}>
              Czas trwania zależy od zakresu usług i stanu pojazdu. Kompleksowy
              auto detailing (korekta lakieru + powłoka ceramiczna + detailing
              wnętrza) to zazwyczaj <strong>2-4 dni robocze</strong>. Dokładny
              harmonogram ustalamy indywidualnie po inspekcji.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy auto detailing jest tylko dla nowych samochodów?
            </summary>
            <p className={classes.faqAnswer}>
              Absolutnie nie! Auto detailing to doskonałe rozwiązanie zarówno
              dla nowych aut (ochrona lakieru od razu po zakupie), jak i dla
              samochodów używanych (przywrócenie blasku, usunięcie rys,
              odświeżenie wnętrza). To także świetna inwestycja przed sprzedażą.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym różni się auto detailing od mycia samochodu?
            </summary>
            <p className={classes.faqAnswer}>
              Mycie samochodu to usługa powierzchniowa – usuwa bród z zewnątrz.
              <strong> Auto detailing</strong> to wieloetapowy proces, który
              obejmuje dogłębne czyszczenie, dekontaminację, korektę lakieru i
              jego długotrwałe zabezpieczenie. To nie to samo, co wizyta w
              myjni.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
