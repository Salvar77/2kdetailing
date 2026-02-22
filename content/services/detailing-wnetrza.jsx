import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Detailing wnętrza w Opolu – kompleksowe czyszczenie auta",
  hero: "/2k-logo-black-biale-tlo.png",
  heroAltText:
    "Profesjonalny detailing wnętrza samochodu w 2K Auto Detailing Opole",
  lead: "Oferujemy kompleksowy detailing wnętrza w Opolu. Dokładne czyszczenie tapicerki, plastików, szczelin i trudno dostępnych miejsc. Usuwamy kurz, alergeny i nieprzyjemne zapachy. Przywracamy świeżość, higienę i estetyczny wygląd Twojego auta.",
  slug: "detailing-wnetrza",
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
          <h2>Detailing wnętrza – kompleksowa pielęgnacja kabiny</h2>
          <p>
            <Link href="/blog/detailing-wnetrza-opole">Detailing wnętrza</Link>{" "}
            to kompleksowa usługa, która obejmuje systematyczne czyszczenie
            każdego elementu kabiny. W 2K Auto Detailing Opole zajmujemy się
            zarówno trudnymi plamami, jak i drobnoustrojami. Używamy
            profesjonalnych narzędzi, w tym rewolucyjnego ekstrakcyjnego{" "}
            <Link href="/blog/pranie-tapicerki-opole">prania tapicerki</Link>,
            które ożywia kolory materiału i głęboko eliminuje brud z siedzeń
            oraz dywaników.
          </p>

          {/* ✅ H2 Z INSTRUKCJI */}
          <h2 className={classes.subtitle}>
            Kompleksowe czyszczenie i odświeżenie wnętrza auta
          </h2>

          <p className={classes.description}>
            Detailing wnętrza to proces, który usuwa zabrudzenia, kurz, alergeny
            i nieprzyjemne zapachy z każdego zakamarka Twojego samochodu.
            Działamy kompleksowo – od podsufitki, przez fotele i kanapę, po
            dywaniki, bagażnik i schowki. Pełnowymiarowy{" "}
            <Link href="/blog/auto-detailing-opole">auto detailing</Link>{" "}
            wnętrza nie tylko polepsza samopoczucie podczas podróży, ale przede
            wszystkim podnosi ogólną wartość rynkową Twojego pojazdu.
          </p>

          <p className={classes.description}>
            <strong>
              Usługa zapewnia maksymalny komfort jazdy, wydłuża żywotność
              materiałów.
            </strong>{" "}
            Zależy nam na perfekcji. W przypadkach wymagających szczególnej
            uwagi, kiedy na fotelach widoczne są pęknięcia czy wyblaknięcia
            materiału, wdrażamy bezpieczną{" "}
            <Link href="/blog/renowacja-skor-opole">renowację skór</Link>,
            zachowując oryginalną fakturę. Detailing wnętrza to precyzja i
            długotrwały efekt wizualny w Opolu.
          </p>

          <h3>Co dokładnie wchodzi w skład detailingu wnętrza?</h3>
          <ul>
            <li>
              <strong>Dogłębne odkurzanie i czyszczenie wstępne:</strong>{" "}
              Usuwamy kurz, piasek i luźne zanieczyszczenia z foteli, dywaników,
              bagażnika, schowków i wszystkich trudno dostępnych miejsc.
            </li>
            <li>
              <strong>Czyszczenie tapicerki materiałowej:</strong> Pranie
              ekstrakcyjne foteli, kanapy, podsufitki i boczków. Usuwamy plamy,
              alergeny i osadzony brud z włókien tkanin.
            </li>
            <li>
              <strong>Czyszczenie i konserwacja elementów plastikowych:</strong>{" "}
              Kokpit, konsola centralna, panele drzwiowe – wszystkie plastiki są
              czyszczone, odświeżane i zabezpieczone preparatem antystatycznym,
              który ogranicza osadzanie się kurzu.
            </li>
            <li>
              <strong>Czyszczenie szyb i luster:</strong> Wszystkie szyby i
              lusterka są myte do idealnej przejrzystości, bez smug i zacieków.
            </li>
            <li>
              <strong>Ozonowanie wnętrza:</strong> Dezynfekcja i całkowita
              eliminacja nieprzyjemnych zapachów – dymu papierosowego, wilgoci,
              potu, zwierząt. Ozon usuwa również bakterie, wirusy i grzyby.
            </li>
            <li>
              <strong>Impregnacja tapicerki i zabezpieczenie:</strong> Nakładamy
              warstwę ochronną, która ułatwia utrzymanie czystości i chroni
              przed ponownym wnikaniem brudu.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-black-biale-tlo.png"
            alt="Kompleksowe czyszczenie wnętrza samochodu w 2K Auto Detailing Opole"
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
          <h2>Dlaczego warto zaufać 2K Auto Detailing?</h2>
          <p>
            Czyste i zadbane wnętrze samochodu to nie tylko estetyka – to
            zdrowie, komfort i wyższa wartość pojazdu. W 2K Auto Detailing
            stawiamy na precyzję, sprawdzone metody i pełną transparentność.
          </p>
          <ul>
            <li>
              <strong>Specjalistyczny sprzęt i kosmetyki:</strong> Używamy
              profesjonalnych maszyn ekstrakcyjnych, odkurzaczy piorących oraz
              środków czyszczących renomowanych marek (Koch-Chemie, ADBL). Są
              skuteczne, a jednocześnie bezpieczne dla tkanin, skór i zdrowia
              pasażerów.
            </li>
            <li>
              <strong>Doświadczenie i precyzja:</strong> Mamy wieloletnią
              praktykę w detailingu wnętrz. Wiemy, jak dobrać odpowiednią metodę
              do rodzaju tapicerki i stopnia zabrudzenia.
            </li>
            <li>
              <strong>Dbałość o detale:</strong> Czyścimy pasy bezpieczeństwa,
              zagłówki, schowki, wentylację, a nawet trudno dostępne szczeliny w
              fotelach. Diabeł tkwi w szczegółach.
            </li>
            <li>
              <strong>Bezpieczeństwo i higiena:</strong> Ozonowanie eliminuje
              alergeny, bakterie i wirusy. Twoje wnętrze jest nie tylko czyste,
              ale także sterylne.
            </li>
            <li>
              <strong>Transparentność:</strong> Przed rozpoczęciem usługi
              dokładnie oceniamy stan wnętrza, informujemy o możliwych efektach
              i ustalamy zakres prac. Bez ukrytych kosztów.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Oddawałem auto do detailingu wnętrza pierwszy raz i jestem
              zachwycony. Wszystkie plamy zniknęły, tapicerka pachnie
              świeżością, a plastiki wyglądają jak nowe. Profesjonalnie,
              solidnie i w terminie. Polecam 2K Auto Detailing!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Tomasz Wierzbicki, Opole</cite>
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
            src="/2k-logo-black-biale-tlo.png"
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
