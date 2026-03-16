import React from "react";
import Image from "next/image";
import classes from "../../app/oferta/[slug]/page.module.scss";
import Link from "next/link";
import skoryImg from "../../assets/images/wlasciciel-2k-auto-detailing-renowacja-skor-opole.webp";

export const meta = {
  title: "Renowacja Skór",
  hero: skoryImg,
  heroAltText:
    "Profesjonalna renowacja i naprawa uszkodzonej skórzanej tapicerki samochodowej",
  lead: "Zatrzymaj proces zużycia skórzanej tapicerki. Przywracamy fabryczny kolor, dogłębnie czyścimy i zabezpieczamy fotele systemem premium Colourlock.",
  slug: "renowacja-skor",
  faq: [
    {
      question: "Jak często należy czyścić i konserwować skórzaną tapicerkę?",
      answer:
        "Zalecamy profesjonalne czyszczenie i konserwację skóry co najmniej raz w roku. Regularne odżywianie zapobiega wysychaniu, pękaniu i utracie koloru. W przypadku intensywnego użytkowania (taksówki, floty, rodziny z dziećmi) warto rozważyć wizytę co 6 miesięcy.",
    },
    {
      question: "Czy renowacja koloru jest trwała?",
      answer:
        "Tak, profesjonalne farby do skór, których używamy, wnikają w strukturę materiału i są bardzo odporne na ścieranie. Przy normalnym użytkowaniu kolor utrzymuje się latami. Kluczowa jest jednak regularna konserwacja – odżywianie i ochrona przed UV znacząco przedłużają żywotność odnowionej tapicerki.",
    },
    {
      question: "Czy można usunąć głębokie przetarcia i pęknięcia?",
      answer:
        "Większość przetarć i drobnych pęknięć można skutecznie zniwelować. W przypadku głębokich uszkodzeń stosujemy profesjonalne masy naprawcze, które wypełniają ubytki, a następnie są barwione i teksturowane tak, aby idealnie imitować oryginalną fakturę skóry. Efekt jest bardzo naturalny, a naprawione miejsce trwałe.",
    },
    {
      question: "Czym grozi samodzielne czyszczenie skóry?",
      answer:
        "Niewłaściwe preparaty (np. uniwersalne środki czyszczące, oliwki, mleczka) mogą: wysuszyć skórę, odtłuścić ją, odbarwić, zatkać pory lub pozostawić tłusty, lepiący film. Często domowe metody przynoszą efekt odwrotny do zamierzonego i utrudniają późniejszą profesjonalną renowację.",
    },
    {
      question: "Czy impregnacja skóry jest konieczna?",
      answer:
        "Impregnacja nie jest obowiązkowa, ale bardzo zalecana. Tworzy niewidzialną barierę ochronną, która odpycha wodę, pot, tłuszcz i inne płyny. Dzięki temu rozlane napoje nie wsiąkają natychmiast w skórę, dając czas na ich bezpieczne usunięcie. Impregnacja nie zmienia koloru, nie zatyka porów i ułatwia codzienną pielęgnację.",
    },
  ],
};

