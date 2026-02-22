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
          <h2>Folia PPF – niewidzialna tarcza dla Twojego lakieru</h2>
          <p>
            <Link href="/blog/folia-ppf-opole">
              Zabezpieczenie lakieru folią PPF
            </Link>{" "}
            to najbardziej zaawansowana metoda ochrony karoserii samochodowej
            dostępna na rynku. Ta bezbarwna, poliuretanowa folia tworzy na
            powierzchni lakieru niewidzialną, a jednocześnie niezwykle
            wytrzymałą barierę, która skutecznie chroni przed zarysowaniami,
            odpryskami kamieni, czynnikami atmosferycznymi i drobnymi
            uszkodzeniami mechanicznymi. W 2K Auto Detailing Opole oferujemy
            profesjonalny montaż folii PPF najwyższej jakości.
          </p>

          {/* ✅ SEKCJA 1: H2 ZGODNE Z OPISEM SEO */}
          <h2 className={classes.subtitle}>
            Najbardziej zaawansowana ochrona karoserii przed uszkodzeniami
          </h2>

          <p className={classes.description}>
            Folia PPF zachowuje lakier w idealnym stanie przez długie lata,
            nadaje mu szklisty połysk i znacząco ułatwia utrzymanie auta w
            czystości. W przeciwieństwie do powłok ceramicznych, które
            zwiększają twardość lakieru, folia PPF działa jak dodatkowa,
            elastyczna skóra – to ona przyjmuje na siebie uderzenia kamieni,
            rysy i inne uszkodzenia, pozostawiając oryginalny lakier
            nienaruszonym.
          </p>

          <p className={classes.description}>
            <strong>
              Usługa w 2K Auto Detailing Opole obejmuje dokładne przygotowanie
              powierzchni oraz precyzyjny montaż folii
            </strong>
            , dzięki czemu efekt jest trwały, estetyczny i praktycznie
            niewidoczny dla oka. Stosujemy wyłącznie folie renomowanych
            producentów z gwarancją nawet do 10 lat. To idealne rozwiązanie dla
            osób, które chcą chronić lakier swojego auta na lata i zachować jego
            wartość rynkową.
          </p>

          <h3>Dlaczego warto zabezpieczyć lakier folią PPF?</h3>
          <ul>
            <li>
              <strong>Ochrona przed odpryskami kamieni i żwiru:</strong> Folia
              PPF skutecznie absorbuje energię uderzenia, zapobiegając
              powstawaniu odprysków na masce, zderzaku, progach i nadkolach –
              czyli elementach najbardziej narażonych na uszkodzenia
              mechaniczne.
            </li>
            <li>
              <strong>Odporność na zarysowania:</strong> Codzienne użytkowanie,
              myjnie samochodowe, gałęzie, pazury zwierząt – folia PPF chroni
              lakier przed drobnymi rysami, które z czasem matowią powierzchnię
              i obniżają wartość auta.
            </li>
            <li>
              <strong>Właściwości samoregenerujące (self-healing):</strong>{" "}
              Drobne rysy i zmatowienia powstałe na powierzchni folii znikają
              pod wpływem ciepła – słońca, gorącej wody lub opalarki. Lakier pod
              spodem pozostaje idealny.
            </li>
            <li>
              <strong>Ochrona przed czynnikami atmosferycznymi:</strong> Folia
              PPF jest odporna na promieniowanie UV, ptasie odchody, soki z
              drzew, owady i sól drogową. Zapobiega blaknięciu i matowieniu
              oryginalnego lakieru.
            </li>
            <li>
              <strong>Zachowanie wartości pojazdu:</strong> Samochód z
              oryginalnym, nienaruszonym lakierem i zabezpieczony folią PPF
              osiąga wyższą cenę przy odsprzedaży. To inwestycja, która się
              zwraca.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Samochód z zabezpieczeniem lakieru folią PPF w 2K Auto Detailing Opole – ochrona maski i zderzaka"
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
            Jak wygląda profesjonalny montaż folii PPF w 2K Auto Detailing?
          </h2>
          <p>
            Aplikacja folii PPF to proces wymagający nie tylko doświadczenia,
            ale przede wszystkim precyzji, odpowiednich warunków i
            specjalistycznego sprzętu. W 2K Auto Detailing każdy etap
            realizujemy z najwyższą starannością, aby zapewnić idealne
            przyleganie folii, brak pęcherzyków powietrza i niewidoczne
            krawędzie.
          </p>
          <ul>
            <li>
              <strong>Szczegółowa inspekcja i przygotowanie lakieru:</strong>{" "}
              Przed aplikacją folii dokładnie myjemy samochód, usuwamy wszelkie
              zanieczyszczenia, smołę, naloty metaliczne. W razie potrzeby
              wykonujemy jednoetapową{" "}
              <Link href="/blog/korekta-lakieru-opole">korektę lakieru</Link>,
              aby usunąć istniejące rysy. Folia PPF utrwala defekty pod spodem –
              dlatego lakier musi być idealny.
            </li>
            <li>
              <strong>Komputerowe docinanie folii (ploter):</strong> Korzystamy
              z zaawansowanych programów i ploterów tnących, które gwarantują
              idealne dopasowanie folii do każdego modelu samochodu. Eliminujemy
              ryzyko nierównych cięć, a krawędzie folii są precyzyjnie ukryte –
              często niewidoczne gołym okiem.
            </li>
            <li>
              <strong>Aplikacja na mokro:</strong> Folię nakładamy metodą mokrą,
              używając dedykowanego roztworu, który pozwala na swobodne
              pozycjonowanie folii i usunięcie całego powietrza spod
              powierzchni. Każdy panel jest dociskany i wygładzany z najwyższą
              precyzją.
            </li>
            <li>
              <strong>Kontrola jakości i wykończenie:</strong> Po aplikacji
              folii dokładnie sprawdzamy każdy element – krawędzie, narożniki,
              zakrzywione powierzchnie. Używamy opalarki do aktywacji kleju i
              utrwalenia właściwości samoregenerujących.
            </li>
            <li>
              <strong>Wskazówki pielęgnacyjne:</strong> Po zakończeniu usługi
              przekazujemy szczegółowe zalecenia dotyczące pielęgnacji folii
              PPF. Dzięki odpowiedniej konserwacji folia zachowa swoje
              właściwości i wygląd przez cały okres użytkowania.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Szybka i profesjonalna usługa. Założyłem folię PPF na maskę
              i przedni zderzak. Po roku użytkowania i kilku przejazdach
              autostradą – lakier jak nowy, zero odprysków. Jak będzie tylko
              okazja, zabezpieczę całe auto. Polecam 2K Auto Detailing!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Dorota, Opole</cite>
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
