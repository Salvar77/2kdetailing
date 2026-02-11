import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Przyciemnianie szyb w Opolu – komfort, styl i ochrona UV",
  hero: "/2k-logo-black-biale-tlo.png",
  heroAltText:
    "Profesjonalne przyciemnianie szyb samochodowych w 2K Auto Detailing Opole – montaż folii przeciwsłonecznej i ochronnej",
  lead: "Oferujemy profesjonalne przyciemnianie szyb w Opolu. Folia premium redukuje nagrzewanie wnętrza nawet o 60%, chroni przed promieniowaniem UV, zapewnia większą prywatność i nadaje autu elegancki, sportowy wygląd. Precyzyjny montaż bez pęcherzy i zagnieceń.",
  slug: "przyciemnianie-szyb",
};

export default function PrzyciemnianieSzybPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Przyciemnianie szyb – styl, komfort i ochrona w jednym</h2>
          <p>
            <Link href="/blog/przyciemnianie-szyb-opole">
              Przyciemnianie szyb
            </Link>{" "}
            to profesjonalna usługa, która łączy walory estetyczne z realnymi
            korzyściami użytkowymi. W 2K Auto Detailing Opole stosujemy
            wyłącznie wysokiej jakości folie premium, które nie tylko nadają
            samochodowi elegancki, sportowy charakter, ale przede wszystkim
            chronią Ciebie i wnętrze Twojego auta przed szkodliwym
            promieniowaniem UV oraz nadmiernym nagrzewaniem.
          </p>

          {/* ✅ H2 Z INSTRUKCJI – KOMFORT, STYL I OCHRONA WNĘTRZA AUTA */}
          <h2 className={classes.subtitle}>
            Komfort, styl i ochrona wnętrza auta
          </h2>

          <p className={classes.description}>
            Folia przyciemniająca to nie tylko modny dodatek. To przede
            wszystkim
            <strong> realna ochrona przed słońcem</strong>. Dzięki zaawansowanym
            technologiom produkcji, nowoczesne folie odbijają nawet do 99%
            promieniowania UV, chroniąc tapicerkę, skórę i elementy plastikowe
            przed blaknięciem, pękaniem i przedwczesnym starzeniem się.
          </p>

          <p className={classes.description}>
            <strong>
              Folia przyciemniająca obniża temperaturę wnętrza nawet o 60%
            </strong>
            , co docenisz szczególnie w upalne, letnie dni. Klimatyzacja pracuje
            wydajniej, szybciej osiągasz komfortową temperaturę, a zużycie
            paliwa spada. To ekologiczne i ekonomiczne rozwiązanie.
          </p>

          <p className={classes.description}>
            <strong>Większa prywatność i bezpieczeństwo</strong> – przyciemnione
            szyby utrudniają zajrzenie do wnętrza, chroniąc pozostawione w aucie
            przedmioty przed niepowołanym wzrokiem. Dodatkowo, folia zwiększa
            odporność szyby na stłuczenie, utrzymując odłamki w razie kolizji.
          </p>

          <h3>Jakie folie oferujemy w 2K Auto Detailing?</h3>
          <ul>
            <li>
              <strong>Folie przeciwsłoneczne (standard):</strong> Redukują
              nagrzewanie i promieniowanie UV, dostępne w różnych stopniach
              przyciemnienia (5%, 15%, 20%, 35%, 50%). Idealne do szyb bocznych
              i tylnej.
            </li>
            <li>
              <strong>Folie ceramiczne (premium):</strong> Zaawansowana
              technologia z nanocząsteczkami ceramicznymi. Jeszcze lepsza
              redukcja ciepła, brak interferencji z sygnałem GPS/GSM, neutralny
              odcień. Rekomendujemy na przednią szybę i do aut premium.
            </li>
            <li>
              <strong>Folie ochronne (anty-uv):</strong> Całkowicie
              przezroczyste, blokują 99% UV, nie zmieniają wyglądu szyby.
              Idealne do szyb przednich, gdzie przepisy zabraniają
              przyciemniania.
            </li>
            <li>
              <strong>Folie grafitowe i czarne:</strong> Klasyczny, głęboki
              odcień, doskonałe krycie i estetyka. Najpopularniejszy wybór
              naszych klientów.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-black-biale-tlo.png"
            alt="Profesjonalne przyciemnianie szyb samochodowych w 2K Auto Detailing Opole – montaż folii ceramicznej"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: PROCES MONTAŻU – 2K AUTO DETAILING */}
      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>Jak wygląda profesjonalny montaż folii w 2K Auto Detailing?</h2>
          <p>
            Przyciemnianie szyb to nie naklejanie folii na mokro i wyciskanie
            wody. To precyzyjny rzemieślniczy proces, który wymaga
            doświadczenia, cierpliwości i odpowiednich warunków. W 2K Auto
            Detailing pracujemy w czystym, bezpyłowym pomieszczeniu, z
            kontrolowaną temperaturą i wilgotnością.
          </p>
          <ul>
            <li>
              <strong>Dokładne mycie i przygotowanie szyb:</strong> Szyby są
              wielokrotnie myte, odtłuszczane i osuszane z użyciem dedykowanych
              preparatów. Nawet najmniejszy pyłek pod folią będzie widoczny –
              dlatego prace odbywają się w sterylnych warunkach.
            </li>
            <li>
              <strong>Precyzyjne wycinanie folii:</strong> Każda folia jest
              docinana ręcznie na sucho lub na mokro, z uwzględnieniem kształtu
              i krzywizny konkretnej szyby. Nie używamy noży na szybie – ryzyko
              zarysowania! Wszystkie cięcia wykonujemy na specjalnych matach.
            </li>
            <li>
              <strong>Aplikacja folii na mokro:</strong> Folia jest nakładana z
              użyciem roztworu wody i mydła, co pozwala na swobodne
              pozycjonowanie i usunięcie powietrza. Specjalnymi ściągaczkami
              wypychamy wodę i pęcherzyki, uzyskując idealnie gładką
              powierzchnię.
            </li>
            <li>
              <strong>Dociskanie i wykończenie krawędzi:</strong> Używamy
              profesjonalnych narzędzi do dociskania folii w trudno dostępnych
              miejscach. Krawędzie są dokładnie wygładzane, aby folia nie
              odklejała się z czasem.
            </li>
            <li>
              <strong>Kontrola jakości i czas schnięcia:</strong> Po aplikacji
              sprawdzamy każdą szybę pod światłem. Ewentualne niedoskonałości są
              natychmiast korygowane. Klient odbiera auto z informacją, że przez
              2-3 dni nie należy opuszczać szyb.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Przyciemniałem szyby w trzech autach, ale dopiero teraz
              trafiłem na prawdziwych profesjonalistów. Folia położona idealnie,
              zero pęcherzy, zero zagnieceń, krawędzie równe jak linijka. A
              efekt wizualny? Auto wygląda o klasę lepiej. Gorąco polecam 2K
              Auto Detailing!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Michał Szymański, Opole</cite>
            </footer>
          </blockquote>

          <h3>Czy przyciemnianie szyb jest legalne?</h3>
          <div>
            <p className={classes.contentSection__textP}>
              To jedno z najczęściej zadawanych pytań. W 2K Auto Detailing
              działamy <strong>w pełni zgodnie z polskim prawem</strong>.
              Oferujemy wyłącznie folie i stopnie przyciemnienia dopuszczone do
              ruchu drogowego:
            </p>
            <ul className={classes.nestedList}>
              <li>
                <strong>Szyby przednie (laminowane):</strong> Wymagana
                przepuszczalność minimum 75% światła. Stosujemy przezroczyste
                folie ochronne UV, które nie zmieniają wyglądu szyby.
              </li>
              <li>
                <strong>Szyby boczne przednie:</strong> Przepuszczalność minimum
                70%. Oferujemy delikatne przyciemnienie (35-50%), które mieści
                się w normach.
              </li>
              <li>
                <strong>Szyby boczne tylne i tylna:</strong> Brak ograniczeń –
                możesz wybrać dowolny stopień przyciemnienia, nawet 5%.
              </li>
            </ul>
            <p className={classes.contentSection__textP}>
              Przed montażem zawsze doradzamy, jakie parametry będą optymalne
              dla Twojego auta i zgodne z przepisami. Wystawiamy również
              certyfikat potwierdzający parametry zastosowanej folii.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-black-biale-tlo.png"
            alt="Efekt przyciemniania szyb w 2K Auto Detailing Opole – elegancki wygląd i ochrona wnętrza"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: 5 POWODÓW, DLA KTÓRYCH WARTO PRZYCIEMNIĆ SZYBY */}
      <section className={classes.benefitsSection}>
        <div className={classes.benefitsSection__content}>
          <h2>5 powodów, dla których warto przyciemnić szyby</h2>
          <div className={classes.benefitsGrid}>
            <div className={classes.benefitItem}>
              <div className={classes.benefitIcon}>☀️</div>
              <h4>Redukcja temperatury</h4>
              <p>
                Nawet o 60% niższa temperatura wnętrza w słoneczne dni.
                Klimatyzacja pracuje wydajniej, zużywasz mniej paliwa.
              </p>
            </div>
            <div className={classes.benefitItem}>
              <div className={classes.benefitIcon}>🛡️</div>
              <h4>Ochrona przed UV</h4>
              <p>
                99% blokady promieniowania UV. Tapicerka, skóra i plastiki nie
                blakną, nie pękają i dłużej zachowują świeży wygląd.
              </p>
            </div>
            <div className={classes.benefitItem}>
              <div className={classes.benefitIcon}>👁️</div>
              <h4>Większa prywatność</h4>
              <p>
                Ochrona przed ciekawskimi spojrzeniami. Wnętrze auta staje się
                Twoją prywatną przestrzenią.
              </p>
            </div>
            <div className={classes.benefitItem}>
              <div className={classes.benefitIcon}>⚡</div>
              <h4>Elegancki wygląd</h4>
              <p>
                Auto zyskuje sportowy, agresywny charakter. Nawet kilkuletnie
                modele wyglądają świeżo i nowocześnie.
              </p>
            </div>
            <div className={classes.benefitItem}>
              <div className={classes.benefitIcon}>🔄</div>
              <h4>Bezpieczeństwo</h4>
              <p>
                Folia zwiększa odporność szyby na stłuczenie. W razie kolizji
                odłamki pozostają na folii, nie raniąc pasażerów.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SEKCJA: RODZAJE FOLII – PORÓWNANIE */}
      <section className={classes.comparisonSection}>
        <div className={classes.comparisonSection__content}>
          <h2>Folia standardowa czy ceramiczna? Pomagamy wybrać</h2>
          <div className={classes.comparisonGrid}>
            <div className={classes.comparisonItem}>
              <h4>Folie standardowe (barwione)</h4>
              <ul>
                <li>✅ Dobra redukcja UV (ok. 95%)</li>
                <li>✅ Dobra redukcja ciepła</li>
                <li>✅ Szeroka gama odcieni</li>
                <li>❌ Mogą interferować z sygnałem GPS/GSM</li>
                <li>❌ Z czasem możliwe płowienie koloru</li>
              </ul>
              <p className={classes.priceTag}>
                Idealne do aut używanych, szyb bocznych i tylnej
              </p>
            </div>
            <div className={`${classes.comparisonItem} ${classes.highlighted}`}>
              <h4>Folie ceramiczne (premium)</h4>
              <ul>
                <li>✅ 99% redukcji UV</li>
                <li>✅ 60% redukcji ciepła</li>
                <li>✅ Neutralny odcień, nie zmienia koloru szyby</li>
                <li>✅ Brak interferencji z sygnałem</li>
                <li>✅ Odporne na zarysowania i płowienie</li>
                <li>✅ Dożywotnia gwarancja</li>
              </ul>
              <p className={classes.priceTag}>
                Rekomendacja 2K Auto Detailing – auta nowe i premium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SEKCJA: CTA */}
      <section className={classes.callToActionSection}>
        <h2>Umów się na przyciemnianie szyb</h2>
        <p>
          Zadbaj o komfort, styl i ochronę swojego auta. Wybierz profesjonalny
          montaż folii w 2K Auto Detailing Opole. Doradzimy, dobierzemy i
          zamontujemy folię idealnie dopasowaną do Twoich potrzeb.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/kontakt" className={classes.buttonPrimary}>
            Skontaktuj się z nami
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ */}
      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o przyciemnianie szyb</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące folii i montażu? Sprawdź odpowiedzi na
          najczęstsze wątpliwości naszych klientów.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Ile kosztuje przyciemnianie szyb?
            </summary>
            <p className={classes.faqAnswer}>
              Cena zależy od rodzaju folii, ilości szyb oraz modelu samochodu.
              Przyciemnienie 4 szyb bocznych + tylnej to koszt od
              <strong> 600 do 1200 zł</strong> dla folii standardowych i
              <strong> od 1000 do 1800 zł</strong> dla folii ceramicznych. Szyba
              przednia (folia ochronna UV) to dodatkowy koszt
              <strong> 300-500 zł</strong>. Dokładną wycenę podajemy po
              obejrzeniu auta.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak długo trwa montaż?
            </summary>
            <p className={classes.faqAnswer}>
              Standardowy montaż folii na 4 szybach bocznych i tylnej to
              <strong> 2-4 godziny</strong>. W przypadku aut z trudnymi, mocno
              wyprofilowanymi szybami lub dodatkową szybą przednią, czas może
              wydłużyć się do 5-6 godzin. Pracujemy dokładnie, ale sprawnie –
              nie zostawiamy auta na kilka dni.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy mogę myć auto po przyciemnieniu szyb?
            </summary>
            <p className={classes.faqAnswer}>
              Po montażu folia musi dobrze związać się z szybą. Przez
              <strong> 2-3 dni nie należy opuszczać szyb</strong>. Mycie auta
              jest możliwe, ale unikaj myjni automatycznych ze szczotkami przez
              pierwsze 2 tygodnie. Mycie ręczne lub bezdotykowe jest bezpieczne
              od razu.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy folia pęcherzykuje się z czasem?
            </summary>
            <p className={classes.faqAnswer}>
              Profesjonalnie zamontowana folia nie powinna pęcherzykować się po
              wyschnięciu. Niewielkie, mleczne przebarwienia zaraz po montażu to
              normalne zjawisko – woda odparowuje, a folia staje się idealnie
              przezroczysta w ciągu kilku dni. Jeśli po tygodniu nadal widzisz
              pęcherzyki – zgłoś się do nas, poprawiamy w ramach gwarancji.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy przyciemnianie szyb traci ważność przeglądu?
            </summary>
            <p className={classes.faqAnswer}>
              Nie, jeśli folia jest zgodna z przepisami. Na przeglądzie
              diagnosty sprawdzają przepuszczalność światła przez szyby przednie
              i boczne przednie. Stosujemy wyłącznie folie mieszczące się w
              normach (min. 70% dla szyb bocznych przednich, min. 75% dla szyby
              przedniej). Otrzymasz ode mnie certyfikat potwierdzający parametry
              folii – bez obaw o przegląd.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
