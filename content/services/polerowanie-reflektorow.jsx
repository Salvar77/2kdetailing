import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title: "Polerowanie Reflektorów",
  hero: "/images/regeneracja-reflektorow-opole-polerowanie-lamp-przed-po.webp",
  heroAltText:
    "Proces polerowania reflektorów – usuwanie zmatowień kloszy i przywracanie im pełnej przejrzystości",
  lead: "Odtwarzamy przejrzystość lamp usuwając zmatowienia. Zwiększ wydajność świateł oraz bezpieczeństwo na drodze bez ponoszenia kosztów wymiany kloszy.",
  slug: "polerowanie-reflektorow",
  faq: [
    {
      question: "Czy polerowanie reflektorów jest trwałe?",
      answer:
        "Tak, pod warunkiem zastosowania profesjonalnej powłoki ochronnej z filtrem UV. W 2K Auto Detailing zawsze zabezpieczamy odnowione reflektory wysokiej jakości powłoką, która chroni przed żółknięciem i matowieniem nawet przez 2-3 lata. Bez tej warstwy reflektory mogą wrócić do pierwotnego stanu w ciągu kilku miesięcy.",
    },
    {
      question: "Czy można wypolerować każdy reflektor?",
      answer:
        "Większość reflektorów wykonanych z poliwęglanu lub akrylu można skutecznie wypolerować. Wyjątkiem są reflektory z głębokimi pęknięciami sięgającymi do wewnątrz klosza, uszkodzeniami strukturalnymi lub zaawansowaną korozją odbłyśników. W takich przypadkach polerowanie może być niemożliwe lub nieopłacalne. Zawsze dokładnie oceniamy stan reflektorów przed rozpoczęciem prac.",
    },
    {
      question: "Czy polerowanie reflektorów wpływa na ich szczelność?",
      answer:
        "Nie, polerowanie reflektorów nie narusza ich szczelności. Proces obejmuje wyłącznie zewnętrzną powierzchnię klosza. Nie ingerujemy w obudowę reflektora, uszczelki ani elementy montażowe. Po zabiegu reflektory są tak samo szczelne jak przed polerowaniem.",
    },
    {
      question: "Ile kosztuje polerowanie reflektorów?",
      answer:
        "Cena zależy od stopnia zmatowienia, wielkości reflektorów oraz konieczności zastosowania dodatkowych etapów szlifowania. Standardowe polerowanie kompletu przednich reflektorów to koszt od 200 do 350 zł. To nawet 80% taniej niż wymiana lamp na nowe. Dokładną wycenę podajemy po bezpłatnej inspekcji.",
    },
    {
      question: "Czy mogę samodzielnie wypolerować reflektory?",
      answer:
        "Dostępne w sklepach zestawy „zrób to sam” rzadko przynoszą zadowalające efekty. Najczęściej zawierają zbyt delikatne papiery ścierne i brakuje im profesjonalnej powłoki UV. Efekt jest krótkotrwały (kilka tygodni), a nieumiejętne szlifowanie może trwale uszkodzić klosz. Polerowanie reflektorów wymaga doświadczenia, odpowiedniego sprzętu i wiedzy – dlatego warto zaufać profesjonalistom.",
    },
    {
      question: "Czy z matowymi reflektorami przejdę przegląd techniczny?",
      answer:
        "Może być z tym problem. Diagnosta sprawdza ustawienie i natężenie świateł oraz stan kloszy. Mocno zmatowiały, pożółkły lub porysowany klosz osłabia i rozprasza światło, przez co pomiar może wypaść poza normę, a przegląd nie zostanie podbity. Polerowanie przed badaniem przywraca kloszom przejrzystość i zwykle rozwiązuje problem. Po zabiegu warto poprosić diagnostę o sprawdzenie ustawienia świateł.",
    },
    {
      question: "Kiedy najlepiej wypolerować reflektory?",
      answer:
        "Najlepiej jesienią, przed sezonem krótkich dni, deszczu i mgieł, lub kilka dni przed terminem przeglądu technicznego. Im wcześniej zareagujesz na pierwsze zmatowienie, tym prostszy i tańszy jest zabieg.",
    },
  ],
};

