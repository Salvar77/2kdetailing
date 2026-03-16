import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";
import wnetrzeImg from "../../assets/images/wlasciciel-2k-auto-detailing-detailing-wnetrza-opole.webp";

export const meta = {
  title: "Detailing Wnętrza",
  hero: wnetrzeImg,
  heroAltText:
    "Precyzyjne pędzelkowanie i odświeżanie detali wewnątrz kabiny pasażerskiej",
  lead: "Chirurgicznie precyzyjne czyszczenie kabiny. Pędzelkujemy detale, pielęgnujemy plastiki i uwalniamy całe auto od osadzonego w nawiewach kurzu.",
  slug: "detailing-wnetrza",
  faq: [
    {
      question: "Jak często robić detailing wnętrza?",
      answer:
        "Zalecamy profesjonalny detailing wnętrza przynajmniej raz w roku. Regularne czyszczenie zapobiega trwałemu zabrudzeniu tkanin, odświeża wygląd kabiny i eliminuje alergeny. W przypadku intensywnego użytkowania (taksówki, floty, rodziny z dziećmi, zwierzęta) – co 6 miesięcy.",
    },
    {
      question: "Ile czasu trwa detailing wnętrza?",
      answer:
        "Czas usługi zależy od wielkości samochodu i stopnia zabrudzenia. Standardowy detailing wnętrza (odkurzanie, pranie tapicerki, czyszczenie plastików, szyby, impregnacja) zajmuje od 3 do 6 godzin. Pełny pakiet z ozonowaniem i dogłębnym czyszczeniem wszystkich elementów może zająć cały dzień.",
    },
    {
      question: "Czy detailing wnętrza usuwa zapach dymu papierosowego?",
      answer:
        "Tak, ale wymaga to połączenia kilku metod. Pranie ekstrakcyjne usuwa osadzony dym z tapicerki, a ozonowanie neutralizuje cząsteczki zapachowe w szczelinach, wentylacji i materiałach. W przypadku bardzo intensywnego, długotrwałego dymu, może być konieczne powtórzenie zabiegu.",
    },
    {
      question: "Jak przygotować auto do detailingu wnętrza?",
      answer:
        "Wystarczy opróżnić samochód z rzeczy osobistych – dokumentów, ubrań, zabawek, ładowarek, bagażu. Nie musisz go wcześniej myć ani odkurzać. Cały proces przygotowania wykonujemy w naszym studio.",
    },
    {
      question: "Czym różni się detailing wnętrza od auto detailingu?",
      answer:
        "Detailing wnętrza koncentruje się wyłącznie na kabinie pasażerskiej – tapicerce, plastikach, szybach, bagażniku. Auto detailing to usługa kompleksowa, która obejmuje zarówno wnętrze, jak i zewnętrze pojazdu – mycie, dekontaminację, korektę lakieru i zabezpieczenie powłoką ceramiczną. To dwa różne zakresy – jeden skupiony, drugi totalny.",
    },
  ],
};

