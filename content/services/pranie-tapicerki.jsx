import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Pranie Tapicerki",
  hero: "/2k-logo-white-czarne-tlo.png",
  heroAltText:
    "Dogłębne pranie ekstrakcyjne materiałowych foteli w samochodzie",
  lead: "Głęboko skuteczna metoda ekstrakcyjna dla materiałowych wnętrz. Trwale neutralizujemy ciężkie plamy, osadzone alergeny i przesiąknięte zapachy.",
  slug: "pranie-tapicerki",
  faq: [
    {
      question: "Czym różni się pranie ekstrakcyjne od zwykłego czyszczenia?",
      answer:
        "Zwykłe czyszczenie (np. szamponem i szczotką) usuwa jedynie powierzchniowe zabrudzenia i często pozostawia resztki detergentów we włóknach. Pranie ekstrakcyjne wtłacza roztwór czyszczący w głąb tkaniny, rozpuszcza brud, a następnie natychmiast go odsysa. To jedyna metoda, która usuwa zabrudzenia z całej głębokości tapicerki, eliminuje alergeny i nie pozostawia osadów.",
    },
    {
      question: "Jak długo schnie tapicerka po praniu?",
      answer:
        "Dzięki profesjonalnym maszynom ekstrakcyjnym tapicerka jest odsysana z nadmiaru wilgoci. W zależności od rodzaju tkaniny, wentylacji i warunków atmosferycznych, czas schnięcia wynosi od 2 do 6 godzin. Zimą lub przy wysokiej wilgotności może to potrwać nieco dłużej. Zawsze zalecamy pozostawienie auta na minimum 2-3 godziny po zabiegu.",
    },
    {
      question: "Czy pranie tapicerki usuwa nieprzyjemne zapachy?",
      answer:
        "Pranie ekstrakcyjne usuwa większość zapachów, ponieważ eliminuje ich źródło – bakterie i zanieczyszczenia we włóknach. W przypadku intensywnych, długotrwałych zapachów (np. dym papierosowy, zapach zwierząt, pleśń) zalecamy dodatkowe ozonowanie wnętrza. Ozon wnika w szczeliny i materiał, całkowicie neutralizując nawet bardzo uporczywe wonie.",
    },
    {
      question: "Czy impregnacja jest obowiązkowa?",
      answer:
        "Impregnacja nie jest obowiązkowa, ale bardzo zalecana. Tworzy warstwę ochronną, która zapobiega wnikaniu brudu i płynów w głąb tkaniny. Dzięki temu tapicerka dłużej pozostaje czysta, a rozlane płyny można łatwo zebrać, zanim powstanie trudna do usunięcia plama. To inwestycja, która zwraca się przy kolejnych czyszczeniach.",
    },
    {
      question: "Jak przygotować samochód do prania tapicerki?",
      answer:
        "Wystarczy, że opróżnisz samochód z rzeczy osobistych – dokumentów, ubrań, zabawek, ładowarek itp. Nie musisz go wcześniej myć ani odkurzać. Cały proces przygotowania wnętrza wykonujemy w naszym studio. Jeśli masz trudne, stare plamy – koniecznie wskaż je nam przed rozpoczęciem usługi.",
    },
  ],
};

