import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Powłoka ceramiczna w Opolu – ochrona lakieru na lata",
  hero: "/2k-logo-white-czarne-tlo.png",
  heroAltText:
    "Profesjonalna aplikacja powłoki ceramicznej na lakier samochodowy w 2K Auto Detailing Opole",
  lead: "Oferujemy profesjonalne zabezpieczenie lakieru powłokami ceramicznymi w Opolu. Stosujemy sprawdzone linie Cleantle Admire (do 2 lat) oraz Aqua 9H Self Healing (do 3 lat). Gwarantujemy szklisty połysk, efekt hydrofobowy i długotrwałą ochronę przed UV, solą drogową i zanieczyszczeniami.",
  slug: "powloka-ceramiczna",
};

export default function PowlokaCeramicznaPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Powłoka ceramiczna – niezrównana ochrona i szklisty połysk</h2>
          <p>
            <Link href="/blog/powloka-ceramiczna-opole">
              Powłoka ceramiczna
            </Link>{" "}
            to profesjonalne zabezpieczenie lakieru, które chroni karoserię
            przed promieniowaniem UV, solą drogową, owadami, ptasimi odchodami i
            innymi czynnikami zewnętrznymi nawet przez kilka lat. W 2K Auto
            Detailing Opole oferujemy wyłącznie sprawdzone, certyfikowane
            powłoki renomowanych producentów.
          </p>

          {/* ✅ SEKCJA 1: H2 ZGODNE Z OPISEM SEO */}
          <h2 className={classes.subtitle}>
            Profesjonalne zabezpieczenie karoserii na długie lata
          </h2>

          <p className={classes.description}>
            W naszej ofercie znajdziesz dwa sprawdzone systemy ochrony lakieru.
            <strong> Powłoka Cleantle Admire</strong> zapewnia ochronę do 2 lat
            – idealna dla klientów szukających optymalnego stosunku jakości do
            ceny.
            <strong> Powłoka Aqua 9H Self Healing</strong> to zaawansowana
            technologia z efektem samoregeneracji drobnych rys pod wpływem
            ciepła, gwarantująca ochronę nawet do 3 lat.
          </p>

          <h3>Kluczowe korzyści z aplikacji powłoki ceramicznej:</h3>
          <ul>
            <li>
              <strong>Szklisty połysk i głębia koloru:</strong> Powłoka
              ceramiczna podkreśla oryginalny kolor lakieru i nadaje mu
              spektakularny, lustrzany blask, który utrzymuje się przez cały
              okres ochrony.
            </li>
            <li>
              <strong>Efekt hydrofobowy (wodny liść):</strong> Woda i
              zabrudzenia swobodnie spływają z powierzchni, co sprawia, że
              samochód dłużej pozostaje czysty, a mycie staje się szybsze i
              łatwiejsze.
            </li>
            <li>
              <strong>Ochrona przed czynnikami zewnętrznymi:</strong> Skuteczna
              bariera przed promieniowaniem UV, solą drogową, kwaśnymi
              deszczami, ptasimi odchodami i owadami.
            </li>
            <li>
              <strong>Odporność na mikrozarysowania:</strong> Twardość 9H w
              skali Mohsa (w przypadku Aqua 9H Self Healing) znacząco zwiększa
              odporność na drobne rysy powstające podczas mycia.
            </li>
            <li>
              <strong>Wzrost wartości pojazdu:</strong> Zabezpieczony lakier
              zachowuje idealny wygląd przez lata, co przekłada się na wyższą
              wartość samochodu przy odsprzedaży.
            </li>
          </ul>

          <p className={classes.highlight}>
            <strong>
              Wybierz powłokę ceramiczną w 2K Auto Detailing Opole
            </strong>{" "}
            i ciesz się perfekcyjnym wyglądem samochodu przez lata. Stawiamy na
            precyzję, sprawdzone produkty i indywidualne podejście do każdego
            pojazdu.
          </p>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Samochód z nałożoną powłoką ceramiczną w 2K Auto Detailing Opole – efekt hydrofobowy i szklisty połysk"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: PROCES APLIKACJI – 2K AUTO DETAILING */}
      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>
            Jak wygląda proces aplikacji powłoki ceramicznej w 2K Auto
            Detailing?
          </h2>
          <p>
            Przed nałożeniem powłoki wykonujemy dokładne mycie ręczne i
            przygotowanie powierzchni, co zapewnia maksymalną trwałość i
            skuteczność efektu. Każdy etap realizujemy z najwyższą precyzją,
            używając profesjonalnego sprzętu i kosmetyków.
          </p>
          <ul>
            <li>
              <strong>Mycie detailingowe i dekontaminacja:</strong> Usuwamy
              wszelkie zanieczyszczenia z powierzchni lakieru – smołę, naloty
              metaliczne, żywicę i pozostałości po starych woskach.
            </li>
            <li>
              <strong>Korekta lakieru (opcjonalnie):</strong> W zależności od
              stanu lakieru wykonujemy jedno- lub wieloetapową korektę, aby
              usunąć rysy, hologramy i zmatowienia. Czysty, pozbawiony defektów
              lakier to podstawa perfekcyjnego przylegania powłoki.
            </li>
            <li>
              <strong>Dokładne odtłuszczanie:</strong> Używamy specjalistycznych
              preparatów do usunięcia pozostałości past polerskich i zapewnienia
              idealnie czystej powierzchni. Każdy panel jest kontrolowany pod
              specjalnym oświetleniem.
            </li>
            <li>
              <strong>Aplikacja powłoki ceramicznej:</strong> Powłoka jest
              nakładana ręcznie, panel po panelu, w kontrolowanych warunkach
              temperatury i wilgotności. Każda warstwa jest precyzyjnie
              rozprowadzana i docierana.
            </li>
            <li>
              <strong>Wskazówki pielęgnacyjne:</strong> Po odbiorze pojazdu
              przekazujemy szczegółowe zalecenia dotyczące prawidłowej
              pielęgnacji powłoki ceramicznej, abyś mógł cieszyć się jej
              właściwościami przez długie lata.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Pełen profesjonalizm. Samochód wygląda jak nowy, a woda
              dosłownie ucieka z lakieru. Powłoka ceramiczna z Aqua 9H to był
              strzał w dziesiątkę. Szybko, sprawnie i bezproblemowo. Z czystym
              sumieniem polecam 2K Auto Detailing!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Łukasz Halkiewicz, Opole</cite>
            </footer>
          </blockquote>

          <h3>Dlaczego warto wybrać 2K Auto Detailing?</h3>
          <div>
            <p className={classes.contentSection__textP}>
              W 2K Auto Detailing stawiamy na{" "}
              <strong>jakość, doświadczenie i sprawdzone produkty</strong>. Nasz
              zespół posiada wieloletnią praktykę w aplikacji powłok
              ceramicznych, a używane przez nas linie Cleantle Admire i Aqua 9H
              Self Healing to gwarancja trwałości i spektakularnych efektów.
            </p>
            <p className={classes.contentSection__textP}>
              Każde auto traktujemy indywidualnie – dobieramy rodzaj powłoki do
              oczekiwań klienta, stylu użytkowania pojazdu i stanu lakieru.
              Działamy transparentnie, komunikujemy się na każdym etapie i
              szanujemy Twój czas.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Specjalista 2K Auto Detailing podczas aplikacji powłoki ceramicznej w Opolu"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: CTA */}
      <section className={classes.callToActionSection}>
        <h2>Nasze realizacje – powłoka ceramiczna w praktyce</h2>
        <p>
          Zobacz efekty naszych prac i przekonaj się, jak powłoka ceramiczna
          podkreśla głębię koloru i chroni lakier samochodowy. Każde zdjęcie to
          realna realizacja w 2K Auto Detailing Opole.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Przejdź do galerii powłok ceramicznych
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ – DOSTOSOWANA DO NOWEJ OFERTY */}
      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o powłoki ceramiczne</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące ochrony lakieru powłoką ceramiczną? Poniżej
          znajdziesz odpowiedzi na najczęstsze wątpliwości.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym różnią się powłoki Cleantle Admire od Aqua 9H Self Healing?
            </summary>
            <p className={classes.faqAnswer}>
              Cleantle Admire to sprawdzona powłoka jednowarstwowa o trwałości
              do 2 lat, która zapewnia doskonały połysk i właściwości
              hydrofobowe. Aqua 9H Self Healing to zaawansowana powłoka
              wielowarstwowa o twardości 9H i trwałości do 3 lat, dodatkowo
              posiada właściwości samoregenerujące – drobne rysy znikają pod
              wpływem ciepła (słońce, gorąca woda). Obie powłoki oferujemy w 2K
              Auto Detailing.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak długo trwa aplikacja powłoki ceramicznej?
            </summary>
            <p className={classes.faqAnswer}>
              Czas aplikacji zależy od stanu lakieru i wybranej powłoki. Dla
              powłoki Cleantle Admire z przygotowaniem lakieru należy
              zarezerwować 1-2 dni. W przypadku Aqua 9H Self Healing, która
              wymaga aplikacji wielowarstwowej, proces może trwać 2-3 dni.
              Dokładny czas ustalamy indywidualnie po inspekcji pojazdu.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy powłoka ceramiczna chroni przed kamieniami i głębokimi rysami?
            </summary>
            <p className={classes.faqAnswer}>
              Powłoka ceramiczna zwiększa odporność na mikrozarysowania i drobne
              uszkodzenia mechaniczne, ale nie jest zabezpieczeniem przed
              uderzeniami kamieni czy głębokimi rysami. Do pełnej ochrony przed
              odpryskami zalecamy połączenie powłoki ceramicznej z folią PPF na
              elementach szczególnie narażonych (maska, zderzak, lusterka).
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy muszę przygotować samochód przed wizytą?
            </summary>
            <p className={classes.faqAnswer}>
              Nie ma takiej potrzeby. Samochód powinien być suchy i wolny od
              zbędnych przedmiotów we wnętrzu. Cały proces przygotowania
              lakieru, w tym dokładne mycie, dekontaminację i korektę,
              wykonujemy w naszym studio. To gwarantuje, że powłoka zostanie
              nałożona na idealnie czystą i odpowiednio przygotowaną
              powierzchnię.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak dbać o auto po aplikacji powłoki ceramicznej?
            </summary>
            <p className={classes.faqAnswer}>
              Zalecamy mycie ręczne dedykowanymi szamponami dla powłok
              ceramicznych lub korzystanie z myjni bezdotykowych. Unikaj myjni
              automatycznych ze szczotkami. Po każdym myciu warto osuszyć auto
              miękkim ręcznikiem z mikrofibry. Dla przedłużenia żywotności
              powłoki rekomendujemy coroczną wizytę kontrolną i odświeżenie
              właściwości hydrofobowych.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