export default function RenowacjaSkorPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>
            Renowacja skór – przywróć wnętrzu luksusowy charakter i miękkość
          </h2>
          <p>
            <Link href="/blog/renowacja-skor-opole">Skórzana tapicerka</Link> to
            symbol prestiżu, ale tylko wtedy, gdy jest zadbana. Często fotele,
            które wyglądają na beznadziejnie zużyte, wymagają jedynie fachowej
            renowacji zamiast kosztownej wymiany u tapicera. W 2K Auto Detailing
            Opole specjalizujemy się w artystycznej odnowie skór – usuwamy
            przetarcia, odbarwienia i pęknięcia, przywracając wnętrzu Twojego
            auta fabryczną świeżość i matowe wykończenie.
          </p>

          <h2 className={classes.subtitle}>
            Profesjonalna regeneracja – odżywianie, czyszczenie i kolorystyka
          </h2>

          <p className={classes.description}>
            Skóra to materiał naturalny, który "oddycha" i potrzebuje
            nawilżenia. Codzienna eksploatacja sprawia, że staje się ona sucha i
            podatna na uszkodzenia mechaniczne. Nasza usługa renowacji to nie
            tylko estetyka, to przede wszystkim przedłużenie życia tapicerki.
            Jest to idealny dodatek do pełnego{" "}
            <Link href="/blog/detailing-wnetrza-opole">detailingu wnętrza</Link>
            , który sprawi, że zapomnisz o wizualnych defektach kabiny.
          </p>

          <h3>Etapy profesjonalnej renowacji skór w naszym studio:</h3>
          <ul>
            <li>
              <strong>Bezpieczne czyszczenie i przygotowanie podłoża:</strong>{" "}
              Usuwamy warstwy brudu i starych, tłustych preparatów, które
              zatykają pory skóry. Pracujemy na systemie Colourlock, co
              gwarantuje najwyższy standard bezpieczeństwa dla materiału.
            </li>
            <li>
              <strong>Głębokie odżywianie strukturalne:</strong> Wprowadzamy w
              głąb skóry preparaty, które przywracają jej elastyczność i
              zapobiegają dalszemu pękaniu. Dzięki temu fotele odzyskują swoją
              naturalną miękkość.
            </li>
            <li>
              <strong>Naprawa ubytków i przetarć:</strong> Stosujemy elastyczne
              szpachle i techniki naprawcze, które niwelują dziury, zadrapania
              czy przetarcia od wsiadania. Uszkodzone miejsca stają się
              praktycznie niewidoczne.
            </li>
            <li>
              <strong>Personalizowane barwienie (rebarwienie):</strong>{" "}
              Dobieramy kolor farby idealnie pod numer seryjny Twojej tapicerki
              lub na podstawie próbki. Używamy farb, które trwale wiążą się z
              podłożem, nie brudzą ubrań i są odporne na ścieranie.
            </li>
            <li>
              <strong>Zabezpieczenie przed transferem koloru:</strong> Na koniec
              nakładamy warstwę ochronną, która chroni jasne skóry przed
              przebarwieniami od ubrań (np. jeansu) i ułatwia późniejsze
              utrzymanie czystości.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src={skoryImg}
            alt="Profesjonalna renowacja i malowanie skórzanej tapicerki samochodowej w Opolu"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>Dlaczego warto powierzyć skórę właśnie nam?</h2>
          <p>
            Renowacja skór to praca rzemieślnicza, wymagająca cierpliwości i
            doskonałego oka do kolorów. W 2K Auto Detailing nie idziemy na
            skróty – każda skóra jest dla nas inna i wymaga indywidualnego
            podejścia.
          </p>
          <ul>
            <li>
              <strong>Ponad dekada pracy z tapicerkami premium:</strong>{" "}
              Odnawialiśmy skóry w autach zabytkowych, sportowych i luksusowych
              limuzynach. Niezależnie czy robimy{" "}
              <Link href="/blog/pranie-tapicerki-opole">
                czyszczenie tekstyliów
              </Link>{" "}
              czy renowację skóry nappa – znamy się na rzeczy.
            </li>
            <li>
              <strong>Liderzy rynkowi w arsenale:</strong> Nasze studio opiera
              się na produktach Colourlock. To światowa czołówka w dziedzinie
              regeneracji skór, co daje Ci gwarancję trwałości i bezpieczeństwa
              użytkowania.
            </li>
            <li>
              <strong>Indywidualny dobór technologii:</strong> Analizujemy typ
              skóry (licowa, anilinowa, zamsz) i dobieramy proces tak, aby nie
              zmienić jej naturalnej faktury i dotyku. Nie "zaklejamy" skóry
              farbą – my ją odnawiamy.
            </li>
            <li>
              <strong>Efekt "wow" połączony z trwałością:</strong> Nasza praca
              wytrzymuje próbę czasu. Skóra po renowacji nie lepi się, nie pęka
              i nie ma sztywnego, plastikowego wrażenia. Przywracamy jej
              szlachetny, matowy wygląd.
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

          <h3>Ile trwa renowacja skór i jak się przygotować?</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Czas renowacji zależy od zakresu prac. Standardowe czyszczenie z
              odżywieniem i impregnacją to około 2-4 godzin. Pełna renowacja z
              naprawą uszkodzeń, rebarwieniem i hydroizolacją może zająć od 1 do
              3 dni. Dokładny czas ustalamy po inspekcji pojazdu.
            </p>
            <p className={classes.contentSection__textP}>
              <strong>Jak przygotować auto?</strong> Wystarczy opróżnić wnętrze
              z rzeczy osobistych. Nie musisz go wcześniej myć ani odkurzać –
              cały proces przygotowania wykonujemy w naszym studio.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Specjalista 2K Auto Detailing podczas renowacji skórzanej tapicerki – przywracanie koloru"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section className={classes.callToActionSection}>
        <h2>Zobacz metamorfozy – renowacja skór w praktyce</h2>
        <p>
          Przejrzyj nasze realizacje i przekonaj się, jak dużą różnicę może
          zrobić profesjonalna renowacja skór. Zdjęcia &bdquo;przed i po&rdquo;
          mówią same za siebie.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Galeria renowacji skór
          </a>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o renowację skór</h2>
        <p className={classes.faqLeadText}>
          Masz wątpliwości dotyczące pielęgnacji i renowacji skórzanej
          tapicerki? Sprawdź odpowiedzi na najczęstsze pytania.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak często należy czyścić i konserwować skórzaną tapicerkę?
            </summary>
            <p className={classes.faqAnswer}>
              Zalecamy profesjonalne czyszczenie i konserwację skóry
              <strong> co najmniej raz w roku</strong>. Regularne odżywianie
              zapobiega wysychaniu, pękaniu i utracie koloru. W przypadku
              intensywnego użytkowania (taksówki, floty, rodziny z dziećmi)
              warto rozważyć wizytę co 6 miesięcy.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy renowacja koloru jest trwała?
            </summary>
            <p className={classes.faqAnswer}>
              Tak, profesjonalne farby do skór, których używamy, wnikają w
              strukturę materiału i są bardzo odporne na ścieranie. Przy
              normalnym użytkowaniu kolor utrzymuje się latami. Kluczowa jest
              jednak regularna konserwacja – odżywianie i ochrona przed UV
              znacząco przedłużają żywotność odnowionej tapicerki.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy można usunąć głębokie przetarcia i pęknięcia?
            </summary>
            <p className={classes.faqAnswer}>
              Większość przetarć i drobnych pęknięć można skutecznie zniwelować.
              W przypadku głębokich uszkodzeń stosujemy profesjonalne masy
              naprawcze, które wypełniają ubytki, a następnie są barwione i
              teksturowane tak, aby idealnie imitować oryginalną fakturę skóry.
              Efekt jest bardzo naturalny, a naprawione miejsce trwałe.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym grozi samodzielne czyszczenie skóry?
            </summary>
            <p className={classes.faqAnswer}>
              Niewłaściwe preparaty (np. uniwersalne środki czyszczące, oliwki,
              mleczka) mogą: wysuszyć skórę, odtłuścić ją, odbarwić, zatkać pory
              lub pozostawić tłusty, lepiący film. Często &bdquo;domowe
              metody&rdquo; przynoszą efekt odwrotny do zamierzonego i
              utrudniają późniejszą profesjonalną renowację.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy impregnacja skóry jest konieczna?
            </summary>
            <p className={classes.faqAnswer}>
              Impregnacja nie jest obowiązkowa, ale{" "}
              <strong>bardzo zalecana</strong>. Tworzy niewidzialną barierę
              ochronną, która odpycha wodę, pot, tłuszcz i inne płyny. Dzięki
              temu rozlane napoje nie wsiąkają natychmiast w skórę, dając czas
              na ich bezpieczne usunięcie. Impregnacja nie zmienia koloru, nie
              zatyka porów i ułatwia codzienną pielęgnację.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