export default function PranieTapicerkiPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>
            Dogłębne pranie tapicerki – przywróć wnętrzu sterylną czystość
          </h2>
          <p>
            <Link href="/blog/pranie-tapicerki-opole">
              Czyszczenie wnętrza samochodu
            </Link>{" "}
            to w naszym wydaniu coś więcej niż odkurzanie. To walka z
            drobnoustrojami, roztoczami i trudnymi plamami, które z czasem
            wgryzają się w strukturę materiału. W 2K Auto Detailing Opole
            przywracamy świeżość każdemu zakamarkowi kabiny, abyś Ty i Twoi
            pasażerowie mogli podróżować w higienicznych i komfortowych
            warunkach.
          </p>

          {/* ✅ SEKCJA 1: H2 ZGODNE Z OPISEM SEO */}
          <h2 className={classes.subtitle}>
            Metoda ekstrakcyjna – jedyny sposób na brud ukryty głęboko we
            włóknach
          </h2>

          <p className={classes.description}>
            Stosujemy <strong>profesjonalne pranie ekstrakcyjne</strong>, które
            polega na dogłębnym płukaniu tkaniny pod wysokim ciśnieniem. W
            przeciwieństwie do domowych sposobów, odsysamy brud wraz z wilgocią,
            nie pozwalając mu osadzić się z powrotem na gąbce fotela. To
            gwarancja usunięcia nie tylko plam, ale i nieprzyjemnych zapachów,
            które kumulują się we wnętrzu latami.
          </p>

          <p className={classes.description}>
            Nasz proces{" "}
            <Link href="/blog/detailing-wnetrza-opole">detailingu wnętrza</Link>{" "}
            obejmuje również precyzyjne czyszczenie podsufitki, pasów
            bezpieczeństwa oraz wszystkich elementów z tworzyw sztucznych i
            skóry. Korzystamy wyłącznie z pH-neutralnych, bezpiecznych środków,
            które nie powodują odbarwień i są w pełni bezpieczne dla dzieci oraz
            alergików.
          </p>

          <h3>Kompleksowy pakiet czyszczenia wnętrza:</h3>
          <ul>
            <li>
              <strong>Wieloetapowe odkurzanie przemysłowe:</strong> Wyciągamy
              piasek i kurz z najgłębszych warstw wykładziny i szczelin między
              fotelami, gdzie tradycyjne odkurzacze zawodzą.
            </li>
            <li>
              <strong>Pranie foteli, dywaników i boczków:</strong> Usuwamy
              zacieki, plamy z napojów, jedzenia oraz zmatowienia materiału.
              Przywracamy kolorom ich pierwotną intensywność.
            </li>
            <li>
              <strong>Pielęgnacja tapicerki skórzanej:</strong> Skóry czyścimy
              dedykowanymi szczoteczkami, a następnie zabezpieczamy balsamami,
              które zapobiegają ich pękaniu i wycieraniu. Jeśli Twoja skóra
              wymaga renowacji – sprawdź naszą ofertę{" "}
              <Link href="/blog/renowacja-skor-opole">regeneracji skór</Link>.
            </li>
            <li>
              <strong>Dezynfekcja ozonem (O3):</strong> To nie opcja, to
              standard. Ozonowanie skutecznie zabija bakterie, wirusy i
              zarodniki grzybów w układzie klimatyzacji i tapicerce, zostawiając
              zapach sterylnej czystości.
            </li>
            <li>
              <strong>Ochrona hydrofobowa tkanin:</strong> Na życzenie
              impregnujemy fotele, co sprawia, że wylana kawa czy woda nie
              wsiąkają w materiał, lecz tworzą kropelki łatwe do zebrania suchą
              szmatką.
            </li>
            <li>
              <strong>Krystaliczna czystość szyb:</strong> Myjemy szyby od
              wewnątrz metodą dwuetapową, zapewniając idealną widoczność i brak
              refleksów podczas jazdy w nocy.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Profesjonalne pranie i czyszczenie wnętrza samochodu w 2K Auto Detailing Opole"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: DLACZEGO WARTO – 2K AUTO DETAILING */}
      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>Dlaczego nasze pranie tapicerki to najlepszy wybór w Opolu?</h2>
          <p>
            Dla nas liczy się nie tylko czysty fotel, ale cały proces, który
            sprawia, że wnętrze auta znów cieszy oko. Podchodzimy do Twojego
            samochodu z dbałością o każdy detal, od deski rozdzielczej po wnękę
            na koło zapasowe.
          </p>
          <ul>
            <li>
              <strong>Park maszynowy klasy PRO:</strong> Korzystamy z odkurzaczy
              piorących o gigantycznej sile ssania. Dzięki temu tapicerka po
              praniu jest jedynie wilgotna i schnie błyskawicznie – nawet w
              kilka godzin.
            </li>
            <li>
              <strong>Wiedza poparta praktyką:</strong> Ponad 10 lat w{" "}
              <Link href="/blog/auto-detailing-opole">auto detailingu</Link>{" "}
              nauczyło nas rozróżniać setki materiałów. Wiemy, jakiej chemii
              użyć do Alcantary, a jakiej do klasycznego weluru.
            </li>
            <li>
              <strong>Zadbamy o Twoje zdrowie:</strong> Usuwamy roztocza i
              bakterie, które są główną przyczyną alergii u kierowców i
              pasażerów. Wnętrze po naszej wizycie jest bezpieczne nawet dla
              niemowląt.
            </li>
            <li>
              <strong>Bezpieczeństwo dla elementów auta:</strong> Dobieramy
              temperaturę i ciśnienie pracy tak, aby nie przemoczyć podsufitki
              (co grozi jej odklejeniem) ani nie uszkodzić elektroniki ukrytej
              pod fotelami.
            </li>
            <li>
              <strong>Uczciwa ocena i wycena:</strong> Nie obiecujemy cudów przy
              20-letnich plamach, ale zawsze robimy wszystko, co możliwe, aby
              efekt był maksymalnie zadowalający. Jasne zasady od pierwszego
              kontaktu.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Serdecznie polecam, dokładne czyszczenie wraz z myciem.
              Najlepszy detailing w Opolu!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Dawid Meier</cite>
            </footer>
          </blockquote>

          <h3>Impregnacja – sekret długotrwałej czystości</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Jednym z kluczowych elementów naszej usługi jest{" "}
              <strong>impregnacja hydrofobowa</strong>. Po dokładnym
              wyczyszczeniu tapicerki nakładamy specjalny preparat, który tworzy
              niewidzialną barierę ochronną na włóknach tkaniny. Dzięki temu:
            </p>
            <ul className={classes.nestedList}>
              <li>
                rozlane płyny zbierają się w kropelki i nie wsiąkają w
                tapicerkę,
              </li>
              <li>brud i kurz mniej przylegają do powierzchni,</li>
              <li>kolejne czyszczenie jest szybsze i łatwiejsze,</li>
              <li>tapicerka dłużej zachowuje świeży wygląd.</li>
            </ul>
            <p className={classes.contentSection__textP}>
              Impregnację polecamy szczególnie rodzinom z małymi dziećmi oraz
              osobom, które często przewożą zwierzęta.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Specjalista 2K Auto Detailing podczas impregnacji tapicerki samochodowej w Opolu"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: CTA */}
      <section className={classes.callToActionSection}>
        <h2>Zobacz nasze realizacje – metamorfozy wnętrz</h2>
        <p>
          Przekonaj się, jak dużą różnicę może zrobić profesjonalne pranie
          tapicerki i detailing wnętrza. W naszej galerii znajdziesz zdjęcia
          &bdquo;przed i po&rdquo; zrealizowanych projektów w 2K Auto Detailing
          Opole.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Przejdź do galerii detailing wnętrza
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ – DOPASOWANA DO OFERTY */}
      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o pranie tapicerki</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące prania tapicerki i detailingu wnętrza? Poniżej
          znajdziesz odpowiedzi na najczęstsze wątpliwości naszych klientów.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym różni się pranie ekstrakcyjne od zwykłego czyszczenia?
            </summary>
            <p className={classes.faqAnswer}>
              Zwykłe czyszczenie (np. szamponem i szczotką) usuwa jedynie
              powierzchniowe zabrudzenia i często pozostawia resztki detergentów
              we włóknach.
              <strong> Pranie ekstrakcyjne</strong> wtłacza roztwór czyszczący w
              głąb tkaniny, rozpuszcza brud, a następnie natychmiast go odsysa.
              To jedyna metoda, która usuwa zabrudzenia z całej głębokości
              tapicerki, eliminuje alergeny i nie pozostawia osadów.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak długo schnie tapicerka po praniu?
            </summary>
            <p className={classes.faqAnswer}>
              Dzięki profesjonalnym maszynom ekstrakcyjnym tapicerka jest
              odsysana z nadmiaru wilgoci. W zależności od rodzaju tkaniny,
              wentylacji i warunków atmosferycznych, czas schnięcia wynosi od 2
              do 6 godzin. Zimą lub przy wysokiej wilgotności może to potrwać
              nieco dłużej. Zawsze zalecamy pozostawienie auta na minimum 2-3
              godziny po zabiegu.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy pranie tapicerki usuwa nieprzyjemne zapachy?
            </summary>
            <p className={classes.faqAnswer}>
              Pranie ekstrakcyjne usuwa większość zapachów, ponieważ eliminuje
              ich źródło – bakterie i zanieczyszczenia we włóknach. W przypadku
              intensywnych, długotrwałych zapachów (np. dym papierosowy, zapach
              zwierząt, pleśń) zalecamy dodatkowe{" "}
              <strong>ozonowanie wnętrza</strong>. Ozon wnika w szczeliny i
              materiał, całkowicie neutralizując nawet bardzo uporczywe wonie.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy impregnacja jest obowiązkowa?
            </summary>
            <p className={classes.faqAnswer}>
              Impregnacja nie jest obowiązkowa, ale{" "}
              <strong>bardzo zalecana</strong>. Tworzy warstwę ochronną, która
              zapobiega wnikaniu brudu i płynów w głąb tkaniny. Dzięki temu
              tapicerka dłużej pozostaje czysta, a rozlane płyny można łatwo
              zebrać, zanim powstanie trudna do usunięcia plama. To inwestycja,
              która zwraca się przy kolejnych czyszczeniach.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak przygotować samochód do prania tapicerki?
            </summary>
            <p className={classes.faqAnswer}>
              Wystarczy, że opróżnisz samochód z rzeczy osobistych – dokumentów,
              ubrań, zabawek, ładowarek itp. Nie musisz go wcześniej myć ani
              odkurzać. Cały proces przygotowania wnętrza wykonujemy w naszym
              studio. Jeśli masz trudne, stare plamy – koniecznie wskaż je nam
              przed rozpoczęciem usługi.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
