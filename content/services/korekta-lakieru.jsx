import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";
import korektaImg from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-opole.webp";
import korektaImg2 from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-2-opole.webp";

export const meta = {
  title: "Korekta Lakieru",
  hero: korektaImg,
  heroAltText: "Mechaniczne polerowanie lakieru w celu usunięcia zarysowań",
  lead: "Pozbądź się uporczywych rys, oksydacji oraz brzydkich hologramów. Karoseria po bezpiecznym polerowaniu odzyska absolutną gładkość i refleks.",
  slug: "korekta-lakieru",
  faq: [
    {
      question: "Czym różni się jednoetapowa korekta od wieloetapowej?",
      answer:
        "Jednoetapowa korekta (One-Step) skupia się na odświeżeniu lakieru i usunięciu lekkich defektów (ok. 50-70% rys). Wieloetapowa korekta to bardziej zaawansowany proces, usuwający od 80% do 95% rys i hologramów, dający efekt idealnego lustra i głębokiej czerni. Jest bardziej czasochłonna i precyzyjna.",
    },
    {
      question: "Czy korekta lakieru jest bezpieczna dla mojego samochodu?",
      answer:
        "Tak, profesjonalnie wykonana korekta lakieru jest całkowicie bezpieczna. Używamy specjalistycznych mierników grubości lakieru, aby precyzyjnie kontrolować proces polerowania i nie naruszyć struktury powłoki lakierniczej.",
    },
    {
      question: "Ile czasu trwa korekta lakieru?",
      answer:
        "Czas korekty lakieru zależy od stanu początkowego lakieru oraz wybranego pakietu. Jednoetapowa korekta może zająć od 1 do 2 dni, natomiast kompleksowa, wieloetapowa korekta od 2 do nawet 4 dni. Dokładny czas ustalamy po szczegółowej inspekcji pojazdu.",
    },
    {
      question:
        "Czy po korekcie lakieru muszę zastosować jakieś zabezpieczenie?",
      answer:
        "Zdecydowanie tak. Po usunięciu defektów lakier jest goły i wymaga zabezpieczenia. Zawsze zalecamy aplikację powłoki ceramicznej, aby chronić lakier przed nowymi uszkodzeniami, promieniami UV, brudem drogowym i ułatwić jego późniejsze mycie.",
    },
  ],
};

