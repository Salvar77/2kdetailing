import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Regeneracja reflektorów w Opolu – przejrzystość i bezpieczeństwo",
  hero: "/2k-logo-white-czarne-tlo.png",
  heroAltText:
    "Profesjonalna regeneracja reflektorów samochodowych w 2K Auto Detailing Opole – polerowanie kloszy i przywracanie przejrzystości",
  lead: "Oferujemy profesjonalną regenerację reflektorów w Opolu. Przywracamy przejrzystość, usuwa żółknięcie, zmatowienia i drobne rysy. Poprawiamy jakość oświetlenia i bezpieczeństwo na drodze. Uniknij kosztownej wymiany lamp – zaufaj naszemu doświadczeniu.",
  slug: "regeneracja-reflektorow",
};

export default function RegeneracjaReflektorowPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Regeneracja reflektorów – odzyskaj blask i pewność po zmroku</h2>
          <p>
            <strong>Renowacja reflektorów</strong> to jedna z tych usług, które
            mają bezpośredni wpływ na Twoje bezpieczeństwo. Zmatowiałe, pożółkłe
            klosze potrafią drastycznie ograniczyć zasięg świateł, co po zmroku
            staje się śmiertelnym zagrożeniem. W 2K Auto Detailing Opole
            przywracamy lampom krystaliczną przejrzystość, sprawiając, że auto
            wygląda na kilka lat młodsze, a jazda w nocy staje się komfortowa.
          </p>

          <h2 className={classes.subtitle}>
            Przejrzyste lampy to lepsza widoczność i nowoczesny wygląd
          </h2>

          <p className={classes.description}>
            Proces utleniania poliwęglanu to naturalne zjawisko spowodowane
            przez słońce i chemię drogową. Nasz zabieg regeneracji usuwa tę
            zniszczoną warstwę, docierając do "zdrowego" plastiku. Dzięki temu
            Twoje reflektory przestają być matowe i mleczne, a strumień światła
            odzyskuje swoją pierwotną moc i skupienie. To najtańszy sposób na
            uniknięcie problemów podczas przeglądu technicznego.
          </p>

          <p className={classes.description}>
            <strong>
              W 2K Auto Detailing Opole nie tylko polerujemy, ale przede
              wszystkim trwale zabezpieczamy.
            </strong>{" "}
            Samo spolerowanie lampy daje krótkotrwały efekt. My idziemy o krok
            dalej – po przywróceniu klarowności nakładamy dedykowaną powłokę z
            filtrem UV lub bezbarwną{" "}
            <Link href="/blog/folia-ppf-opole">folię PPF</Link>, która trwale
            chroni szkło przed ponownym zmatowieniem. Dzięki temu efekt naszej
            pracy zostaje z Tobą na lata, a nie na miesiąc.
          </p>

          <h3>Jak wygląda profesjonalny proces odnowy lamp w naszym studio?</h3>
          <ul>
            <li>
              <strong>Precyzyjne maskowanie sąsiadujących elementów:</strong>{" "}
              Lakier wokół reflektora zostaje grubą warstwą zabezpieczony
              specjalistyczną taśmą. Pracujemy bezpiecznie, bez ryzyka
              uszkodzenia karoserii.
            </li>
            <li>
              <strong>Usuwanie zniszczonej powłoki (szlifowanie):</strong>{" "}
              Stosujemy wieloetapowe szlifowanie "na mokro", zaczynając od
              grubszych gradacji, a kończąc na papierach o ziarnistości 3000. To
              fundament jakiej wymaga każda rzetelna{" "}
              <Link href="/blog/korekta-lakieru-opole">korekta lakieru</Link> i
              plastiku.
            </li>
            <li>
              <strong>Polerowanie mechaniczne do wysokiego połysku:</strong>{" "}
              Przy użyciu maszyn typu Dual Action i dedykowanych past do
              poliwęglanu wyprowadzamy powierzchnię na "lustro". Klosz staje się
              idealnie gładki.
            </li>
            <li>
              <strong>Odtłuszczanie i przygotowanie pod ochronę:</strong> Przed
              nałożeniem warstwy końcowej klosz musi być sterylnie czysty.
              Usuwamy wszelkie pozostałości past polerskich.
            </li>
            <li>
              <strong>Aplikacja twardej bariery UV:</strong> Kończymy proces
              zabezpieczeniem, które odcina dostęp słońca do plastiku. Możemy
              zastosować powłokę ceramiczną lub najbardziej skuteczną folię
              ochronną PPF.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Proces regeneracji reflektorów samochodowych w 2K Auto Detailing Opole – szlifowanie i polerowanie kloszy"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: DLACZEGO WARTO ZAUFAĆ 2K AUTO DETAILING */}
      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>Dlaczego warto zaufać 2K Auto Detailing?</h2>
          <p>
            Regeneracja reflektorów to proces, który wymaga nie tylko
            odpowiednich narzędzi, ale przede wszystkim doświadczenia i
            precyzji. W 2K Auto Detailing stawiamy na jakość, trwałość i pełną
            transparentność.
          </p>
          <ul>
            <li>
              <strong>Ponad 10 lat doświadczenia:</strong> Odrestaurowaliśmy
              setki reflektorów – od popularnych aut miejskich, przez luksusowe
              limuzyny, po sportowe samochody. Wiemy, jak podejść do różnych
              typów kloszy (szkło, poliwęglan, akryl) i różnych stopni
              uszkodzeń.
            </li>
            <li>
              <strong>Profesjonalny sprzęt i materiały:</strong> Używamy
              specjalistycznych maszyn polerskich, papierów ściernych 3M oraz
              past dedykowanych do regeneracji reflektorów. Stosujemy wyłącznie
              sprawdzone powłoki UV, które gwarantują długotrwałą ochronę lub w
              wielu przypadkach jest to solidna{" "}
              <Link href="/blog/powloka-ceramiczna-opole">
                powłoka ceramiczna
              </Link>
              .
            </li>
            <li>
              <strong>Oszczędność pieniędzy:</strong> Regeneracja reflektorów to
              ułamek kosztu wymiany lamp na nowe (oszczędność nawet 70-80%). W
              wielu przypadkach oryginalne reflektory są już niedostępne lub ich
              zakup jest nieopłacalny – regeneracja to jedyne rozsądne
              rozwiązanie.
            </li>
            <li>
              <strong>Gwarancja satysfakcji:</strong> Jeśli nie będziesz
              zadowolony z efektu – poprawiamy usługę lub zwracamy pieniądze.
              Działamy uczciwie i transparentnie.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Myślałem, że konieczna będzie wymiana reflektorów – były
              tak matowe, że wieczorem ledwo oświetlały drogę. Panowie z 2K Auto
              Detailing dosłownie przywrócili im życie. Efekt? Jak nowe, a
              zapłaciłem 1/5 ceny nowych lamp. Profesjonalizm i świetny kontakt.
              Polecam każdemu!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Robert Nowak, Opole</cite>
            </footer>
          </blockquote>

          <h3>Ile trwa regeneracja reflektorów i jak się przygotować?</h3>
          <div>
            <p className={classes.contentSection__textP}>
              <strong>Czas regeneracji:</strong> Standardowa regeneracja
              kompletu reflektorów (przód) to około{" "}
              <strong>1,5 – 2,5 godziny</strong>. W przypadku bardzo
              zniszczonych kloszy, wymagających intensywnego szlifowania, czas
              może wydłużyć się do 3-4 godzin.
            </p>
            <p className={classes.contentSection__textP}>
              <strong>Jak przygotować auto?</strong> Wystarczy przyjechać do
              naszego studia. Nie musisz niczego demontować – pracujemy na
              zamontowanych reflektorach. W przypadku aut z bi-ksenonami lub
              LED, które wymagają dodatkowej uwagi, nasi specjaliści zajmą się
              wszystkim.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src="/2k-logo-white-czarne-tlo.png"
            alt="Efekt regeneracji reflektorów w 2K Auto Detailing Opole – przejrzystość i głęboki połysk"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: CTA */}
      <section className={classes.callToActionSection}>
        <h2>Umów się na regenerację reflektorów</h2>
        <p>
          Nie czekaj, aż matowe reflektory zaczną zagrażać Twojemu
          bezpieczeństwu. Przywróć im przejrzystość i ciesz się doskonałą
          widocznością po zmroku.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/kontakt" className={classes.buttonPrimary}>
            Skontaktuj się z nami
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ */}
      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o regenerację reflektorów</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące odnawiania reflektorów? Sprawdź odpowiedzi na
          najczęstsze wątpliwości naszych klientów.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy regeneracja reflektorów jest trwała?
            </summary>
            <p className={classes.faqAnswer}>
              Tak, pod warunkiem zastosowania profesjonalnej powłoki ochronnej z
              filtrem UV. W 2K Auto Detailing zawsze zabezpieczamy odnowione
              reflektory wysokiej jakości powłoką, która chroni przed
              żółknięciem i matowieniem nawet przez <strong>2-3 lata</strong>.
              Bez tej warstwy reflektory mogą wrócić do pierwotnego stanu w
              ciągu kilku miesięcy.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy można zregenerować każdy reflektor?
            </summary>
            <p className={classes.faqAnswer}>
              Większość reflektorów wykonanych z poliwęglanu lub akrylu można
              skutecznie zregenerować. Wyjątkiem są reflektory z głębokimi
              pęknięciami sięgającymi do wewnątrz klosza, uszkodzeniami
              strukturalnymi lub zaawansowaną korozją odbłyśników. W takich
              przypadkach regeneracja może być niemożliwa lub nieopłacalna.
              Zawsze dokładnie oceniamy stan reflektorów przed rozpoczęciem
              prac.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy regeneracja reflektorów wpływa na ich szczelność?
            </summary>
            <p className={classes.faqAnswer}>
              Nie, regeneracja reflektorów nie narusza ich szczelności. Proces
              obejmuje wyłącznie zewnętrzną powierzchnię klosza. Nie ingerujemy
              w obudowę reflektora, uszczelki ani elementy montażowe. Po zabiegu
              reflektory są tak samo szczelne jak przed regeneracją.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Ile kosztuje regeneracja reflektorów?
            </summary>
            <p className={classes.faqAnswer}>
              Cena zależy od stopnia zmatowienia, wielkości reflektorów oraz
              konieczności zastosowania dodatkowych etapów szlifowania.
              Standardowa regeneracja kompletu przednich reflektorów to koszt
              <strong> od 200 do 350 zł</strong>. To nawet 80% taniej niż
              wymiana lamp na nowe. Dokładną wycenę podajemy po bezpłatnej
              inspekcji.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy mogę samodzielnie zregenerować reflektory?
            </summary>
            <p className={classes.faqAnswer}>
              Dostępne w sklepach zestawy „zrób to sam” rzadko przynoszą
              zadowalające efekty. Najczęściej zawierają zbyt delikatne papiery
              ścierne i brakuje im profesjonalnej powłoki UV. Efekt jest
              krótkotrwały (kilka tygodni), a nieumiejętne szlifowanie może
              trwale uszkodzić klosz. Regeneracja reflektorów wymaga
              doświadczenia, odpowiedniego sprzętu i wiedzy – dlatego warto
              zaufać profesjonalistom.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
