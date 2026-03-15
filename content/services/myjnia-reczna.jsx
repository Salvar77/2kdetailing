import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Myjnia Ręczna Opole – Bezpieczne Mycie Samochodu",
  hero: "/2k-logo-white-czarne-tlo.png",
  heroAltText:
    "Profesjonalna myjnia ręczna w Opolu - bezpieczne mycie lakieru metodą na dwa wiadra",
  lead: "Bezpieczne i precyzyjne mycie ręczne to fundament właściwej pielęgnacji każdego samochodu. W 2K Auto Detailing stawiamy na techniki, które eliminują ryzyko powstawania zarysowań, przywracając autu salonową czystość.",
  slug: "myjnia-reczna",
  faq: [
    {
      question: "Dlaczego myjnia ręczna jest lepsza od automatycznej?",
      answer:
        "Myjnie automatyczne (szczotkowe) często powodują mikrozarysowania lakieru, tzw. 'swirle', ponieważ ich szczotki zbierają brud z poprzednich aut. Myjnia ręczna w naszym studio to proces w pełni kontrolowany, używamy miękkich rękawic i metody 'na dwa wiadra' z separatorami brudu, co jest najbezpieczniejszą metodą mycia pojazdu.",
    },
    {
      question: "Czym jest mycie metodą 'na dwa wiadra'?",
      answer:
        "To profesjonalna technika, gdzie w jednym wiadrze znajduje się woda z szamponem, a w drugim czysta woda do płukania rękawicy. Dzięki separatorom brudu na dnie wiader, piasek i zanieczyszczenia nie trafiają z powrotem na lakier, co drastycznie zmniejsza ryzyko zarysowań.",
    },
    {
      question: "Czy mycie ręczne obejmuje również wnętrze?",
      answer:
        "Podstawowa usługa myjni ręcznej skupia się na karoserii, felgach i wnękach drzwi. Jeśli zależy Państwu na kompleksowym odświeżeniu środka, polecamy nasze pakiety Detailingu Wnętrza, które można łączyć z myciem zewnętrznym.",
    },
    {
      question: "Jak długo trwa usługa mycia ręcznego?",
      answer:
        "Profesjonalne mycie detailingowe trwa zazwyczaj od 1,5 do 3 godzin. Czas ten wynika z dokładności – nie pomijamy wnęk, pędzelkujemy detale, emblematy i dbamy o precyzyjne osuszenie każdego elementu, w tym wydmuchanie wody ze szczelin.",
    },
    {
      question: "Czy po myciu lakier jest zabezpieczany?",
      answer:
        "Standardowo po myciu osuszamy lakier i możemy nałożyć Quick Detailer, który podbija połysk i nadaje podstawową hydrofobowość. Oferujemy również opcję aplikacji twardego wosku lub powłok ochronnych dla długotrwałego efektu.",
    },
  ],
};

