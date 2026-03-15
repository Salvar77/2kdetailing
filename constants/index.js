import autodetailingWnetrza from "../assets/images/2k-logo-black-biale-tlo.svg";
import autodetailing2 from "../assets/images/2k-logo-black-biale-tlo.svg";
import leatherrenovation from "../assets/images/2k-logo-black-biale-tlo.svg";
import paintcorrection from "../assets/images/2k-logo-black-biale-tlo.svg";
import ppf from "../assets/images/2k-logo-black-biale-tlo.svg";
import ceramic from "../assets/images/2k-logo-black-biale-tlo.svg";
import upholstery from "../assets/images/2k-logo-black-biale-tlo.svg";
import headlight from "../assets/images/2k-logo-black-biale-tlo.svg";
import tinting from "../assets/images/2k-logo-black-biale-tlo.svg";
import autoDetailingPakiet from "../assets/images/2k-logo-black-biale-tlo.svg";
import myjniaReczna from "../assets/images/2k-logo-black-biale-tlo.svg";
import blogPost from "../assets/images/2k-logo-black-biale-tlo.svg";
import blogPost2 from "../assets/images/2k-logo-black-biale-tlo.svg";
import blogPost3 from "../assets/images/2k-logo-black-biale-tlo.svg";
import blogPost4 from "../assets/images/2k-logo-black-biale-tlo.svg";
import blogPost5 from "../assets/images/2k-logo-black-biale-tlo.svg";

// Importy dla PPF - obrazy wygenerowane przez AI
import ppfFullFront from "../assets/images/ppf-full-front.png";
import ppfBikini from "../assets/images/ppf-bikini.png";
import ppfFullBody from "../assets/images/ppf-full-body.png";

