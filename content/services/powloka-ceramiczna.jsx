import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Powłoka Ceramiczna",
  hero: "/2k-logo-white-czarne-tlo.png",
  heroAltText:
    "Dokładna aplikacja powłoki ceramicznej zabezpieczającej lakier samochodu",
  lead: "Aplikujemy topowe powłoki Cleantle i Aqua 9H. Ochronisz lakier przed mikrozarysowaniami oraz chemią, zyskując obłędny, piękny szklany połysk.",
  slug: "powloka-ceramiczna",
  faq: [
    {
      question:
        "Czym różnią się powłoki Cleantle Admire od Aqua 9H Self Healing?",
      answer:
        "Cleantle Admire to sprawdzona powłoka jednowarstwowa o trwałości do 2 lat, która zapewnia doskonały połysk i właściwości hydrofobowe. Aqua 9H Self Healing to zaawansowana powłoka wielowarstwowa o twardości 9H i trwałości do 3 lat, dodatkowo posiada właściwości samoregenerujące – drobne rysy znikają pod wpływem ciepła (słońce, gorąca woda). Obie powłoki oferujemy w 2K Auto Detailing.",
    },
    {
      question: "Jak długo trwa aplikacja powłoki ceramicznej?",
      answer:
        "Czas aplikacji zależy od stanu lakieru i wybranej powłoki. Dla powłoki Cleantle Admire z przygotowaniem lakieru należy zarezerwować 1-2 dni. W przypadku Aqua 9H Self Healing, która wymaga aplikacji wielowarstwowej, proces może trwać 2-3 dni. Dokładny czas ustalamy indywidualnie po inspekcji pojazdu.",
    },
    {
      question:
        "Czy powłoka ceramiczna chroni przed kamieniami i głębokimi rysami?",
      answer:
        "Powłoka ceramiczna zwiększa odporność na mikrozarysowania i drobne uszkodzenia mechaniczne, ale nie jest zabezpieczeniem przed uderzeniami kamieni czy głębokimi rysami. Do pełnej ochrony przed odpryskami zalecamy połączenie powłoki ceramicznej z folią PPF na elementach szczególnie narażonych (maska, zderzak, lusterka).",
    },
    {
      question: "Czy muszę przygotować samochód przed wizytą?",
      answer:
        "Nie ma takiej potrzeby. Samochód powinien być suchy i wolny od zbędnych przedmiotów we wnętrzu. Cały proces przygotowania lakieru, w tym dokładne mycie, dekontaminację i korektę, wykonujemy w naszym studio. To gwarantuje, że powłoka zostanie nałożona na idealnie czystą i odpowiednio przygotowaną powierzchnię.",
    },
    {
      question: "Jak dbać o auto po aplikacji powłoki ceramicznej?",
      answer:
        "Zalecamy mycie ręczne dedykowanymi szamponami dla powłok ceramicznych lub korzystanie z myjni bezdotykowych. Unikaj myjni automatycznych ze szczotkami. Po każdym myciu warto osuszyć auto miękkim ręcznikiem z mikrofibry. Dla przedłużenia żywotności powłoki rekomendujemy coroczną wizytę kontrolną i odświeżenie właściwości hydrofobowych.",
    },
  ],
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
          <h2>Powłoka ceramiczna – tarcza ochronna dla Twojego lakieru</h2>
          <p>
            <Link href="/blog/powloka-ceramiczna-opole">
              Powłoka ceramiczna
            </Link>{" "}
            to inwestycja, która zmienia sposób, w jaki dbasz o swój samochód.
            To nie jest zwykły wosk, lecz zaawansowana bariera chemiczna, która
            wiąże się z lakierem bezbarwnym, tworząc twardą i ultra-śliską
            warstwę. W 2K Auto Detailing Opole stawiamy na technologie, które
            realnie chronią Twoje auto przed agresywną chemią drogową i
            promieniowaniem UV.
          </p>

          <h2 className={classes.subtitle}>
            Długofalowa ochrona lakieru z efektem samoczyszczenia
          </h2>

          <p className={classes.description}>
            W naszym studiu w Opolu dobieramy zabezpieczenie do Twojego stylu
            użytkowania samochodu. Proponujemy sprawdzoną powłokę{" "}
            <strong>Cleantle Admire</strong> dla osób szukających solidnej
            ochrony do 24 miesięcy oraz rewolucyjną{" "}
            <strong>Aqua 9H Self Healing</strong>. Ta ostatnia, o trwałości do 3
            lat, posiada unikalną zdolność "samoleczenia" – pod wpływem ciepła
            słońca drobne mikrorysy potrafią same się zniwelować.
          </p>

          <h3>Co zyskujesz dzięki ceramice na aucie?</h3>
          <ul>
            <li>
              <strong>Efekt nieskazitelnego lustra:</strong> Ceramika podbija
              głębię ziarna w lakierach metalizowanych i nadaje niesamowitą
              szklistość lakierom uni. Twój samochód zawsze wygląda, jakby
              dopiero co wyjechał z myjni.
            </li>
            <li>
              <strong>Hydrofobowość na najwyższym poziomie:</strong> Woda i
              błoto nie przywierają do powierzchni, lecz formują się w kropelki,
              które spływają same podczas jazdy. Mycie auta staje się czystą
              przyjemnością i trwa połowę krócej.
            </li>
            <li>
              <strong>Odporność na czynniki zewnętrzne:</strong> Skuteczna
              ochrona przed odbarwieniami spowodowanymi ptasimi odchodami,
              sokami z drzew czy solą drogową, która w okresie zimowym niszczy
              niezabezpieczony lakier.
            </li>
            <li>
              <strong>Zwiększona odporność na chemię:</strong> Nasze powłoki są
              odporne na środki o ekstremalnym odczynie pH, co chroni lakier
              przed zmatowieniem na myjniach bezdotykowych.
            </li>
            <li>
              <strong>Wyższa wartość przy odsprzedaży:</strong> Kupujący
              doceniają auta z certyfikowaną ochroną. To dowód na to, że
              właściciel dbał o stan techniczny i wizualny pojazdu.
            </li>
          </ul>

          <p className={classes.highlight}>
            <strong>
              Zadbaj o przyszłość swojego auta z 2K Auto Detailing Opole.
            </strong>{" "}
            Zapewniamy profesjonalne doradztwo i precyzyjną aplikację, która
            jest kluczem do deklarowanej trwałości powłoki.
          </p>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Zabezpieczenie lakieru powłoką ceramiczną w 2K Auto Detailing Opole – efekt hydrofobowy"
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
          <h2>Precyzyjny proces aplikacji – bo liczą się detale</h2>
          <p>
            Aplikacja ceramiki to dla nas proces wieloetapowy. Nie nakładamy
            powłoki na przypadkowo umyte auto. Każdy pojazd przechodzi przez
            ścieżkę przygotowania, która gwarantuje idealne wiązanie chemiczne
            ceramiki z lakierem.
          </p>
          <ul>
            <li>
              <strong>Dekontaminacja chemiczna i mechaniczna:</strong> Usuwamy
              osady metaliczne, smołę oraz inne zanieczyszczenia, których nie
              zmyje tradycyjny szampon.
            </li>
            <li>
              <strong>Obowiązkowa korekta lakieru:</strong> Nawet na nowych
              autach z salonu wykonujemy przynajmniej odświeżenie lakieru, aby
              usunąć fabryczne niedoskonałości i idealnie przygotować
              powierzchnię pod powłokę.
            </li>
            <li>
              <strong>Wielokrotne odtłuszczanie:</strong> To krytyczny moment.
              Używamy specjalistycznych preparatów (tzw. IPA i zmywaczy
              silikonowych), aby mieć pewność, że na lakierze nie zostały żadne
              resztki olejów polerskich.
            </li>
            <li>
              <strong>Aplikacja w warunkach studyjnych:</strong> Powłokę
              nakładamy panel po panelu w czystym, oświetlonym pomieszczeniu o
              kontrolowanej temperaturze, co jest niezbędne dla poprawnego
              procesu utwardzania.
            </li>
            <li>
              <strong>Edukacja klienta:</strong> Po usłudze nie zostawiamy Cię
              samego. Tłumaczymy, jak myć auto, aby powłoka służyła Ci przez
              deklarowane lata.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Jestem zadowolony z wykonanej usługi - czyszczenie wnętrza
              oraz nakładanie ceramiki na cały samochód. Usługa wykonana
              kompleksowo z dopilnowaniem najmniejszych szczegółów. Nigdy mój
              samochód nie był tak czysty i dopieszczony. Na pewno będę wracał
              do tego miejsca. Polecam serdecznie!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Wi Lan</cite>
            </footer>
          </blockquote>

          <h3>Dlaczego warto wybrać 2K Auto Detailing?</h3>
          <div>
            <p className={classes.contentSection__textP}>
              W 2K Auto Detailing stawiamy na zespół powierza pełen{" "}
              <Link href="/blog/auto-detailing-opole">auto detailing</Link> z
              wieloletnią praktyką w aplikacji powłok ceramicznych, a używane
              przez nas linie Cleantle Admire i Aqua 9H Self Healing to
              gwarancja trwałości i spektakularnych efektów.
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
              odpryskami zalecamy połączenie powłoki ceramicznej z{" "}
              <Link href="/blog/folia-ppf-opole">folią PPF</Link> na elementach
              szczególnie narażonych (maska, zderzak, lusterka).
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