export default function MyjniaRecznaPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>
            Profesjonalna myjnia ręczna – standard detailingu w Twoim zasięgu
          </h2>
          <p>
            Większość defektów lakieru powstaje podczas niewłaściwego mycia. W{" "}
            <strong>2K Auto Detailing Opole</strong> rozumiemy, że lakier
            wymaga delikatności i odpowiedniej chemii. Nasza{" "}
            <Link href="/oferta/myjnia-reczna">myjnia ręczna</Link> to nie
            tylko usuwanie brudu, to proces pielęgnacyjny, który utrzymuje
            wartość estetyczną Twojego samochodu na najwyższym poziomie.
          </p>

          <h2 className={classes.subtitle}>
            Dlaczego warto wybrać myjnię ręczną w 2K Auto Detailing?
          </h2>

          <p className={classes.description}>
            Zwykłe myjnie bezdotykowe często nie domywają tzw. filmu drogowego,
            a myjnie szczotkowe niszczą strukturę lakieru. Nasz proces{" "}
            <strong>mycia detailingowego</strong> eliminuje te problemy.
            Używamy wyłącznie dedykowanych pędzli do detali, bezpiecznych kwasów
            do felg oraz szamponów o neutralnym pH, które nie naruszają
            wcześniej nałożonych wosków czy powłok ceramicznych.
          </p>

          <h3>Nasz proces mycia krok po kroku:</h3>
          <ul>
            <li>
              <strong>Dekontaminacja wstępna:</strong> Usuwamy osady metaliczne
              (pył z klocków hamulcowych) oraz cząsteczki asfaltu i smoły przy
              użyciu specjalistycznej chemii.
            </li>
            <li>
              <strong>Aktywna piana:</strong> Gęsta piana zmiękcza brud,
              pozwalając mu bezpiecznie spłynąć z karoserii przed dotknięciem
              lakieru rękawicą.
            </li>
            <li>
              <strong>Mycie właściwe (Two Bucket Method):</strong> Używamy dwóch
              wiader z separatorami 'Grit Guard' oraz delikatnych rękawic z
              wełny lub mikrofibry.
            </li>
            <li>
              <strong>Czyszczenie detali:</strong> Pędzelkujemy wloty powietrza,
              emblematy, uszczelki i wnęki wlewu paliwa.
            </li>
            <li>
              <strong>Bezpieczne osuszanie:</strong> Korzystamy z grubych,
              chłonnych ręczników z mikrofibry oraz sprężonego powietrza, aby
              usunąć wodę z lusterek i szczelin, zapobiegając powstawaniu
              zacieków.
            </li>
            <li>
              <strong>Dressing na opony i plastiki:</strong> Przywracamy czerń
              elementom gumowym i zewnętrznym plastikom, chroniąc je przed
              promieniowaniem UV.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Mycie ręczne samochodu w 2K Auto Detailing Opole - detale i precyzja"
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
          <h2>Standard EEAT – Eksperckość, Doświadczenie i Zaufanie</h2>
          <p>
            Jako specjaliści z wieloletnim stażem w branży auto detailingu w
            Opolu, wiemy, że każdy samochód traktujemy jak własny. Nasze
            doświadczenie pozwala nam na dobór idealnych parametrów mycia dla
            każdego typu lakieru – od delikatnych lakierów japońskich po twarde
            lakiery ceramiczne marek premium.
          </p>
          <p>
            Regularna <strong>myjnia ręczna</strong> to również najlepszy sposób na
            bieżącą pielęgnację aut zabezpieczonych {" "}
            <Link href="/oferta/powloka-ceramiczna">powłokami ceramicznymi</Link>{" "}
            oraz <Link href="/oferta/folia-ppf">foliami PPF</Link>. Stosowana przez nas 
            chemia jest w pełni bezpieczna dla powłok ochronnych, nie narusza ich struktury, 
            a wręcz pomaga zachować ich właściwości hydrofobowe na dłużej.
          </p>
          <ul>
            <li>
              <strong>Wiedza o produktach:</strong> Testujemy i wybieramy tylko
              najlepszą chemię od światowych liderów detailingu.
            </li>
            <li>
              <strong>Czystość narzędzi:</strong> Każda rękawica i ręcznik są
              prane w dedykowanych detergentach po każdym użyciu.
            </li>
            <li>
              <strong>Transparentność:</strong> Zawsze informujemy o stanie
              lakieru znalezionym podczas mycia i doradzamy w kwestii dalszej
              ochrony, takiej jak <Link href="/blog/korekta-lakieru-opole">korekta lakieru</Link> czy twardy wosk.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Perfekcyjne podejście do klienta i auta. Mycie ręczne
              wykonane z niesamowitą dokładnością. Polecam każdemu, kto dba o
              swój samochód!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Zadowolony Klient</cite>
            </footer>
          </blockquote>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Profesjonalne kosmetyki samochodowe używane w 2K Auto Detailing"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section className={classes.callToActionSection}>
        <h2>Zadbaj o swój samochód już dziś</h2>
        <p>
          Twoje auto zasługuje na najlepszą opiekę. Umów się na profesjonalną
          myjnię ręczną i poczuj różnicę standardu 2K Auto Detailing.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/kontakt" className={classes.buttonPrimary}>
            Skontaktuj się z nami i umów termin
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ */}
      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o myjnię ręczną</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące bezpieczeństwa i przebiegu mycia detailingowego? 
          Poniżej znajdziesz odpowiedzi na najczęstsze wątpliwości naszych klientów.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Dlaczego myjnia ręczna jest lepsza od automatycznej?
            </summary>
            <p className={classes.faqAnswer}>
              Myjnie automatyczne (szczotkowe) często powodują mikrozarysowania lakieru, tzw. "swirle", ponieważ ich szczotki zbierają brud z poprzednich aut. 
              <strong> Myjnia ręczna</strong> w naszym studio to proces w pełni kontrolowany, używamy miękkich rękawic i metody "na dwa wiadra" z separatorami brudu, co jest najbezpieczniejszą metodą mycia pojazdu.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym jest mycie metodą "na dwa wiadra"?
            </summary>
            <p className={classes.faqAnswer}>
              To profesjonalna technika, gdzie w jednym wiadrze znajduje się woda z szamponem, a w drugim czysta woda do płukania rękawicy. 
              Dzięki separatorom brudu na dnie wiader, piasek i zanieczyszczenia nie trafiają z powrotem na lakier, co drastycznie zmniejsza ryzyko zarysowań.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy mycie ręczne obejmuje również wnętrze?
            </summary>
            <p className={classes.faqAnswer}>
              Podstawowa usługa myjni ręcznej skupia się na karoserii, felgach i wnękach drzwi. 
              Jeśli zależy Państwu na kompleksowym odświeżeniu środka, polecamy nasze pakiety <Link href="/oferta/detailing-wnetrza">Detailingu Wnętrza</Link> oraz <Link href="/oferta/pranie-tapicerki">pranie tapicerki</Link>, które można łączyć z myciem zewnętrznym.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak długo trwa usługa mycia ręcznego?
            </summary>
            <p className={classes.faqAnswer}>
              Profesjonalne mycie detailingowe trwa zazwyczaj od 1,5 do 3 godzin. 
              Czas ten wynika z dokładności – nie pomijamy wnęk, pędzelkujemy detale, emblematy i dbamy o precyzyjne osuszenie każdego elementu, w tym wydmuchanie wody ze szczelin.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy po myciu lakier jest zabezpieczany?
            </summary>
            <p className={classes.faqAnswer}>
              Standardowo po myciu osuszamy lakier i możemy nałożyć Quick Detailer, który podbija połysk i nadaje podstawową hydrofobowość. 
              Oferujemy również opcję aplikacji twardego wosku lub <Link href="/blog/powloka-ceramiczna-opole">powłok ochronnych</Link> dla długotrwałego efektu.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