export const servicesData = [
  {
    id: "oferta/korekta-lakieru",
    title: "Korekta lakieru",
    image: paintcorrection,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Korekta lakieru</strong> – usuwamy zmatowienia, rysy i hologramy, przywracając lakierowi głębię koloru oraz efekt lustrzanego odbicia. Pracujemy na profesjonalnych pastach, dobierając odpowiednią technikę do stanu powierzchni. Dzięki temu karoseria odzyskuje perfekcyjny połysk i świeży, salonowy wygląd.",
    relatedBlogPost: "/blog/korekta-lakieru-opole",
    altText:
      "Profesjonalne polerowanie auta w 2K Auto Detailing Opole – usuwanie rys i przywracanie blasku lakieru.",
  },
  {
    id: "oferta/powloka-ceramiczna",
    title: "Powłoka ceramiczna i elastomerowa",
    image: ceramic,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Powłoka ceramiczna i elastomerowa</strong> – najwyższej klasy tarcza ochronna. Zapewnia ekstremalną hydrofobowość, ułatwia mycie i chroni przed chemią oraz promieniowaniem UV.",
    relatedBlogPost: "/blog/powloka-ceramiczna-opole",
    altText:
      "Zabezpieczenie lakieru powłoką ceramiczną w Opolu – niesamowity połysk i ochrona karoserii.",
  },
  {
    id: "oferta/folia-ppf",
    title: "Zabezpieczenie folią PPF",
    image: ppf,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Folia PPF</strong> – pancerna ochrona przed odpryskami kamieni i zarysowaniami. Folia posiada właściwości samoregeneracyjne, dzięki którym powstałe drobne rysy ulegają niwelacji, a lakier pod spodem pozostaje w fabrycznym stanie przez długie lata.",
    relatedBlogPost: "/blog/folia-ppf-opole",
    altText:
      "Oklejanie samochodu bezbarwną folią ochronną PPF – 2K Auto Detailing Opole.",
  },
  {
    id: "oferta/pranie-tapicerki",
    title: "Pranie tapicerki",
    image: upholstery,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Pranie tapicerki</strong> – dogłębne czyszczenie ekstrakcyjne, które usuwa plamy, roztocza i nieprzyjemne wonie. Przywracamy świeżość i higienę wewnątrz Twojego samochodu.",
    relatedBlogPost: "/blog/pranie-tapicerki-opole",
    altText:
      "Ekstrakcyjne pranie foteli samochodowych – skuteczne usuwanie brudu i odświeżanie wnętrza.",
  },
  {
    id: "oferta/renowacja-skor",
    title: "Renowacja skór",
    image: leatherrenovation,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(90,42,42,.5), rgba(0,0,0,.5))",
    additionalInfo:
      "<strong>Renowacja skór</strong> – drugie życie Twojej tapicerki. Naprawiamy przetarcia, odświeżamy kolor i impregnujemy skóry, by zachowały miękkość i luksusowy wygląd na długo.",
    relatedBlogPost: "/blog/renowacja-skor-opole",
    altText:
      "Profesjonalne czyszczenie i odnawianie tapicerki skórzanej – system Colourlock w Opolu.",
  },
  {
    id: "oferta/detailing-wnetrza",
    title: "Detailing wnętrza",
    image: autodetailingWnetrza,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Detailing wnętrza</strong> – chirurgiczna precyzja w sprzątaniu. Czyścimy każdy przycisk, nawiew i szczelinę, zabezpieczając plastiki matowym, antystatycznym dressingiem.",
    relatedBlogPost: "/blog/detailing-wnetrza-opole",
    altText:
      "Kompleksowy detailing kabiny auta – pędzelkowanie detali i profesjonalna pielęgnacja wnętrza.",
  },
  {
    id: "oferta/regeneracja-reflektorow",
    title: "Regeneracja reflektorów",
    image: headlight,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Regeneracja reflektorów</strong> – przywracamy lampom fabryczną przejrzystość. Usuwamy zmatowienia i żółty nalot, poprawiając widoczność i Twoje bezpieczeństwo po zmroku.",
    relatedBlogPost: "/blog/auto-detailing-opole",
    altText:
      "Polerowanie lamp samochodowych i zabezpieczenie UV – renowacja zniszczonych reflektorów.",
  },
  {
    id: "oferta/przyciemnianie-szyb",
    title: "Przyciemnianie szyb",
    image: tinting,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Przyciemnianie szyb</strong> – popraw styl i komfort jazdy. Nasze folie redukują nagrzewanie wnętrza, blokują promienie UV i zapewniają prywatność Tobie oraz Twoim pasażerom.",
    relatedBlogPost: "/blog/auto-detailing-opole",
    altText:
      "Montaż folii przyciemniających na szyby samochodowe – elegancja i ochrona przeciwsłoneczna.",
  },
  {
    id: "oferta/auto-detailing",
    title: "Auto Detailing – pakiet kompleksowy",
    image: autoDetailingPakiet,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Auto Detailing – pakiet kompleksowy</strong> – totalna odnowa Twojego pojazdu. Łączymy najlepsze usługi zewnętrzne i wewnętrzne w jeden spójny proces, by osiągnąć efekt perfekcji.",
    relatedBlogPost: "/blog/auto-detailing-opole",
    altText:
      "Pełny pakiet auto detailingu – kompleksowa korekta i ochrona lakieru oraz detailing wnętrza.",
  },
  {
    id: "oferta/myjnia-reczna",
    title: "Myjnia Ręczna",
    image: myjniaReczna,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Myjnia ręczna</strong> – bezpieczne i precyzyjne mycie karoserii z dbałością o każdy detal. Stosujemy metodę na dwa wiadra, bezpieczną chemię o neutralnym pH oraz miękkie ręczniki z mikrofibry, co gwarantuje czystość bez ryzyka porysowania lakieru.",
    relatedBlogPost: "/blog/auto-detailing-opole",
    altText:
      "Profesjonalna myjnia ręczna w Opolu – bezpieczne mycie samochodu w 2K Auto Detailing.",
  },
];

