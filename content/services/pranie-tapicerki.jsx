import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Pranie tapicerki samochodowej – 2K Auto Detailing Opole",
  hero: "/2k-logo-white-czarne-tlo.png",
  heroAltText:
    "Profesjonalne pranie tapicerki samochodowej metodą ekstrakcyjną w 2K Auto Detailing Opole",
  lead: "Oferujemy profesjonalne pranie tapicerki samochodowej w Opolu. Ekstrakcyjne czyszczenie foteli, kanap i dywaników usuwa głęboko osadzone zabrudzenia, plamy, alergeny i nieprzyjemne zapachy. Przywracamy świeżość, higienę i estetyczny wygląd wnętrza Twojego auta.",
  slug: "pranie-tapicerki",
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
            Pranie tapicerki samochodowej – świeżość i higiena na najwyższym
            poziomie
          </h2>
          <p>
            <Link href="/blog/pranie-tapicerki-opole">
              Pranie tapicerki samochodowej
            </Link>{" "}
            to profesjonalna usługa, która usuwa głęboko osadzone zabrudzenia,
            plamy i alergeny z foteli, kanap, dywaników, podsufitki i innych
            elementów wnętrza samochodu. W 2K Auto Detailing Opole stosujemy
            wyłącznie sprawdzone metody i preparaty, które gwarantują
            skuteczność i bezpieczeństwo dla wszystkich rodzajów tkanin.
          </p>

          {/* ✅ SEKCJA 1: H2 ZGODNE Z OPISEM SEO */}
          <h2 className={classes.subtitle}>
            Ekstrakcyjne czyszczenie tapicerki i usuwanie zabrudzeń
          </h2>

          <p className={classes.description}>
            Dzięki dokładnemu <strong>czyszczeniu ekstrakcyjnemu</strong>{" "}
            tapicerka odzyskuje świeżość, higienę i estetyczny wygląd. Metoda
            polega na wtłaczaniu pod ciśnieniem roztworu czyszczącego w głąb
            tkaniny, a następnie natychmiastowym odsysaniu go wraz z
            rozpuszczonym brudem. To jedyny sposób, aby skutecznie usunąć
            zabrudzenia, które gromadzą się we włóknach przez lata użytkowania.
          </p>

          <p className={classes.description}>
            Nasza usługa obejmuje{" "}
            <strong>
              pełne przygotowanie wnętrza, czyszczenie trudno dostępnych miejsc
              i impregnację
            </strong>
            , co wydłuża żywotność materiałów i sprawia, że wnętrze auta
            pozostaje czyste na dłużej. Stosujemy profesjonalne środki
            renomowanych marek (Koch-Chemie, ADBL), które są bezpieczne dla
            tkanin, skór i plastików.
          </p>

          <h3>Co dokładnie wchodzi w skład naszej usługi?</h3>
          <ul>
            <li>
              <strong>Dogłębne odkurzanie i czyszczenie wstępne:</strong>{" "}
              Usuwamy kurz, piasek i wszelkie luźne zanieczyszczenia z każdego
              zakamarka wnętrza – spod siedzeń, między fotelami, z kieszeni i
              schowków.
            </li>
            <li>
              <strong>
                Pranie tapicerki materiałowej metodą ekstrakcyjną:
              </strong>
              Doczyszczamy fotele, kanapę, dywaniki, podsufitkę i boczki.
              Usuwamy nawet trudne plamy po kawie, coli, tłuszczu czy moczu
              zwierząt.
            </li>
            <li>
              <strong>Czyszczenie i impregnacja tapicerki skórzanej:</strong>{" "}
              Jeśli Twój samochód posiada elementy skórzane, zostaną one
              wyczyszczone, odżywione i zabezpieczone przed wysychaniem i
              pękaniem.
            </li>
            <li>
              <strong>Ozonowanie wnętrza:</strong> Dezynfekcja i całkowita
              eliminacja nieprzyjemnych zapachów – dymu papierosowego, wilgoci,
              potu, zwierząt. Ozon usuwa również bakterie, wirusy i grzyby.
            </li>
            <li>
              <strong>Impregnacja hydrofobowa:</strong> Zabezpieczamy tapicerkę
              przed ponownym wnikaniem brudu i płynów. Efekt &bdquo;wodnego
              liścia&rdquo; sprawia, że plamy nie wsiąkają, a codzienne
              użytkowanie staje się łatwiejsze.
            </li>
            <li>
              <strong>Czyszczenie szyb i luster:</strong> Wszystkie szyby i
              lusterka są dokładnie myte, aby zapewnić idealną przejrzystość bez
              smug.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Ekstrakcyjne pranie tapicerki samochodowej w 2K Auto Detailing Opole – usuwanie plam i zabrudzeń"
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
          <h2>Dlaczego warto wybrać 2K Auto Detailing do prania tapicerki?</h2>
          <p>
            Czyste i zadbane wnętrze samochodu to nie tylko estetyka, ale przede
            wszystkim zdrowie i komfort podróżowania. W 2K Auto Detailing
            stawiamy na najwyższą jakość usług, sprawdzone produkty i
            indywidualne podejście do każdego pojazdu.
          </p>
          <ul>
            <li>
              <strong>Specjalistyczny sprzęt i kosmetyki:</strong> Używamy
              profesjonalnych maszyn ekstrakcyjnych oraz środków czyszczących
              renomowanych marek (Koch-Chemie, ADBL), które są skuteczne, a
              jednocześnie bezpieczne dla tkanin, skór i zdrowia pasażerów.
            </li>
            <li>
              <strong>Doświadczenie i precyzja:</strong> Posiadamy wieloletnią
              praktykę w detailingu wnętrz. Wiemy, jak dobrać odpowiednią metodę
              i preparaty do rodzaju tkaniny, stopnia zabrudzenia i rodzaju
              plam.
            </li>
            <li>
              <strong>Kompleksowość usługi:</strong> Nie ograniczamy się tylko
              do prania foteli. Dbamy o każdy detal – czyszczenie pasów
              bezpieczeństwa, zagłówków, schowków, a także impregnację i
              ozonowanie.
            </li>
            <li>
              <strong>Transparentność i komunikacja:</strong> Przed
              przystąpieniem do pracy dokładnie oceniamy stan tapicerki,
              informujemy o możliwych efektach i ustalamy zakres prac. Nie mamy
              ukrytych kosztów.
            </li>
            <li>
              <strong>Gwarancja satysfakcji:</strong> Naszym celem jest Twoje
              pełne zadowolenie. Jeśli nie będziesz zadowolony z efektów –
              poprawimy usługę lub zwrócimy pieniądze.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Profesjonalne podejście do tematu. Tapicerka odświeżona,
              wygląda lepiej niż nowa. Plamy po kawie z przednich foteli
              zniknęły całkowicie, a wnętrze pachnie świeżością. Na pewno
              skorzystam ponownie. Polecam 2K Auto Detailing!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Krzysiek Miklaszewski, Opole</cite>
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