export default function KorektaLakieruPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Renowacja powłoki lakierniczej – odśwież wygląd swojego auta</h2>
          <p>
            <Link href="/blog/korekta-lakieru-opole">Korekta lakieru</Link> to
            proces, który potrafi zdziałać cuda. Zamiast lakierować element na
            nowo, poddajemy go precyzyjnemu polerowaniu mechanicznemu, które
            trwale usuwa niedoskonałości. W 2K Auto Detailing Opole przywracamy
            karoserii głębię, gładkość i blask, niwelując skutki nieprawidłowego
            mycia, czynników atmosferycznych oraz codziennej eksploatacji.
          </p>

          {/* ✅ SEKCJA 1: JEDNOETAPOWA KOREKTA (ONE-STEP) */}
          <h2 className={classes.subtitle}>
            One-Step – szybki lifting lakieru i wysoki połysk
          </h2>
          <p className={classes.description}>
            Jednoetapowe polerowanie lakieru (tzw. One-Step) to idealne
            rozwiązanie dla właścicieli aut, których lakier stracił blask, ale
            nie wymaga głębokiej renowacji. Podczas tej usługi usuwamy do 60%
            powierzchownych zarysowań i zmatowień, znacząco podbijając estetykę
            auta. To ekonomiczny sposób na odświeżenie wyglądu przed sprzedażą
            lub aplikacją wosku.
          </p>

          <h3>Metody korekty lakieru w naszej ofercie:</h3>
          <ul>
            <li>
              <strong>Odświeżenie One-Step:</strong> Skupiamy się na wydobyciu
              połysku i usunięciu najdrobniejszych defektów. Lakier staje się
              śliski, klarowny i odzyskuje "salonową" prezencję w krótkim
              czasie.
            </li>
            <li>
              <strong>Pełna renowacja wieloetapowa:</strong> Zaawansowany proces
              wycinania głębszych rys i wielostopniowego wykańczania powierzchni
              do stanu idealnego. Pozwala na usunięcie nawet 95% defektów, dając
              niesamowity efekt "lustra".
            </li>
          </ul>

          {/* ✅ SEKCJA 2: WIELOETAPOWA KOREKTA */}
          <h2 className={classes.subtitle}>
            Wieloetapowe polerowanie – dążenie do perfekcji
          </h2>
          <p className={classes.description}>
            Dla najbardziej wymagających klientów przygotowaliśmy proces pełnej
            korekty. Każdy element karoserii jest wielokrotnie polerowany
            różnymi kombinacjami past i padów. Dzięki temu bezpiecznie usuwamy
            mikrorysy, wżery po owadach czy hologramy. To jedyny sposób, aby
            ciemne lakiery odzyskały swoją szlachetną czerń bez żadnych skaz
            widocznych pod słońce.
          </p>

          <ul>
            <li>
              <strong>Gruntowne przygotowanie pod ochronę:</strong> Każda
              profesjonalna{" "}
              <Link href="/blog/powloka-ceramiczna-opole">
                powłoka ceramiczna
              </Link>{" "}
              wymaga idealnie przygotowanego podłoża. Korekta lakieru w naszym
              wykonaniu gwarantuje, że zabezpieczenie będzie trzymać się mocno i
              wyglądać bezbłędnie.
            </li>
            <li>
              <strong>Bezpieczna dekontaminacja:</strong> Zanim maszyna dotknie
              lakieru, auto przechodzi przez proces chemicznego i mechanicznego
              oczyszczania (glinkowanie), co eliminuje ryzyko porysowania
              lakieru przez drobinki brudu podczas polerowania.
            </li>
          </ul>

          {/* ✅ SEKCJA 3: KOREKTA LAKIERU OPOLE – 2K AUTO DETAILING */}
          <h2 className={classes.subtitle}>
            Ekspercka renowacja lakieru w sercu Opola
          </h2>
          <p className={classes.description}>
            W 2K Auto Detailing Opole łączymy doświadczenie z pasją do
            motoryzacji. Profesjonalny{" "}
            <Link href="/blog/auto-detailing-opole">auto detailing</Link>{" "}
            zewnętrzny zaczynamy od inspekcji grubości lakieru miernikiem, co
            pozwala nam pracować z zachowaniem pełnego bezpieczeństwa dla
            Twojego auta. Efekt naszej pracy to nie tylko połysk, ale przede
            wszystkim zdrowszy i lepiej zabezpieczony lakier, co bezpośrednio
            podnosi wartość rynkową pojazdu.
          </p>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src={korektaImg}
            alt="Profesjonalne polerowanie i korekta lakieru w 2K Auto Detailing Opole – usuwanie rys"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: DLACZEGO WARTO WYBRAĆ 2K AUTO DETAILING */}
      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>Dlaczego Twój lakier zasługuje na wizytę u nas?</h2>
          <p>
            Nie boimy się trudnych wyzwań. Pracujemy na twardych lakierach marek
            premium oraz delikatnych lakierach aut azjatyckich, dobierając
            technologię pracy do konkretnej specyfiki materiału.
          </p>
          <ul>
            <li>
              <strong>Lata praktyki i setki realizacji:</strong> Polerowanie
              lakieru to sztuka, której uczyliśmy się latami. Wiemy, jak usunąć
              rysę, nie niszcząc bezpowrotnie struktury lakieru bezbarwnego.
            </li>
            <li>
              <strong>Park maszynowy klasy światowej:</strong> Korzystamy z
              maszyn Rupes i past Menzerna oraz Koch-Chemie. To standardy, które
              nie dopuszczają kompromisów jakościowych i gwarantują brak
              hologramów.
            </li>
            <li>
              <strong>Osobisty nadzór nad każdym centymetrem:</strong> Wszystkie
              etapy prac wykonujemy z pełnym zaangażowaniem. Jakość jest dla nas
              ważniejsza niż czas – auto oddajemy dopiero wtedy, gdy sami
              jesteśmy zachwyceni efektem.
            </li>
            <li>
              <strong>Profesjonalne oświetlenie inspekcyjne:</strong> Pracujemy
              w warunkach studyjnych, używając specjalistycznych lamp
              imitujących światło słoneczne. Widzimy to, czego nie widać na
              zwykłej myjni.
            </li>
            <li>
              <strong>Satysfakcja potwierdzona efektami:</strong> Naszym celem
              jest moment, w którym klient przeciera oczy z niedowierzania po
              odbiorze auta. Twoja radość to paliwo dla naszej pasji.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Oddałam swoje auto do 2K Auto Detailing Opole na korektę
              lakieru oraz przyciemnianie szyb i jestem zachwycona efektem.
              Lakier po korekcie wygląda jak nowy – zniknęły rysy, a kolor
              odzyskał głębię i połysk. Auto naprawdę robi teraz wrażenie. Jeśli
              ktoś szuka profesjonalnego auto detailingu w Opolu, korekty
              lakieru albo przyciemniania szyb – szczerze polecam. Pełen
              profesjonalizm i świetny kontakt. Na pewno wrócę 👍🚗&rdquo;
            </p>
            <footer>
              &mdash; <cite>Iwona Feliks</cite>
            </footer>
          </blockquote>

          <h3>Osobiste zaangażowanie – gwarancja perfekcji</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Wszystkie usługi w 2K Auto Detailing wykonujemy osobiście. Naszym
              celem jest nie tylko usunięcie defektów, ale także zapewnienie
              długotrwałego efektu i pełnej satysfakcji klienta.
            </p>
            <p className={classes.contentSection__textP}>
              Zaufaj naszemu doświadczeniu i pasji do perfekcji, a Twój samochód
              odzyska swój salonowy blask i będzie chroniony na lata.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src={korektaImg2}
            alt="Specjalista 2K Auto Detailing podczas korekty lakieru samochodowego w Opolu"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: CTA - GALERIA REALIZACJI */}
      <section className={classes.callToActionSection}>
        <h2>Nasze Realizacje Korekty Lakieru</h2>
        <p>
          Przeglądnij galerię zdjęć z naszych ostatnich projektów korekty
          lakieru, aby zobaczyć, jak spektakularne efekty możemy osiągnąć.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria/korekta-lakieru" className={classes.buttonPrimary}>
            Przejdź do Galerii Korekty Lakieru
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ */}
      <section className={classes.faqSection}>
        <h2>Najczęściej Zadawane Pytania o Korektę Lakieru</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące procesu korekty lakieru? Poniżej znajdziesz
          odpowiedzi na najczęściej zadawane pytania.
        </p>

        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym różni się jednoetapowa korekta od wieloetapowej?
            </summary>
            <p className={classes.faqAnswer}>
              Jednoetapowa korekta (One-Step) skupia się na odświeżeniu lakieru
              i usunięciu lekkich defektów (ok. 50-70% rys). Wieloetapowa
              korekta to bardziej zaawansowany proces, usuwający od 80% do 95%
              rys i hologramów, dający efekt idealnego &bdquo;lustra&rdquo; i
              głębokiej czerni. Jest bardziej czasochłonna i precyzyjna.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy korekta lakieru jest bezpieczna dla mojego samochodu?
            </summary>
            <p className={classes.faqAnswer}>
              Tak, profesjonalnie wykonana korekta lakieru jest całkowicie
              bezpieczna. Używamy specjalistycznych mierników grubości lakieru,
              aby precyzyjnie kontrolować proces polerowania i nie naruszyć
              struktury powłoki lakierniczej.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Ile czasu trwa korekta lakieru?
            </summary>
            <p className={classes.faqAnswer}>
              Czas korekty lakieru zależy od stanu początkowego lakieru oraz
              wybranego pakietu. Jednoetapowa korekta może zająć od 1 do 2 dni,
              natomiast kompleksowa, wieloetapowa korekta od 2 do nawet 4 dni.
              Dokładny czas ustalamy po szczegółowej inspekcji pojazdu.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy po korekcie lakieru muszę zastosować jakieś zabezpieczenie?
            </summary>
            <p className={classes.faqAnswer}>
              Zdecydowanie tak. Po usunięciu defektów lakier jest
              &bdquo;goły&rdquo; i wymaga zabezpieczenia. Zawsze zalecamy
              aplikację powłoki ceramicznej, aby chronić lakier przed nowymi
              uszkodzeniami, promieniami UV, brudem drogowym i ułatwić jego
              późniejsze mycie.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
