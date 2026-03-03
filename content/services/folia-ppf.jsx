import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Folia PPF w Opolu – zabezpieczenie lakieru przed odpryskami",
  hero: "/2k-logo-white-czarne-tlo.png",
  heroAltText:
    "Profesjonalna aplikacja folii PPF na lakier samochodowy w 2K Auto Detailing Opole",
  lead: "Oferujemy profesjonalne zabezpieczenie lakieru folią PPF w Opolu. To najbardziej zaawansowana ochrona karoserii przed odpryskami kamieni, zarysowaniami i czynnikami atmosferycznymi. Precyzyjny montaż, właściwości samoregenerujące i nawet 10 lat ochrony.",
  slug: "folia-ppf",
};

export default function FoliaPpfPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Folia PPF – pancerz, który chroni przed każdym kamieniem</h2>
          <p>
            <Link href="/blog/folia-ppf-opole">Ochrona lakieru folią PPF</Link>{" "}
            to najwyższy stopień wtajemniczenia w zabezpieczaniu pojazdów. W 2K
            Auto Detailing Opole oferujemy montaż poliuretanowych folii
            ochronnych (Paint Protection Film), które stanowią fizyczną barierę
            dla odprysków. Jeśli często podróżujesz autostradami lub po prostu
            chcesz, by Twoje nowe auto zawsze wyglądało jak z salonu, folia PPF
            to jedyny skuteczny wybór.
          </p>

          <h2 className={classes.subtitle}>
            Zapomnij o odpryskach i zarysowaniach parkingowych
          </h2>

          <p className={classes.description}>
            Folia PPF to coś więcej niż naklejka. To elastyczna,
            samoregenerująca się powłoka o grubości przekraczającej 150
            mikronów. W przeciwieństwie do ceramiki, która chroni głównie przed
            chemią, folia PPF potrafi przyjąć na siebie uderzenie kamienia spod
            kół ciężarówki bez uszkodzenia lakieru pod spodem. To "druga skóra"
            Twojego samochodu, która gwarantuje spokój ducha na drodze.
          </p>

          <p className={classes.description}>
            <strong>
              W 2K Auto Detailing Opole montujemy folie z precyzyjnym zawijaniem
              krawędzi
            </strong>
            , co sprawia, że zabezpieczenie jest niemal całkowicie
            niedostrzegalne. Pracujemy na materiałach z najwyższej półki, które
            nie żółkną i posiadają właściwości hydrofobowe, przez co auto
            rzadziej wymaga mycia.
          </p>

          <h3>Dlaczego folia PPF to najlepsza polisa dla Twojego auta?</h3>
          <ul>
            <li>
              <strong>Totalna odporność na odpryski:</strong> Przedni zderzak,
              maska i lampy to miejsca najbardziej narażone. Dzięki PPF zostaną
              one wolne od "kraterów" spowodowanych przez piasek i kamienie
              nawet po tysiącach kilometrów.
            </li>
            <li>
              <strong>Cudowne właściwości samoregeneracji:</strong> Drobne rysy
              powstałe podczas mycia czy otarcia o krzaki znikają same pod
              wpływem słońca. Lakier zawsze pozostaje w stanie idealnym, bez
              potrzeby polerowania.
            </li>
            <li>
              <strong>Ochrona parkingowa i przed aktami wandalizmu:</strong>{" "}
              Folia potrafi ochronić lakier przed zarysowaniami kluczami czy
              lekkimi przytarciami na parkingu. Często po większej szkodzie
              wystarczy wymienić kawałek folii zamiast lakierować cały element.
            </li>
            <li>
              <strong>Ochrona reflektorów:</strong> Plastikowe klosze
              nowoczesnych lamp szybko matowieją. Folia PPF zatrzymuje ten
              proces, chroniąc je przed UV i piaskowaniem, co zapewnia
              bezpieczeństwo i mocne światło przez lata.
            </li>
            <li>
              <strong>Gwarancja najwyższej ceny przy sprzedaży:</strong> Kiedy
              zdecydujesz się na sprzedaż auta, możesz zerwać folię, a pod
              spodem nabywca zobaczy fabrycznie nowy lakier. To argument, który
              pozwala sprzedać samochód znacznie drożej.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Zabezpieczenie przodu auta bezbarwną folią ochronną PPF w 2K Auto Detailing Opole"
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
          <h2>Mistrzowska precyzja w aplikacji folii PPF</h2>
          <p>
            Montaż folii ochronnej to zadanie dla cierpliwych i doświadczonych
            specjalistów. W naszym studio w Opolu dbamy o to, by folia była
            dopasowana co do milimetra, a jej obecność była tajemnicą dla osób
            postronnych.
          </p>
          <ul>
            <li>
              <strong>Klinicznie czyste przygotowanie:</strong> Proces zaczynamy
              od kilkugodzinnego mycia i usuwania najdrobniejszych
              zanieczyszczeń metalicznych. Każdy pyłek pod folią psuje efekt,
              więc pracujemy w sterylnych warunkach.
            </li>
            <li>
              <strong>Korekta lakieru "pod folię":</strong> Jeśli auto nie jest
              nowe, wykonujemy{" "}
              <Link href="/blog/korekta-lakieru-opole">
                polerowanie lakieru
              </Link>
              , aby zamknąć pod folią idealną głębię koloru i blask.
            </li>
            <li>
              <strong>Montaż z arkusza i korzystanie z szablonów:</strong>{" "}
              Łączymy precyzję komputerowych szablonów z rzemieślniczym
              docinaniem tam, gdzie pozwala to na lepsze schowanie krawędzi
              (tzw. zawijanie pod spód).
            </li>
            <li>
              <strong>Stabilizacja i wygrzewanie:</strong> Po aplikacji auto
              zostaje u nas na dodatkową dobę, aby klej w pełni odparował.
              Wygrzewamy krawędzie, co eliminuje ryzyko podnoszenia się folii w
              przyszłości.
            </li>
            <li>
              <strong>Pełne wsparcie pozabiegowe:</strong> Otrzymujesz od nas
              pisemną gwarancję oraz zestaw porad, jak dbać o folię, by cieszyć
              się nią przez całą dekadę.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Profesjonalna usługa, samochód po odebraniu wyglądał jak
              nowy. Z całego serca polecam!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Karo J</cite>
            </footer>
          </blockquote>

          <h3>Folia PPF czy powłoka ceramiczna – co wybrać?</h3>
          <div>
            <p className={classes.contentSection__textP}>
              To pytanie zadaje sobie wielu naszych klientów. Odpowiedź brzmi:{" "}
              <strong>to zależy od Twoich potrzeb</strong>.
            </p>
            <ul className={classes.nestedList}>
              <li>
                <strong>Folia PPF</strong> to wybór, jeśli zależy Ci na{" "}
                <strong>maksymalnej ochronie mechanicznej</strong>– przed
                odpryskami kamieni, rysami, uszkodzeniami. To inwestycja w
                długoterminowe zachowanie idealnego lakieru.
              </li>
              <li>
                <strong>
                  <Link href="/blog/powloka-ceramiczna-opole">
                    Powłoka ceramiczna
                  </Link>
                </strong>{" "}
                to doskonały wybór, jeśli priorytetem jest
                <strong>
                  łatwość utrzymania czystości, efekt hydrofobowy i szklisty
                  połysk
                </strong>
                . Chroni przed chemią i UV, ale nie przed uderzeniami.
              </li>
            </ul>
            <p className={classes.contentSection__textP}>
              <strong>
                Idealnym, choć kosztowniejszym rozwiązaniem jest połączenie obu
                technologii
              </strong>{" "}
              – zabezpieczenie folią PPF elementów najbardziej narażonych
              (maska, zderzak, progi, lusterka) oraz aplikacja powłoki
              ceramicznej na całą karoserię. W 2K Auto Detailing chętnie
              doradzimy optymalny pakiet ochrony dla Twojego auta.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Specjalista 2K Auto Detailing podczas precyzyjnego montażu folii PPF w Opolu"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: CTA */}
      <section className={classes.callToActionSection}>
        <h2>Nasze realizacje – folia PPF w praktyce</h2>
        <p>
          Zobacz efekty naszych prac i przekonaj się, jak folia PPF chroni
          lakier przed odpryskami i zarysowaniami. W galerii znajdziesz zdjęcia
          samochodów z zabezpieczonymi maskami, zderzakami i elementami
          narażonymi na uszkodzenia.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Przejdź do galerii folii PPF
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ – DOPASOWANA DO OFERTY */}
      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o folię PPF</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące zabezpieczenia lakieru folią PPF? Poniżej
          znajdziesz odpowiedzi na najczęstsze wątpliwości naszych klientów.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym różni się folia PPF od powłoki ceramicznej ?
            </summary>
            <p className={classes.faqAnswer}>
              <strong>Folia PPF</strong> to fizyczna, elastyczna warstwa o
              grubości 150-250 mikronów, która chroni przed uderzeniami kamieni,
              odpryskami i głębszymi rysami.
              <strong> Powłoka ceramiczna</strong> to ciecz, która po
              utwardzeniu tworzy twardą, ale bardzo cienką (2-5 mikronów)
              warstwę ochronną. Zwiększa odporność na mikrozarysowania i chemię,
              ale nie chroni przed uderzeniami. Folia PPF oferuje mechaniczną
              ochronę, powłoka ceramiczna – chemiczną i wizualną.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak długo trwa montaż folii PPF?
            </summary>
            <p className={classes.faqAnswer}>
              Czas montażu zależy od zakresu zabezpieczenia. Zabezpieczenie
              samej maski i przedniego zderzaka to około 1-2 dni robocze. Pełne
              oklejenie całego samochodu może zająć od 3 do 5 dni. Dokładny czas
              ustalamy indywidualnie po inspekcji pojazdu i omówieniu zakresu
              prac.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy folia PPF żółknie z czasem?
            </summary>
            <p className={classes.faqAnswer}>
              Nowoczesne folie PPF renomowanych producentów, które stosujemy w
              2K Auto Detailing, są odporne na żółknięcie. Wyposażone są w
              stabilizatory UV, które zapobiegają degradacji materiału pod
              wpływem słońca. Gwarantujemy, że przez cały okres użytkowania
              folia pozostanie krystalicznie przezroczysta.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy folię PPF widać na samochodzie?
            </summary>
            <p className={classes.faqAnswer}>
              Profesjonalnie zamontowana folia PPF jest{" "}
              <strong>praktycznie niewidoczna</strong>. Dzięki komputerowemu
              docinaniu i precyzyjnemu ukrywaniu krawędzi, folia idealnie wtapia
              się w karoserię. Jest bezbarwna i błyszcząca – nie zmienia wyglądu
              lakieru. Dostępne są również folie matowe, które celowo zmieniają
              wykończenie na matowe, nadając autu unikalny, sportowy charakter.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak dbać o samochód po aplikacji folii PPF?
            </summary>
            <p className={classes.faqAnswer}>
              Pielęgnacja samochodu z folią PPF jest bardzo prosta. Przez
              pierwsze 3-4 dni po aplikacji nie należy myć auta. Później można
              myć je ręcznie lub na myjni bezdotykowej, unikając myjni
              automatycznych ze szczotkami. Zalecamy stosowanie dedykowanych
              szamponów do folii PPF i regularne osuszanie auta. Unikajmy
              silnych rozpuszczalników i past polerskich z wypełniaczami.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy można usunąć folię PPF bez uszkodzenia lakieru?
            </summary>
            <p className={classes.faqAnswer}>
              Tak, folia PPF jest zaprojektowana tak, aby można ją było
              bezpiecznie usunąć bez uszkodzenia oryginalnego lakieru. Proces
              usuwania wymaga jednak doświadczenia i odpowiednich narzędzi
              (dedykowane płyny, opalarka). Zawsze zalecamy, aby usuwanie folii
              zlecić profesjonalistom – w 2K Auto Detailing również oferujemy
              taką usługę.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