export default function PolerowanieReflektorowPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Polerowanie reflektorów – odzyskaj blask i pewność po zmroku</h2>
          <p>
            <strong>Polerowanie reflektorów</strong> to jedna z tych usług, które
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
            przez słońce i chemię drogową. Nasz zabieg polerowania usuwa tę
            zniszczoną warstwę, docierając do &quot;zdrowego&quot; plastiku. Dzięki temu
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

          <h3>Jak wygląda profesjonalny proces polerowania lamp w naszym studio?</h3>
          <ul>
            <li>
              <strong>Precyzyjne maskowanie sąsiadujących elementów:</strong>{" "}
              Lakier wokół reflektora zostaje grubą warstwą zabezpieczony
              specjalistyczną taśmą. Pracujemy bezpiecznie, bez ryzyka
              uszkodzenia karoserii.
            </li>
            <li>
              <strong>Usuwanie zniszczonej powłoki (szlifowanie):</strong>{" "}
              Stosujemy wieloetapowe szlifowanie &quot;na mokro&quot;, zaczynając od
              grubszych gradacji, a kończąc na papierach o ziarnistości 3000. To
              fundament jakiej wymaga każda rzetelna{" "}
              <Link href="/blog/korekta-lakieru-opole">korekta lakieru</Link> i
              plastiku.
            </li>
            <li>
              <strong>Polerowanie mechaniczne do wysokiego połysku:</strong>{" "}
              Przy użyciu maszyn typu Dual Action i dedykowanych past do
              poliwęglanu wyprowadzamy powierzchnię na &quot;lustro&quot;. Klosz staje się
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
            src="/images/polerowanie-reflektorow-mercedes-opole-efekt-przed-po.webp"
            alt="Proces polerowania reflektorów samochodowych w 2K Auto Detailing Opole – Mercedes przed i po"
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
            Polerowanie reflektorów to proces, który wymaga nie tylko
            odpowiednich narzędzi, ale przede wszystkim doświadczenia i
            precyzji. W 2K Auto Detailing stawiamy na jakość, trwałość i pełną
            transparentność.
          </p>
          <ul>
            <li>
              <strong>Ponad 10 lat doświadczenia:</strong> Odnowiliśmy
              setki reflektorów – od popularnych aut miejskich, przez luksusowe
              limuzyny, po sportowe samochody. Wiemy, jak podejść do różnych
              typów kloszy (szkło, poliwęglan, akryl) i różnych stopni
              uszkodzeń.
            </li>
            <li>
              <strong>Profesjonalny sprzęt i materiały:</strong> Używamy
              specjalistycznych maszyn polerskich, papierów ściernych 3M oraz
              past dedykowanych do polerowania reflektorów. Stosujemy wyłącznie
              sprawdzone powłoki UV, które gwarantują długotrwałą ochronę lub w
              wielu przypadkach jest to solidna{" "}
              <Link href="/blog/powloka-ceramiczna-opole">
                powłoka ceramiczna
              </Link>
              .
            </li>
            <li>
              <strong>Oszczędność pieniędzy:</strong> Polerowanie reflektorów to
              ułamek kosztu wymiany lamp na nowe (oszczędność nawet 70-80%). W
              wielu przypadkach oryginalne reflektory są już niedostępne lub ich
              zakup jest nieopłacalny – polerowanie to jedyne rozsądne
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
              &bdquo;Gorąco polecam usługi Pana Kamila, zlecenie wykonane
              szybko, dokładnie i w korzystnej cenie. Wykonana powłoka
              ceramiczna zdecydowanie ułatwia codzienną pielęgnacje samochodu i
              lakieru.&rdquo;
            </p>
            <footer>
              &mdash; <cite>grześ Dziuba</cite>
            </footer>
          </blockquote>

          <h3>Ile trwa polerowanie reflektorów i jak się przygotować?</h3>
          <div>
            <p className={classes.contentSection__textP}>
              <strong>Czas polerowania:</strong> Standardowe polerowanie
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
            src="/images/polerowanie-reflektorow-renault-laguna-opole-porownanie.webp"
            alt="Efekt polerowania reflektorów w 2K Auto Detailing Opole – porównanie przed i po na Renault Laguna"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: PRZEGLĄD I BEZPIECZEŃSTWO ZIMĄ */}
      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>Polerowanie reflektorów przed przeglądem i przed zimą</h2>
          <p>
            Jesienią i zimą robi się ciemno już po 16:00, a deszcz, mgła i mokry
            asfalt dodatkowo „zjadają” światło. To moment, w którym zmatowiałe
            klosze najbardziej dają się we znaki – zasięg świateł spada, a
            rozproszone światło oślepia kierowców z naprzeciwka.
          </p>

          <h3>Matowe lampy a badanie techniczne</h3>
          <p className={classes.description}>
            Podczas przeglądu diagnosta sprawdza{" "}
            <strong>ustawienie i natężenie świateł</strong> oraz{" "}
            <strong>stan kloszy</strong>. Mocno zmatowiały lub pożółkły
            reflektor potrafi osłabić światło na tyle, że pomiar wypada poza
            normę – a wtedy przegląd może nie zostać podbity. Polerowanie kilka
            dni przed badaniem to zwykle najtańszy sposób, żeby uniknąć
            problemu i kosztownej wymiany lamp. Więcej przeczytasz w artykule{" "}
            <Link href="/blog/regeneracja-reflektorow-przeglad-opole">
              Polerowanie reflektorów przed przeglądem – czy auto przejdzie?
            </Link>
          </p>

          <h3>Bezpieczniejsza jazda w sezonie jesienno-zimowym</h3>
          <ul>
            <li>
              <strong>Większy zasięg świateł:</strong> przejrzysty klosz
              przepuszcza pełen strumień światła, więc wcześniej widzisz
              pieszych, zwierzęta i przeszkody na drodze.
            </li>
            <li>
              <strong>Mniej oślepiania innych:</strong> światło nie rozprasza
              się na zmatowionej powierzchni, a granica światła i cienia jest
              wyraźna.
            </li>
            <li>
              <strong>Ochrona przed solą i piaskiem:</strong> po polerowaniu
              zabezpieczamy klosze powłoką UV lub folią PPF, która chroni je
              przed zimowym piaskowaniem i chemią drogową.
            </li>
          </ul>

          <p className={classes.description}>
            Szykujesz auto na zimę? Sprawdź też, jak{" "}
            <Link href="/blog/przygotowanie-lakieru-na-zime-opole">
              przygotować lakier na zimę
            </Link>{" "}
            oraz co zrobić, gdy{" "}
            <Link href="/blog/parujace-szyby-w-samochodzie">
              szyby parują od środka
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ✅ SEKCJA: CTA */}
      <section className={classes.callToActionSection}>
        <h2>Zobacz nasze realizacje – polerowanie reflektorów</h2>
        <p>
          Zanim umówisz się na usługę, zobacz jak spektakularne efekty osiągamy.
          Przywracamy lampom fabryczną przejrzystość i blask, co możesz zobaczyć
          w naszej galerii.
        </p>
        <div className={classes.buttonWrapper}>
          <a
            href="/galeria/polerowanie-reflektorow"
            className={classes.buttonPrimary}
          >
            Przejdź do galerii polerowania
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ */}
      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o polerowanie reflektorów</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące polerowania reflektorów? Sprawdź odpowiedzi na
          najczęstsze wątpliwości naszych klientów.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy polerowanie reflektorów jest trwałe?
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
              Czy można wypolerować każdy reflektor?
            </summary>
            <p className={classes.faqAnswer}>
              Większość reflektorów wykonanych z poliwęglanu lub akrylu można
              skutecznie wypolerować. Wyjątkiem są reflektory z głębokimi
              pęknięciami sięgającymi do wewnątrz klosza, uszkodzeniami
              strukturalnymi lub zaawansowaną korozją odbłyśników. W takich
              przypadkach polerowanie może być niemożliwe lub nieopłacalne.
              Zawsze dokładnie oceniamy stan reflektorów przed rozpoczęciem
              prac.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy polerowanie reflektorów wpływa na ich szczelność?
            </summary>
            <p className={classes.faqAnswer}>
              Nie, polerowanie reflektorów nie narusza ich szczelności. Proces
              obejmuje wyłącznie zewnętrzną powierzchnię klosza. Nie ingerujemy
              w obudowę reflektora, uszczelki ani elementy montażowe. Po zabiegu
              reflektory są tak samo szczelne jak przed polerowaniem.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Ile kosztuje polerowanie reflektorów?
            </summary>
            <p className={classes.faqAnswer}>
              Cena zależy od stopnia zmatowienia, wielkości reflektorów oraz
              konieczności zastosowania dodatkowych etapów szlifowania.
              Standardowe polerowanie kompletu przednich reflektorów to koszt
              <strong> od 200 do 350 zł</strong>. To nawet 80% taniej niż
              wymiana lamp na nowe. Dokładną wycenę podajemy po bezpłatnej
              inspekcji.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy mogę samodzielnie wypolerować reflektory?
            </summary>
            <p className={classes.faqAnswer}>
              Dostępne w sklepach zestawy „zrób to sam” rzadko przynoszą
              zadowalające efekty. Najczęściej zawierają zbyt delikatne papiery
              ścierne i brakuje im profesjonalnej powłoki UV. Efekt jest
              krótkotrwały (kilka tygodni), a nieumiejętne szlifowanie może
              trwale uszkodzić klosz. Polerowanie reflektorów wymaga
              doświadczenia, odpowiedniego sprzętu i wiedzy – dlatego warto
              zaufać profesjonalistom.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy z matowymi reflektorami przejdę przegląd techniczny?
            </summary>
            <p className={classes.faqAnswer}>
              Może być z tym problem. Diagnosta sprawdza ustawienie i natężenie
              świateł oraz stan kloszy. Mocno zmatowiały, pożółkły lub
              porysowany klosz osłabia i rozprasza światło, przez co pomiar może
              wypaść poza normę, a przegląd nie zostanie podbity. Polerowanie
              przed badaniem przywraca kloszom przejrzystość i zwykle rozwiązuje
              problem. Po zabiegu warto poprosić diagnostę o sprawdzenie
              ustawienia świateł.
            </p>
          </details>

          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Kiedy najlepiej wypolerować reflektory?
            </summary>
            <p className={classes.faqAnswer}>
              Najlepiej <strong>jesienią</strong>, przed sezonem krótkich dni,
              deszczu i mgieł, lub kilka dni przed terminem przeglądu
              technicznego. Im wcześniej zareagujesz na pierwsze zmatowienie, tym
              prostszy i tańszy jest zabieg.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