export const exteriorServices = [
  // SEKCJA: MYCIE RĘCZNE (image_ce19ac.jpg)
  {
    id: "mycie-reczne-podstawowe",
    category: "Mycie Ręczne",
    title: "Mycie Ręczne Podstawowe",
    price: "50 zł",
    items: ["Oprysk wstępny", "Mycie ręczne karoserii", "Osuszanie karoserii"],
  },
  {
    id: "mycie-reczne-zaawansowane",
    category: "Mycie Ręczne",
    title: "Mycie Ręczne Zaawansowane",
    price: "79 zł",
    items: [
      "Oprysk wstępny",
      "Aktywna piana",
      "Mycie ręczne karoserii i felg",
      "Osuszanie karoserii",
    ],
  },
  {
    id: "mycie-reczne-premium",
    category: "Mycie Ręczne",
    title: "Mycie Ręczne Premium",
    price: "99 zł",
    items: [
      "Oprysk wstępny",
      "Aktywna piana",
      "Mycie ręczne karoserii, felg i wnęk drzwiowych",
      "Osuszanie karoserii",
      "Wosk syntetyczny",
      "Dressing na opony",
    ],
  },
  // SEKCJA: LAKIER I POWŁOKI (image_ce198d.jpg)
  {
    id: "polerowanie-lakieru",
    category: "Lakier i Ochrona",
    title: "Polerowanie Lakieru",
    prices: { small: "1000", medium: "1500", large: "1800" },
    items: ["Korekta lakieru", "Usunięcie zarysowań", "Przywrócenie blasku"],
  },
  {
    id: "powloka-2-lata",
    category: "Lakier i Ochrona",
    title: "Aplikacja Powłoki Ceramicznej",
    subtitle: "Trwałość 2 lata",
    prices: { small: "1600", medium: "2000", large: "2300" },
    items: [
      "Ochrona UV",
      "Twardość 9H",
      "Super hydrofobowość",
      "Aplikacja powłoki ceramicznej (Polerowanie lakieru i aplikacja powłoki ceramicznej)",
    ],
  },
  {
    id: "powloka-3-lata",
    category: "Lakier i Ochrona",
    title: "Aplikacja Powłoki Ceramicznej",
    subtitle: "Trwałość 3 lata",
    prices: { small: "1800", medium: "2100", large: "2300" },
    items: ["Maksymalna trwałość", "Głęboki połysk", "Najwyższa ochrona"],
  },
  {
    id: "hydrofobizacja-szyb",
    category: "Lakier i Ochrona",
    title: "Hydrofobizacja Szyb",
    subtitle: "Niewidzialna wycieraczka",
    prices: { small: "150", medium: "200", large: "250" },
    extraPrice: { label: "Komplet szyb", value: "400" },
    items: ["Lepsza widoczność w deszczu", "Łatwiejsze usuwanie owadów"],
  },
  {
    id: "przyciemnianie-szyb",
    category: "Szyby",
    title: "Przyciemnianie Szyb",
    prices: { small: "550", medium: "600", large: "700" },
    items: [
      "Folie premium z filtrem UV",
      "Redukcja nagrzewania wnętrza",
      "Prywatność i styl",
      "Gwarancja na montaż",
    ],
  },
  {
    id: "mycie-detailingowe-wosk",
    category: "Mycie Ręczne",
    title: "Mycie Detailingowe z Woskiem",
    prices: { small: "150", medium: "200", large: "250" },
    items: [
      "Kompleksowe mycie zewnętrzne",
      "Dekontaminacja lakieru",
      "Aplikacja twardego wosku syntetycznego",
      "Dressing na plastiki i opony",
    ],
  },
];

export const interiorServices = [
  // SEKCJA: WNĘTRZE (image_ce196f.jpg)
  {
    id: "detailing-wnetrza",
    title: "Detailing Wnętrza",
    prices: { small: "250", medium: "300", large: "350" },
    items: [
      "Dokładne odkurzanie",
      "Pędzelkowanie detali",
      "Czyszczenie i konserwacja plastików",
      "Mycie szyb od wewnątrz",
    ],
  },
  {
    id: "pranie-foteli",
    title: "Pranie Foteli Materiałowych",
    subtitle: "5 miejsc siedzących",
    prices: { small: "250", medium: "250", large: "250" },
  },
  {
    id: "impregnacja-foteli",
    title: "Impregnacja Foteli Materiałowych",
    prices: { small: "200", medium: "200", large: "200" },
  },
  {
    id: "czyszczenie-tapicerki-skorzanej",
    title: "Czyszczenie Tapicerki Skórzanej",
    prices: { small: "300", medium: "350", large: "400" },
    items: [
      "Czyszczenie dedykowaną chemią",
      "Konserwacja odżywką",
      "Ochrona UV",
    ],
  },
  {
    id: "pranie-podlogi",
    title: "Pranie Podłogi",
    prices: { small: "150", medium: "200", large: "250" },
  },
];

export const ppfPackages = [
  {
    id: "ppf-bikini",
    title: "Pakiet Bikini",
    image: ppfBikini,
    price: "2500",
    protectionLevel: 3,
    durability: "10 lat",
    time: "1 dzień roboczy",
    description:
      "Zabezpieczenie folią PPF elementów auta, które w szczególny sposób narażone są na uszkodzenia (wybrane części maski, zderzaka, błotników itp.).",
  },
  {
    id: "ppf-full-front",
    title: "Pakiet Full Front",
    image: ppfFullFront,
    price: "6000",
    protectionLevel: 4,
    durability: "10 lat",
    time: "2-3 dni robocze",
    description:
      "Zabezpieczenie przedniej części auta folią PPF samoregenerującą i o właściwościach hydrofobowych. W cenie usługi na resztę samochodu powłoka ecoating (5 letnia) i również powłoka na felgi i na szyby.",
  },
  {
    id: "ppf-full-body",
    title: "Pakiet Full (cały samochód)",
    image: ppfFullBody,
    price: "9000",
    protectionLevel: 5,
    durability: "10 lat",
    time: "4-5 dni roboczych",
    description:
      "Zabezpieczenie całego lakieru auta folią bezbarwną folią ochronną PPF – samoregenerującą i o właściwościach hydrofobowych. W cenie usługi na resztę samochodu powłoka ecoating (5 letnia) i również powłoka na felgi i na szyby.",
  },
  {
    id: "ppf-reflektory",
    title: "Zabezpieczenie reflektorów (PPF)",
    image: headlight,
    price: "500",
    protectionLevel: 3,
    durability: "10 lat",
    time: "1 dzień roboczy",
    description:
      "Pancerna ochrona reflektorów przed piaskowaniem, promieniami UV oraz odpryskami od kamieni. Zapobiega matowieniu i żółknięciu kloszy.",
  },
];

