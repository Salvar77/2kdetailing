import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Korekta lakieru w Opolu – 2K Auto Detailing",
  hero: "/2k-logo-white-czarne-tlo.png",
  heroAltText: "Logo 2K Auto Detailing. Profesjonalna korekta lakieru w Opolu.",
  lead: "Oferujemy profesjonalną jedno- i wieloetapową korektę lakieru w Opolu. Skutecznie usuwamy rysy, hologramy i zmatowienia, przywracając karoserii idealną gładkość i głębię koloru. Pracujemy na maszynach Rupes, a efekty utrwalamy powłokami ochronnymi. Zabezpiecz swój lakier na lata z 2K Auto Detailing.",
  slug: "korekta-lakieru",
};

export default function KorektaLakieruPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Profesjonalna Korekta Lakieru – Od Rys do Lustra</h2>
          <p>
            <Link href="/blog/korekta-lakieru-opole">Korekta lakieru</Link> to
            serce auto detailingu – proces, który przywraca karoserii samochodu
            jej pierwotny blask i gładkość. W 2K Auto Detailing w Opolu
            precyzyjnie usuwamy wszelkie niedoskonałości lakiernicze, od
            drobnych zarysowań po głębokie rysy i nieestetyczne hologramy.
            Efektem jest idealnie lśniąca powierzchnia, gotowa na długotrwałe
            zabezpieczenie.
          </p>

          {/* ✅ SEKCJA 1: JEDNOETAPOWA KOREKTA (ONE-STEP) */}
          <h2 className={classes.subtitle}>
            Szybkie polerowanie i usunięcie do 60% rys powierzchniowych
          </h2>
          <p className={classes.description}>
            Jednoetapowa korekta lakieru to szybki sposób na odświeżenie lakieru
            i usunięcie do 60% drobnych rys powstałych m.in. podczas mycia w
            myjniach szczotkowych lub samoobsługowych. Zabieg przywraca
            lakierowi połysk i poprawia estetykę auta bez nadmiernej ingerencji
            w strukturę powłoki.
          </p>

          <h3>Rodzaje Korekty Lakieru, które Oferujemy:</h3>
          <ul>
            <li>
              <strong>Jednoetapowa Korekta Lakieru (One-Step):</strong> Idealna
              dla lakierów w dobrym stanie, wymagających odświeżenia i usunięcia
              delikatnych zarysowań czy zmatowień. Skutecznie poprawiamy wygląd
              lakieru, nadając mu większą głębię i blask w krótszym czasie.
            </li>
            <li>
              <strong>Wieloetapowa Korekta Lakieru:</strong> Kompleksowy proces,
              który pozwala usunąć od 80% do nawet 95% rys i defektów lakieru.
              Obejmuje kilka etapów polerowania z użyciem różnych past i padów,
              co pozwala na stopniowe wykończenie powierzchni do perfekcji.
              Efektem jest idealna gładkość i efekt &bdquo;lustra&rdquo;.
            </li>
          </ul>

          {/* ✅ SEKCJA 2: WIELOETAPOWA KOREKTA */}
          <h2 className={classes.subtitle}>
            Usunięcie do 90–100% rys i perfekcyjne wykończenie
          </h2>
          <p className={classes.description}>
            Wieloetapowa korekta lakieru to profesjonalny proces dla aut
            wymagających pełnej odnowy lakieru. Zaczynamy od diagnostyki stanu
            lakieru oraz dokładnego mycia i dekontaminacji. Następnie
            bezpiecznie usuwamy mikrorysy, hologramy i zmatowienia, przywracając
            głębię koloru i szklisty połysk. Usługa jest idealna przed sprzedażą
            auta, aplikacją powłok ochronnych lub gdy samochód ma odzyskać
            reprezentacyjny wygląd.
          </p>

          <ul>
            <li>
              <strong>Przygotowanie Lakieru pod Powłokę Ochronną:</strong> Każda
              korekta lakieru w 2K Auto Detailing jest kluczowym etapem przed
              aplikacją powłoki ceramicznej. Czysty, pozbawiony defektów lakier
              zapewnia maksymalną trwałość i przyleganie zabezpieczenia.
            </li>
            <li>
              <strong>Detailingowe Mycie i Dekontaminacja:</strong> Przed każdą
              korektą lakieru samochód przechodzi przez szczegółowy proces mycia
              detailingowego i dekontaminacji. Usuwamy wszelkie
              zanieczyszczenia, smołę, naloty metaliczne i żywicę, aby zapewnić
              idealnie czystą powierzchnię do pracy.
            </li>
          </ul>

          {/* ✅ SEKCJA 3: KOREKTA LAKIERU OPOLE – 2K AUTO DETAILING */}
          <h2 className={classes.subtitle}>
            Korekta lakieru w Opolu – 2K Auto Detailing
          </h2>
          <p className={classes.description}>
            Korekta lakieru w 2K Auto Detailing Opole pozwala skutecznie
            przywrócić estetykę i połysk samochodu. Proces obejmuje ocenę stanu
            lakieru, precyzyjne mycie i dekontaminację, a następnie dopasowaną
            korektę jedno- lub wieloetapową. Efekt to gładki, jednolity lakier
            bez mikrozarysowań, z głębią koloru i trwałym połyskiem, co również
            wpływa na wartość pojazdu.
          </p>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-black-biale-tlo.png"
            alt="Profesjonalna jednoetapowa korekta lakieru samochodowego w 2K Auto Detailing Opole"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: DLACZEGO WARTO WYBRAĆ 2K AUTO DETAILING */}
      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>Dlaczego Warto Wybrać Korektę Lakieru w 2K Auto Detailing?</h2>
          <p>
            Perfekcyjny lakier to wizytówka każdego samochodu. W 2K Auto
            Detailing, dzięki wieloletniemu doświadczeniu i precyzyjnemu
            podejściu, gwarantujemy efekty, które przerosną Twoje oczekiwania.
          </p>
          <ul>
            <li>
              <strong>Wieloletnie Doświadczenie:</strong> Posiadamy ponad 10 lat
              praktyki w detailingu, specjalizując się w{" "}
              <Link href="/blog/korekta-lakieru-opole">korekcie lakieru</Link>.
              Każdy projekt to dla nas wyzwanie i dowód na to, co można osiągnąć
              dzięki pasji i precyzji.
            </li>
            <li>
              <strong>Specjalistyczny Sprzęt i Kosmetyki:</strong> Używamy
              wyłącznie profesjonalnych maszyn polerskich Rupes, padów i past
              najwyższej jakości (Menzerna, Koch-Chemie), co zapewnia
              bezpieczeństwo lakieru i spektakularne efekty bez hologramów.
            </li>
            <li>
              <strong>Praca Wykonywana Osobiście przez Właściciela:</strong>{" "}
              Cały proces korekty lakieru wykonujemy osobiście. Masz pewność, że
              Twoje auto jest w rękach doświadczonego eksperta, który dba o
              każdy, nawet najmniejszy detal.
            </li>
            <li>
              <strong>Indywidualna Ocena Stanu Lakieru:</strong> Przed
              przystąpieniem do pracy dokładnie oceniamy stan lakieru i
              dobieramy optymalną metodę korekty, dostosowaną do jego specyfiki
              i Twoich oczekiwań.
            </li>
            <li>
              <strong>Gwarancja Satysfakcji:</strong> Naszym priorytetem jest
              Twoje pełne zadowolenie z efektów. Działamy z pasją i precyzją,
              aby każdy klient opuścił 2K Auto Detailing z uśmiechem na twarzy.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Polecam! Skorzystałem z prania tapicerki samochodowej i
              polerowania lakieru wraz z nałożeniem powłoki ceramicznej.
              Profesjonalnie, solidnie i w terminie. Zdecydowanie warto!&rdquo;
            </p>
            <footer>
              &mdash; <cite>DrKatushimero, Opole</cite>
            </footer>
          </blockquote>

          <h3>Osobiste zaangażowanie – gwarancja perfekcji</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Wszystkie usługi w 2K Auto Detailing wykonujemy osobiście. Naszym
              celem jest nie tylko usunięcie defektów, ale także zapewnienie
              długotrwałego efektu i pełnej satysfakcji klienta.
            </p>
            <p className={classes.contentSection__textP}>
              Zaufaj naszemu doświadczeniu i pasji do perfekcji, a Twój samochód
              odzyska swój salonowy blask i będzie chroniony na lata.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-black-biale-tlo.png"
            alt="Specjalista 2K Auto Detailing podczas korekty lakieru samochodowego w Opolu"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: CTA - GALERIA REALIZACJI */}
      <section className={classes.callToActionSection}>
        <h2>Nasze Realizacje Korekty Lakieru</h2>
        <p>
          Przeglądnij galerię zdjęć z naszych ostatnich projektów korekty
          lakieru, aby zobaczyć, jak spektakularne efekty możemy osiągnąć.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Przejdź do Galerii Korekty Lakieru
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ */}
      <section className={classes.faqSection}>
        <h2>Najczęściej Zadawane Pytania o Korektę Lakieru</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące procesu korekty lakieru? Poniżej znajdziesz
          odpowiedzi na najczęściej zadawane pytania.
        </p>

        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym różni się jednoetapowa korekta od wieloetapowej?
            </summary>
            <p className={classes.faqAnswer}>
              Jednoetapowa korekta (One-Step) skupia się na odświeżeniu lakieru
              i usunięciu lekkich defektów (ok. 50-70% rys). Wieloetapowa
              korekta to bardziej zaawansowany proces, usuwający od 80% do 95%
              rys i hologramów, dający efekt idealnego &bdquo;lustra&rdquo; i
              głębokiej czerni. Jest bardziej czasochłonna i precyzyjna.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy korekta lakieru jest bezpieczna dla mojego samochodu?
            </summary>
            <p className={classes.faqAnswer}>
              Tak, profesjonalnie wykonana korekta lakieru jest całkowicie
              bezpieczna. Używamy specjalistycznych mierników grubości lakieru,
              aby precyzyjnie kontrolować proces polerowania i nie naruszyć
              struktury powłoki lakierniczej.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Ile czasu trwa korekta lakieru?
            </summary>
            <p className={classes.faqAnswer}>
              Czas korekty lakieru zależy od stanu początkowego lakieru oraz
              wybranego pakietu. Jednoetapowa korekta może zająć od 1 do 2 dni,
              natomiast kompleksowa, wieloetapowa korekta od 2 do nawet 4 dni.
              Dokładny czas ustalamy po szczegółowej inspekcji pojazdu.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy po korekcie lakieru muszę zastosować jakieś zabezpieczenie?
            </summary>
            <p className={classes.faqAnswer}>
              Zdecydowanie tak. Po usunięciu defektów lakier jest
              &bdquo;goły&rdquo; i wymaga zabezpieczenia. Zawsze zalecamy
              aplikację powłoki ceramicznej, aby chronić lakier przed nowymi
              uszkodzeniami, promieniami UV, brudem drogowym i ułatwić jego
              późniejsze mycie.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
