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
          <h2>
            Kompleksowy auto detailing – pełna metamorfoza Twojego pojazdu
          </h2>
          <p>
            <Link href="/blog/auto-detailing-opole">Auto detailing</Link> to dla
            nas coś więcej niż zwykłe czyszczenie. To zaawansowany proces
            renowacji i zabezpieczenia, który przywraca samochodom ich pierwotny
            blask, a często sprawia, że wyglądają lepiej niż w dniu odbioru z
            salonu. W 2K Auto Detailing Opole podchodzimy do każdego auta z
            zegarmistrzowską precyzją, dbając o każdy centymetr kwadratowy
            karoserii i wnętrza.
          </p>

          <h2 className={classes.subtitle}>
            Profesjonalna pielęgnacja premium – od A do Z
          </h2>

          <p className={classes.description}>
            Nasza oferta kompleksowego detailingu to połączenie
            najnowocześniejszych technologii z wieloletnim doświadczeniem. Nie
            stosujemy rozwiązań szablonowych – każda realizacja zaczyna się od
            wnikliwej analizy stanu lakieru i materiałów wykończeniowych, aby
            dobrać optymalne metody pracy.
          </p>

          <h3>Etapy profesjonalnego detailingu w naszym wykonaniu:</h3>
          <ul>
            <li>
              <strong>Dekontaminacja i dogłębne oczyszczanie:</strong>{" "}
              Eliminujemy trudne zabrudzenia, takie jak osady metaliczne, smoła
              czy soki z drzew, które trwale wiążą się z lakierem. To fundament
              bezpiecznej pracy nad estetyką auta.
            </li>
            <li>
              <strong>Perfekcyjna korekta powłoki lakierniczej:</strong> Usuwamy
              zarysowania, zmatowienia i niedoskonałości, wydobywając z lakieru
              niesamowitą głębię i ziarno koloru. Stosujemy maszyny polerskie
              Rupes dla uzyskania idealnego wykończenia.
            </li>
            <li>
              <strong>Zaawansowane systemy ochronne:</strong> Zabezpieczamy
              efekty naszej pracy, aplikując{" "}
              <Link href="/blog/powloka-ceramiczna-opole">
                powłoki ceramiczne i elastomerowe
              </Link>{" "}
              (Cleantle, Aqua) lub folie ochronne PPF, które tworzą trwałą
              barierę przed czynnikami atmosferycznymi.
            </li>
            <li>
              <strong>Renowacja i detailing kabiny:</strong>{" "}
              <Link href="/blog/detailing-wnetrza-opole">Wnętrze auta</Link>{" "}
              poddajemy pełnej regeneracji – od prania ekstrakcyjnego, przez
              czyszczenie parowe, aż po impregnację skór i tworzyw sztucznych.
            </li>
            <li>
              <strong>Ochrona felg i detali:</strong> Nie zapominamy o kołach i
              elementach ozdobnych. Felgi zabezpieczamy powłoką odporną na pył z
              klocków hamulcowych, a oponom nadajemy fabryczny wygląd dzięki
              dedykowanym dressingom.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-black-biale-tlo.png"
            alt="Profesjonalny auto detailing w 2K Auto Detailing Opole – pełna metamorfoza samochodu"
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
          <h2>Dlaczego warto powierzyć nam swój samochód?</h2>
          <p>
            W 2K Auto Detailing łączymy rzemieślniczą pasję z profesjonalizmem.
            Wiemy, jak ważny jest dla Ciebie Twój samochód, dlatego traktujemy
            go z takim samym szacunkiem, z jakim traktujemy własne maszyny.
            Nasza filozofia opiera się na jakości, nie na ilości.
          </p>
          <ul>
            <li>
              <strong>Ekspercka wiedza i doświadczenie:</strong> Ponad dekada
              pracy w branży detailingowej pozwoliła nam wypracować techniki,
              które gwarantują bezpieczeństwo delikatnych elementów auta przy
              jednoczesnym osiągnięciu spektakularnych efektów.
            </li>
            <li>
              <strong>Wyłącznie certyfikowana chemia:</strong> Korzystamy z
              produktów liderów rynku: Koch-Chemie, Rupes, Cleantle, Aqua 9H,
              Colourlock. To pewność, że materiały w Twoim aucie nie zostaną
              uszkodzone przez tanią i agresywną chemię.
            </li>
            <li>
              <strong>Personalizacja każdej usługi:</strong> Zawsze słuchamy
              Twoich potrzeb. Niezależnie czy przygotowujesz auto do sprzedaży,
              czy chcesz cieszyć się nieskazitelnym blaskiem na co dzień –
              przygotujemy plan działania szyty na miarę.
            </li>
            <li>
              <strong>Pełna przejrzystość:</strong> Dokumentujemy etapy naszych
              prac i chętnie dzielimy się wiedzą, jak dbać o auto po wyjeździe z
              naszego studia. U nas wiesz, za co płacisz.
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