export default function DetailingWnetrzaPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Detailing wnętrza – sterylne i pachnące nowością auto</h2>
          <p>
            <Link href="/blog/detailing-wnetrza-opole">Detailing wnętrza</Link>{" "}
            to nasza najbardziej drobiazgowa usługa. Nie ograniczamy się do
            powierzchownego przetarcia deski rozdzielczej. Wchodzimy w każdą
            szczelinę, czyścimy kratki nawiewów, pędzelkujemy przyciski i
            pierzemy tapicerkę tak, by Twój samochód odzyskał klimat "prosto z
            salonu". W 2K Auto Detailing Opole wiemy, że to we wnętrzu spędzasz
            najwięcej czasu, dlatego dbamy o nie z chirurgiczną precyzją.
          </p>

          <h2 className={classes.subtitle}>
            Gruntowne odświeżenie kabiny – więcej niż zwykłe sprzątanie
          </h2>

          <p className={classes.description}>
            Profesjonalny detailing kabiny usuwa nie tylko widoczny brud, ale
            przede wszystkim miliony bakterii i alergenów skrywających się we
            włóknach. Wykorzystujemy bezpieczną chemię pH-neutralną oraz{" "}
            <Link href="/blog/pranie-tapicerki-opole">pranie ekstrakcyjne</Link>
            , które wyciąga zanieczyszczenia z samej głębi foteli. To inwestycja
            w Twoje zdrowie i przyjemność z każdego przejechanego kilometra.
          </p>

          <p className={classes.description}>
            <strong>
              Przywracamy matowe, fabryczne wykończenie wszystkim plastikom i
              skórom.
            </strong>{" "}
            Unikamy tłustych "nabłyszczaczy", które przyciągają kurz. Zamiast
            tego stosujemy wysokiej klasy dressingi antystatyczne z filtrami UV.
            Jeśli Twoje fotele wymagają specjalnej troski, jak np.{" "}
            <Link href="/blog/renowacja-skor-opole">
              naprawa przetarć na skórze
            </Link>
            , wykonamy ją tak, że zapomnisz o dawnych uszkodzeniach. Nasz{" "}
            <Link href="/blog/auto-detailing-opole">auto detailing</Link> w
            Opolu to gwarancja najwyższego standardu czystości.
          </p>

          <h3>Co obejmuje nasz pełny pakiet detailingu wnętrza?</h3>
          <ul>
            <li>
              <strong>Pędzelkowanie i czyszczenie detali:</strong> Każdy
              przycisk, nawiew i szczelina zostają wyczyszczone przy użyciu
              delikatnych pędzelków i sprężonego powietrza.
            </li>
            <li>
              <strong>Pranie ekstrakcyjne materiałów:</strong> Fotele, podłoga,
              bagażnik i dywaniki przechodzą proces dogłębnego płukania. Usuwamy
              plamy po kawie, jedzeniu i ślady codziennego użytkowania.
            </li>
            <li>
              <strong>Czyszczenie i matowe zabezpieczenie tworzyw:</strong>{" "}
              Wszystkie plastiki zostają odtłuszczone i zabezpieczone przed
              blaknięciem od słońca. Wnętrze odzyskuje głęboki, fabryczny kolor
              bez efektu świecenia się.
            </li>
            <li>
              <strong>Mycie szyb o wysokiej przejrzystości:</strong> Czyścimy
              szyby dwuetapowo, eliminując tłuste osady i smugi, które
              utrudniają jazdę pod słońce lub nocą.
            </li>
            <li>
              <strong>Neutralizacja zapachów i ozonowanie:</strong> Nie
              maskujemy zapachów – my je usuwamy. Ozonowanie zabija źródła woni
              dymu papierosowego, wilgoci czy zwierząt.
            </li>
            <li>
              <strong>Impregnacja krawędzi i tkanin:</strong> Na życzenie
              zabezpieczamy tapicerkę chroniąc ją przed szybkim przemoczeniem i
              ponownym wnikaniem zabrudzeń.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src={wnetrzeImg}
            alt="Perfekcyjnie wyczyszczone wnętrze auta po usłudze detailingu w 2K Auto Detailing Opole"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: DLACZEGO WARTO */}
      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>Dlaczego nasze studio to najlepszy adres dla Twojego auta?</h2>
          <p>
            Detailing wnętrza to dla nas misja przywracania fabrycznego stanu.
            Nie uznajemy półśrodków – albo coś jest wyczyszczone idealnie, albo
            wcale.
          </p>
          <ul>
            <li>
              <strong>Topowe marki w rękach pasjonatów:</strong> Pracujemy na
              chemii Koch-Chemie i ADBL. To środki, które są bezlitosne dla
              brudu, ale w 100% bezpieczne dla materiałów w Twoim aucie.
            </li>
            <li>
              <strong>Lata praktyki w trudnych przypadkach:</strong>{" "}
              Odnawialiśmy wnętrza po zalaniach, zapuszczone auta firmowe oraz
              luksusowe klasyki. Żadne zabrudzenie nas nie zaskoczy.
            </li>
            <li>
              <strong>Zdrowie przede wszystkim:</strong> Nasze metody usuwają
              alergeny, które są zmorą osób uczulonych na roztocza. Czysta
              klimatyzacja i tapicerka to lepsza jakość powietrza w aucie.
            </li>
            <li>
              <strong>Dbałość o każdy centymetr kwadratowy:</strong> Zaglądamy
              tam, gdzie inni nie zaglądają – za pasy bezpieczeństwa, pod szyny
              foteli, we wnęki kieszeni drzwiowych.
            </li>
            <li>
              <strong>Efekt trwalszy niż na myjni:</strong> Dzięki
              profesjonalnemu zabezpieczeniu plastik nie "siwieje", a materiał
              wolniej chłonie brud. Twoje auto będzie cieszyć oko przez wiele
              miesięcy.
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

          <h3>Detailing wnętrza a pranie tapicerki – jaka jest różnica?</h3>
          <div>
            <p className={classes.contentSection__textP}>
              <strong>Pranie tapicerki</strong> skupia się głównie na
              czyszczeniu foteli, kanapy i dywaników. To usługa punktowa,
              idealna, gdy tapicerka jest zabrudzona, ale reszta wnętrza jest w
              dobrym stanie.
            </p>
            <p className={classes.contentSection__textP}>
              <strong>Detailing wnętrza</strong> to usługa kompleksowa – oprócz
              prania tapicerki obejmuje czyszczenie kokpitu, konsoli, boczków,
              szyb, podsufitki, bagażnika, a także ozonowanie i impregnację. To
              pełna regeneracja kabiny.
            </p>
            <p className={classes.contentSection__textP}>
              <strong>Którą usługę wybrać?</strong> Jeśli zależy Ci na
              odświeżeniu całego wnętrza – wybierz detailing. Jeśli tylko fotele
              wymagają czyszczenia – wystarczy pranie tapicerki. W 2K Auto
              Detailing chętnie doradzimy optymalne rozwiązanie.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src={wnetrzeImg}
            alt="Specjalista 2K Auto Detailing podczas czyszczenia kokpitu i elementów plastikowych"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: CTA */}
      <section className={classes.callToActionSection}>
        <h2>Zobacz metamorfozy – detailing wnętrza w praktyce</h2>
        <p>
          Przekonaj się, jak dużą różnicę może zrobić profesjonalny detailing
          wnętrza. W naszej galerii znajdziesz zdjęcia &bdquo;przed i po&rdquo;
          zrealizowanych projektów.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Galeria detailing wnętrza
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ */}
      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o detailing wnętrza</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące czyszczenia i pielęgnacji wnętrza samochodu?
          Sprawdź odpowiedzi na najczęstsze wątpliwości.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak często robić detailing wnętrza?
            </summary>
            <p className={classes.faqAnswer}>
              Zalecamy profesjonalny detailing wnętrza{" "}
              <strong>przynajmniej raz w roku</strong>. Regularne czyszczenie
              zapobiega trwałemu zabrudzeniu tkanin, odświeża wygląd kabiny i
              eliminuje alergeny. W przypadku intensywnego użytkowania
              (taksówki, floty, rodziny z dziećmi, zwierzęta) – co 6 miesięcy.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Ile czasu trwa detailing wnętrza?
            </summary>
            <p className={classes.faqAnswer}>
              Czas usługi zależy od wielkości samochodu i stopnia zabrudzenia.
              Standardowy detailing wnętrza (odkurzanie, pranie tapicerki,
              czyszczenie plastików, szyby, impregnacja) zajmuje od 3 do 6
              godzin. Pełny pakiet z ozonowaniem i dogłębnym czyszczeniem
              wszystkich elementów może zająć cały dzień.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy detailing wnętrza usuwa zapach dymu papierosowego?
            </summary>
            <p className={classes.faqAnswer}>
              Tak, ale wymaga to połączenia kilku metod. Pranie ekstrakcyjne
              usuwa osadzony dym z tapicerki, a <strong>ozonowanie</strong>{" "}
              neutralizuje cząsteczki zapachowe w szczelinach, wentylacji i
              materiałach. W przypadku bardzo intensywnego, długotrwałego dymu,
              może być konieczne powtórzenie zabiegu.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak przygotować auto do detailingu wnętrza?
            </summary>
            <p className={classes.faqAnswer}>
              Wystarczy opróżnić samochód z rzeczy osobistych – dokumentów,
              ubrań, zabawek, ładowarek, bagażu. Nie musisz go wcześniej myć ani
              odkurzać. Cały proces przygotowania wykonujemy w naszym studio.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym różni się detailing wnętrza od auto detailingu?
            </summary>
            <p className={classes.faqAnswer}>
              <strong>Detailing wnętrza</strong> koncentruje się wyłącznie na
              kabinie pasażerskiej – tapicerce, plastikach, szybach, bagażniku.
              <strong> Auto detailing</strong> to usługa kompleksowa, która
              obejmuje zarówno wnętrze, jak i zewnętrze pojazdu – mycie,
              dekontaminację, korektę lakieru i zabezpieczenie powłoką
              ceramiczną. To dwa różne zakresy – jeden skupiony, drugi totalny.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