export const blogPosts = [
  {
    id: 7,
    title:
      "Kompleksowe usługi auto detailingu w Opolu – pakiet usług od A do Z",
    subtitle: "AUTO DETAILING",
    date: "2026-03-03",
    description:
      "Wybierz bezkompromisowe rozwiązanie. Pełny pakiet auto detailingu, w którym łączymy renowację lakieru ze sterylnym czyszczeniem wnętrza, gwarantując najwyższy standard estetyki Twojego samochodu.",
    link: "/blog/auto-detailing-opole",
    image: autodetailing2,
  },
  {
    id: 1,
    title:
      "Detailing wnętrza w Opolu – kompleksowa pielęgnacja plastików i tapicerki",
    subtitle: "PIELĘGNACJA WNĘTRZA",
    date: "2026-03-02",
    description:
      "Profesjonalne odświeżenie kabiny. Skrupulatnie oczyszczamy tapicerkę, dywaniki oraz trudnodostępne miejsca, przywracając elementom syntetycznym dawny mat i zapach nowości.",
    link: "/blog/detailing-wnetrza-opole",
    image: blogPost,
  },
  {
    id: 2,
    title:
      "Pranie tapicerki w Opolu – usuń uporczywe plamy i nieprzyjemne zapachy",
    subtitle: "PRANIE TAPICERKI",
    date: "2026-03-01",
    description:
      "Zaoszczędź czas i zdrowie dzięki dogłębnemu praniu metodą ekstrakcyjną. Skutecznie usuwamy najtrudniejsze plamy, uciążliwe smugi oraz osadzone w gąbkach nieprzyjemne zapachy.",
    link: "/blog/pranie-tapicerki-opole",
    image: upholstery,
  },
  {
    id: 3,
    title:
      "Renowacja i czyszczenie skórzanej tapicerki w Opolu – przywróć jej blask",
    subtitle: "RENOWACJA SKÓRZANEJ TAPICERKI",
    date: "2026-02-28",
    description:
      "Dedykowane zabiegi systemami Colourlock. Przywracamy świetność wypłowiałym fotelom skórzanym, maskując przetarcia i regenerując wysuszone elementy do standardów fabrycznych.",
    link: "/blog/renowacja-skor-opole",
    image: blogPost2,
  },
  {
    id: 4,
    title: "Korekta lakieru samochodowego w Opolu – odzyskaj fabryczny połysk",
    subtitle: "KOREKTA LAKIERU",
    date: "2026-02-26",
    description:
      "Wieloetapowe polerowanie karoserii dla wymagających. Skutecznie odzyskujemy nieskazitelne lustrzane odbicie, usuwając drobne rysy parkingowe i głębokie hologramy z lakieru.",
    link: "/blog/korekta-lakieru-opole",
    image: blogPost3,
  },
  {
    id: 5,
    title:
      "Powłoka ceramiczna samochodu w Opolu – trwałe zabezpieczenie lakieru i efekt hydrofobowy",
    subtitle: "POWŁOKA CERAMICZNA",
    date: "2026-02-24",
    description:
      "Najlepsza ochrona płynna na rynku. Nasze powłoki gwarantują spektakularną hydrofobowość na szybach i karoserii, drastycznie ograniczając osadzanie się szkodliwych kwasów.",
    link: "/blog/powloka-ceramiczna-opole",
    image: blogPost5,
  },
  {
    id: 6,
    title: "Folia PPF w Opolu – ostateczna zbroja Twojego auta",
    subtitle: "FOLIA OCHRONNA PPF",
    date: "2026-02-21",
    description:
      "Całkowicie transparentne bezpieczeństwo od uderzeń z drogi. Odkryj moc ochronnej powłoki poliuretanowej o grubości mikronów, osłaniając lakier przed kamieniami.",
    link: "/blog/folia-ppf-opole",
    image: blogPost4,
  },
];
