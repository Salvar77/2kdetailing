import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";
import szybyImg from "../../assets/images/wlasciciel-2k-auto-detailing-przyciemnianie-szyb-opole.webp";
import szybyImg2 from "../../assets/images/wlasciciel-2k-auto-detailing-przyciemnianie-szyb-2-opole.webp";
import szybyImg3 from "../../assets/images/2k-auto-detailing-opole-przyciemnianie-szyb-realizacja.webp";

export const meta = {
  title: "Przyciemnianie Szyb Opole",
  hero: szybyImg3,
  heroAltText: "Aplikacja folii przyciemniającej na boczne szyby samochodu",
  lead: "Ciesz się chłodnym wnętrzem i dyskretną elegancją. Instalujemy certyfikowane folie przeciwsłoneczne blokujące nagrzewanie oraz promieniowanie UV.",
  slug: "przyciemnianie-szyb",
  faq: [
    {
      question: "Ile kosztuje przyciemnianie szyb?",
      answer:
        "Cena zależy od rodzaju folii, ilości szyb oraz modelu samochodu. Przyciemnienie 4 szyb bocznych + tylnej to koszt od 600 do 1200 zł dla folii standardowych i od 1000 do 1800 zł dla folii ceramicznych. Szyba przednia (folia ochronna UV) to dodatkowy koszt 300-500 zł. Dokładną wycenę podajemy po obejrzeniu auta.",
    },
    {
      question: "Jak długo trwa montaż?",
      answer:
        "Standardowy montaż folii na 4 szybach bocznych i tylnej to 2-4 godziny. W przypadku aut z trudnymi, mocno wyprofilowanymi szybami lub dodatkową szybą przednią, czas może wydłużyć się do 5-6 godzin. Pracujemy dokładnie, ale sprawnie – nie zostawiamy auta na kilka dni.",
    },
    {
      question: "Czy mogę myć auto po przyciemnieniu szyb?",
      answer:
        "Po montażu folia musi dobrze związać się z szybą. Przez 2-3 dni nie należy opuszczać szyb. Mycie auta jest możliwe, ale unikaj myjni automatycznych ze szczotkami przez pierwsze 2 tygodnie. Mycie ręczne lub bezdotykowe jest bezpieczne od razu.",
    },
    {
      question: "Czy folia pęcherzykuje się z czasem?",
      answer:
        "Profesjonalnie zamontowana folia nie powinna pęcherzykować się po wyschnięciu. Niewielkie, mleczne przebarwienia zaraz po montażu to normalne zjawisko – woda odparowuje, a folia staje się idealnie przezroczysta w ciągu kilku dni. Jeśli po tygodniu nadal widzisz pęcherzyki – zgłoś się do nas, poprawiamy w ramach gwarancji.",
    },
    {
      question: "Czy przyciemnianie szyb traci ważność przeglądu?",
      answer:
        "Nie, jeśli folia jest zgodna z przepisami. Na przeglądzie diagnosty sprawdzają przepuszczalność światła przez szyby przednie i boczne przednie. Stosujemy wyłącznie folie mieszczące się w normach (min. 70% dla szyb bocznych przednich, min. 75% dla szyby przedniej). Otrzymasz ode mnie certyfikat potwierdzający parametry folii – bez obaw o przegląd.",
    },
  ],
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
          <h2>
            Przyciemnianie szyb Opole – elegancja, dyskrecja i ochrona termiczna
          </h2>
          <p>
            <strong>Przyciemnianie szyb samochodowych</strong> to jedna z
            najczęściej wybieranych usług, która błyskawicznie zmienia sylwetkę
            każdego auta. W 2K Auto Detailing Opole podchodzimy do tego zadania
            bezkompromisowo – używamy folii, które nie tylko świetnie wyglądają,
            ale realnie poprawiają komfort jazdy, redukując oślepienie i
            nagrzewanie się wnętrza.
          </p>

          <h2 className={classes.subtitle}>
            Twoja prywatna strefa komfortu w podróży
          </h2>

          <p className={classes.description}>
            Dobra folia to nie tylko zmiana koloru szkła. To zaawansowany filtr,
            który doskonale uzupełnia profesjonalny{" "}
            <Link href="/blog/detailing-wnetrza-opole">detailing wnętrza</Link>.
            Nowoczesne powłoki potrafią zablokować niemal 100% szkodliwego
            promieniowania UV, co chroni nie tylko Twoją skórę, ale i delikatne
            materiały wykończeniowe kabiny przed płowieniem i pękaniem.
          </p>

          <p className={classes.description}>
            <strong>
              Odczuwalnie niższa temperatura to mniej pracy dla klimatyzacji.
            </strong>{" "}
            Dzięki redukcji przenikania energii słonecznej, wnętrze auta
            nagrzewa się znacznie wolniej. To ulga dla pasażerów na tylnej
            kanapie, szczególnie dzieci i zwierząt, które są bardziej wrażliwe
            na upał. Dodatkowo, mniejsze obciążenie kompresora klimatyzacji
            przekłada się na realne oszczędności w spalaniu paliwa.
          </p>

          <p className={classes.description}>
            <strong>Ochrona prywatności i cennych przedmiotów</strong> – czarna
            lub grafitowa szyba skutecznie skrywa to, co zostawiasz na siedzeniu
            czy w bagażniku. To prosta i skuteczna prewencja przed przypadkowymi
            kradzieżami. W razie wypadku folia pełni też rolę wzmocnienia –
            utrzymuje rozbitą szybę w całości, zapobiegając rozpryśnięciu się
            tysięcy odłamków szkła do środka.
          </p>

          <h3>Jakie technologie folii stosujemy w naszym studio?</h3>
          <ul>
            <li>
              <strong>Serie hybrydowe (wysoka trwałość):</strong> Klasyczny
              wybór łączący metalizowane warstwy z głębokim barwnikiem. Bardzo
              dobra redukcja ciepła i stabilność koloru przez wiele lat.
            </li>
            <li>
              <strong>Folie nanoceramiczne (najwyższa półka):</strong> Nie
              posiadają warstw metalu, dzięki czemu nie zakłócają działania
              GPS-u czy telefonu. Oferują fenomenalną blokadę podczerwieni przy
              zachowaniu idealnej przejrzystości od wewnątrz.
            </li>
            <li>
              <strong>Folie "Clear" UV Protection:</strong> Specjalistyczne
              folie na przednią szybę i szyby boczne przednie. Są niemal
              przezroczyste, więc nie rzucają się w oczy policji, a blokują 99%
              UV.
            </li>
            <li>
              <strong>Pełna paleta odcieni:</strong> Od delikatnego dymienia
              (50%), przez średnie (20%), aż po tzw. "limo black" (5%), które
              gwarantuje całkowitą dyskrecję.
            </li>
          </ul>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src={szybyImg}
            alt="Profesjonalne przyciemnianie szyb samochodowych foliami marki Solar Screen w Opolu"
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
          <h2>Dlaczego warto przyciemnić szyby w naszym studiu w Opolu?</h2>
          <p>
            Stawiamy na najwyższą jakość montażu i sprawdzone materiały. Nasze
            usługi to inwestycja w Twój komfort i bezpieczeństwo.
          </p>
          <ul>
            <li>
              <strong>Pisemna gwarancja na lata:</strong> Nasze folie nie
              blakną, nie odrywają się i nie tracą swoich właściwości. Otrzymasz
              certyfikat, który potwierdza najwyższą jakość usługi.
            </li>
            <li>
              <strong>Montaż bez demontażu boczków:</strong> W większości modeli
              pracujemy bezinwazyjnie, co eliminuje ryzyko późniejszego
              trzeszczenia elementów wnętrza.
            </li>
            <li>
              <strong>Najlepsze folie na rynku:</strong> Korzystamy z serii
              Beluga od Solar Screen – to folie o świetnych parametrach i
              neutralnym, głębokim kolorze.
            </li>
            <li>
              <strong>Ochrona klimatyzacji:</strong> Dzięki redukcji nagrzewania
              wnętrza, Twój system klimatyzacji pracuje lżej, co przekłada się
              na mniejsze zużycie paliwa.
            </li>
            <li>
              <strong>Profesjonalne studio:</strong> Pracujemy w czystym, dobrze
              oświetlonym pomieszczeniu, co jest kluczowe dla uniknięcia
              zabrudzeń pod folią.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Mega robota, oddałem auto na przyciemnianie szyb, praca
              wykonana starannie bez żadnych poprawek. Polecam każdemu komu
              zależy na jakości a nie na cenie, bo tu naprawdę znają się na
              rzeczy. Wrócę na pewno z kolejnym autem!&rdquo;
            </p>
            <footer>
              &mdash; <cite>Patryk Sz.</cite>
            </footer>
          </blockquote>

          <h3>Komfort i styl bez kompromisów</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Przyciemnianie szyb to jedna z tych modyfikacji, która cieszy za
              każdym razem, gdy wsiadasz do auta. To połączenie praktycznych
              zalet z eleganckim wyglądem.
            </p>
            <p className={classes.contentSection__textP}>
              Zapraszamy do kontaktu – dobierzemy odpowiedni stopień
              przyciemnienia do Twoich potrzeb i wykonamy montaż na najwyższym
              poziomie.
            </p>
          </div>
        </div>

        <div className={classes.contentSection__image}>
          <Image
            src={szybyImg2}
            alt="Specjalista 2K Auto Detailing podczas precyzyjnego montażu folii przyciemniającej na szybie"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* ✅ SEKCJA: CTA */}
      <section className={classes.callToActionSection}>
        <h2>Zobacz nasze realizacje – przyciemnianie szyb</h2>
        <p>
          Sprawdź, jak przyciemnione szyby zmieniają wygląd samochodu i poprawiają
          komfort podróżowania. W galerii znajdziesz zdjęcia aut z różnymi
          stopniami przyciemnienia.
        </p>
        <div className={classes.buttonWrapper}>
          <a
            href="/galeria/przyciemnianie-szyb"
            className={classes.buttonPrimary}
          >
            Przejdź do galerii przyciemniania szyb
          </a>
        </div>
      </section>

      {/* ✅ SEKCJA: FAQ */}
      <section className={classes.faqSection}>
        <h2>Najczęściej zadawane pytania o przyciemnianie szyb samochodowych w Opolu</h2>
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
