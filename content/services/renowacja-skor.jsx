import React from "react";
import Image from "next/image";
import classes from "../../app/oferta/[slug]/page.module.scss";
import Link from "next/link";

export const meta = {
  title: "Renowacja skór w Opolu – przywracamy blask tapicerce",
  hero: "/2k-logo-white-czarne-tlo.png",
  heroAltText:
    "Profesjonalna renowacja skórzanej tapicerki samochodowej w 2K Auto Detailing Opole",
  lead: "Specjalizujemy się w renowacji skór samochodowych w Opolu. Przywracamy kolor, usuwamy przetarcia i zabezpieczamy tapicerkę przed dalszym zużyciem. System Colourlock, wieloletnie doświadczenie i gwarancja satysfakcji.",
  slug: "renowacja-skor",
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
          <h2>Renowacja skór – luksusowa tapicerka znowu jak nowa</h2>
          <p>
            <Link href="/blog/renowacja-skor-opole">Renowacja skór</Link> to
            kompleksowy proces, który przywraca skórzanej tapicerce jej
            pierwotny wygląd, miękkość i komfort użytkowania. W 2K Auto
            Detailing Opole specjalizujemy się w odnawianiu skór samochodowych –
            od delikatnego czyszczenia, przez odżywianie, aż po profesjonalne
            usuwanie przetarć i przywracanie koloru. Efekt? Wnętrze Twojego auta
            znów zachwyca.
          </p>

          <h2 className={classes.subtitle}>
            Kompleksowe czyszczenie, odżywianie i ochrona skóry
          </h2>

          <p className={classes.description}>
            Skóra w samochodzie pracuje w trudnych warunkach – nagrzewa się
            latem, wysycha zimą, jest narażona na pot, kurz, tłuszcz i
            promieniowanie UV. Bez regularnej pielęgnacji traci elastyczność,
            pojawiają się przetarcia, pęknięcia i nieestetyczny, błyszczący
            nalot. Nasza renowacja skór, która wyśmienicie uzupełnia standardowy{" "}
            <Link href="/blog/detailing-wnetrza-opole">detailing wnętrza</Link>,
            to kompleksowe przywrócenie tapicerce życia i zabezpieczenie jej na
            przyszłość.
          </p>

          <h3>Jak wygląda renowacja skór w 2K Auto Detailing?</h3>
          <ul>
            <li>
              <strong>Dogłębne czyszczenie i degreasowanie:</strong> Usuwamy
              wszelkie zabrudzenia, tłuszcz, silikony i stare impregnaty, które
              blokują pory skóry. Stosujemy dedykowane środki Colourlock, które
              są bezpieczne, a jednocześnie niezwykle skuteczne.
            </li>
            <li>
              <strong>Odżywianie i regeneracja:</strong> Nawilżamy skórę
              specjalistycznymi preparatami, które przywracają jej elastyczność
              i zapobiegają pękaniu. To kluczowy etap – sucha, spękana skóra nie
              odzyska już pierwotnego wyglądu.
            </li>
            <li>
              <strong>Usuwanie przetarć i naprawa uszkodzeń:</strong>{" "}
              Precyzyjnie uzupełniamy ubytki, wyrównujemy powierzchnię i
              maskujemy drobne rysy. W przypadku większych uszkodzeń stosujemy
              profesjonalne masy naprawcze, które idealnie wtapiają się w
              strukturę skóry.
            </li>
            <li>
              <strong>Przywracanie koloru (rebarwienie):</strong> Jeśli skóra
              straciła kolor, jest wyblakła lub nierównomiernie zabarwiona –
              przywracamy oryginalny odcień. Używamy elastycznych farb do skór,
              które nie pękają i nie ścierają się pod wpływem użytkowania.
            </li>
            <li>
              <strong>Hydroizolacja i zabezpieczenie:</strong> Nakładamy warstwę
              ochronną, która odpycha wodę, pot, tłuszcz i inne płyny. Tapicerka
              staje się łatwiejsza w codziennej pielęgnacji, a ryzyko powstania
              trudnych plam znacząco maleje.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Profesjonalne czyszczenie i renowacja skórzanej tapicerki w 2K Auto Detailing Opole"
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
          <h2>Dlaczego warto zaufać 2K Auto Detailing?</h2>
          <p>
            Renowacja skór to nie zwykłe czyszczenie. To proces, który wymaga
            wiedzy, doświadczenia i odpowiednich produktów. W 2K Auto Detailing
            stawiamy na sprawdzone metody i pełną transparentność.
          </p>
          <ul>
            <li>
              <strong>Specjalizacja i doświadczenie:</strong> Pracujemy ze skórą
              samochodową od ponad 10 lat. Znamy jej rodzaje, potrzeby i
              zagrożenia niezależnie czy robimy szybkie{" "}
              <Link href="/blog/pranie-tapicerki-opole">pranie tapicerki</Link>{" "}
              czy wyciągamy przetarcia. Wiemy, jak odnowić delikatną skórę
              nappa, jak zabezpieczyć perforowaną tapicerkę i jak przywrócić
              kolor wyblakłym fotelom.
            </li>
            <li>
              <strong>System Colourlock:</strong> Używamy certyfikowanych
              produktów renomowanej marki Colourlock – lidera w pielęgnacji
              skór. To gwarancja skuteczności, bezpieczeństwa i trwałości
              efektów.
            </li>
            <li>
              <strong>Indywidualne podejście:</strong> Każde wnętrze oceniamy
              osobno. Inaczej pracujemy przy lekkich zabrudzeniach, inaczej przy
              głębokich przetarciach czy zmianie koloru tapicerki. Doradzamy,
              nie wciskamy na siłę dodatkowych usług.
            </li>
            <li>
              <strong>Efekty, które widać i czuć:</strong> Po renowacji skóra
              jest miękka, elastyczna i równomiernie wybarwiona. Nie jest
              tłusta, nie lepi się, nie ma białych nalotów. Po prostu – jak
              nowa.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Oddałem do 2K Auto Detailing drugie auto i tak jak w
              pierwszym przypadku – jestem bardzo zadowolony. Skóra odzyskała
              kolor, przetarcia na boczkach zniknęły, a fotele znów są miękkie.
              Szybko, profesjonalnie i w przyzwoitej cenie. Polecam!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Marcin Rozycki, Opole</cite>
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
