import EventPageClient from "./EventPageClient";

export const metadata = {
  title: "Obsługa Eventów Motoryzacyjnych i Targów – Silesia Ring, Opole",
  description:
    "Profesjonalna obsługa eventów motoryzacyjnych, track days na torze Silesia Ring (Kamień Śląski, opolskie), targów i premier dealerskich. Mobilny auto detailing: własny sprzęt, mycie No Rinse i namioty.",
  alternates: {
    canonical: "/obsluga-eventow",
  },
  openGraph: {
    url: "/obsluga-eventow",
    title:
      "Obsługa Eventów Motoryzacyjnych i Targów – 2K Auto Detailing Opole",
    description:
      "Mobilny auto detailing na torze Silesia Ring (Kamień Śląski, woj. opolskie), premierach aut i targach w Polsce. Własny profesjonalny sprzęt, namioty i technologia No Rinse.",
    images: [
      {
        url: "/images/obsluga-eventow-2k-detailing-silesia-ring.webp",
        width: 1200,
        height: 675,
        alt: "Obsługa eventów motoryzacyjnych i targów - 2K Auto Detailing Opole",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Obsługa Eventów Motoryzacyjnych i Targów – 2K Auto Detailing Opole",
    description:
      "Mobilny auto detailing na torze Silesia Ring (opolskie), targach i premierach samochodowych. Własny sprzęt, ręczne mycie i technologia No Rinse.",
    images: ["/images/obsluga-eventow-2k-detailing-silesia-ring.webp"],
  },
};

const faqData = [
  {
    question: "Czym jest profesjonalna obsługa eventów motoryzacyjnych przez 2K Detailing?",
    answer:
      "Obsługa eventów to mobilne wsparcie detailingowe na miejscu wydarzenia – na torach wyścigowych (m.in. Tor Silesia Ring w Kamieniu Śląskim, woj. opolskie), targach motoryzacyjnych, premierach w salonach dealerskich, zlotach supersamochodów oraz imprezach firmowych. Nasz zespół dba o nienaganny stan wizualny aut przed startem, w trakcie trwania imprezy (usuwanie gumy z opon, pyłu hamulcowego, odcisków palców zwiedzających) oraz po zakończeniu jazd.",
  },
  {
    question: "Jakie warunki techniczne musi zapewnić organizator na miejscu?",
    answer:
      "Jesteśmy w pełni przygotowani na specyfikę wystaw, targów oraz padoków torowych. Przywozimy własny profesjonalny sprzęt detailingowy, namioty serwisowe oraz mobilne oświetlenie LED. Na halach wystawowych i stoiskach targowych stosujemy również bezpieczną metodę bez spłukiwania (No Rinse), dzięki czemu nie wymagamy odpływów wody ani skomplikowanych przyłączy od organizatora.",
  },
  {
    question: "Jakie wydarzenia i tory obsługujecie najczęściej?",
    answer:
      "Dzięki lokalizacji w Opolu regularnie obsługujemy wydarzenia na pobliskim torze Silesia Ring w Kamieniu Śląskim (woj. opolskie). Ponadto obsługujemy track days, zloty supersamochodów (Ferrari, Porsche, BMW M, Lamborghini), premiery nowych modeli w autoryzowanych salonach dealerskich, targi motoryzacyjne w centrach wystawienniczych oraz ekspozycje aut w galeriach handlowych na terenie Opola, Śląska, Wrocławia i całej Polski.",
  },
  {
    question: "Co obejmuje bieżąca opieka nad autami w trakcie trwania imprezy?",
    answer:
      "W trakcie eventu detailerzy 2K Detailing czuwają nieprzerwanie nad czystością pojazdów: błyskawicznie usuwają odciski palców i smugi po zwiedzających, odświeżają lakier dedykowanymi quick detailerami z efektem wet-look, aplikują dressing na opony oraz przecierają szyby. Na torach wyścigowych usuwamy przypaloną gumę torową (marbles), smołę, pył ze sportowych klocków oraz owady między kolejnymi sesjami.",
  },
  {
    question: "Czy oferujecie pokazy live detailingu i prezentacje dla gości?",
    answer:
      "Tak! Pokazy live detailingu to jedna z najpopularniejszych atrakcji przyciągających publiczność do stoiska. Wykonujemy na żywo demonstracje maszynowej korekty lakieru pod specjalistycznymi lampami, aplikację powłok ceramicznych oraz widowiskowe testy ekstremalnej hydrofobowości z udziałem gości i klientów.",
  },
  {
    question: "Czy usługa jest mobilna i realizowana poza Opolem?",
    answer:
      "Tak, usługa ma charakter w pełni mobilny. Baza mieści się w Opolu, tuż obok autostrady A4 i toru Silesia Ring (Kamień Śląski). Regularnie obsługujemy wydarzenia na terenie województwa opolskiego, Górnego Śląska (Katowice, Gliwice), Dolnego Śląska (Wrocław) oraz w dowolnej lokalizacji w Polsce.",
  },
  {
    question: "Z jakim wyprzedzeniem należy dokonać rezerwacji terminu?",
    answer:
      "Ze względu na dynamiczny kalendarz imprez motoryzacyjnych i weekendowych track days, rekomendujemy kontakt z wyprzedzeniem co najmniej 2–4 tygodni. W przypadku większych targów lub kilkudniowych eventów termin warto ustalić z miesięcznym wyprzedzeniem, aby precyzyjnie zaplanować skład zespołu i zaplecze logistyczne.",
  },
  {
    question: "Jak wygląda wycena obsługi eventu lub targów?",
    answer:
      "Każdą obsługę wyceniamy indywidualnie w zależności od liczby powierzonych samochodów, czasu trwania wydarzenia (liczba godzin lub dni), lokalizacji oraz zakresu prac (bieżący quick detailing, pełne przygotowanie przedeventowe, pokazy live). Skontaktuj się z nami telefonicznie pod numerem 797 234 734 lub przez formularz, a przygotujemy przejrzystą ofertę w ciągu 24h.",
  },
];

export default function ObslugaEventowPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.2kdetailing.opole.pl/obsluga-eventow",
    name: "Obsługa Eventów Motoryzacyjnych i Targów",
    serviceType: "Mobilny Auto Detailing na Eventach i Torach Wyścigowych",
    description:
      "Kompleksowa obsługa detailingowa wydarzeń motoryzacyjnych, track days na torze Silesia Ring w Kamieniu Śląskim (woj. opolskie), targów samochodowych i premier dealerskich. Własny profesjonalny sprzęt, ręczne mycie aut, usuwanie gumy torowej i pyłu hamulcowego oraz technologia No Rinse.",
    provider: {
      "@id": "https://www.2kdetailing.opole.pl/#business",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Opole",
      },
      {
        "@type": "Place",
        name: "Tor Silesia Ring (Kamień Śląski, woj. opolskie)",
      },
      {
        "@type": "AdministrativeArea",
        name: "Województwo Opolskie",
      },
      {
        "@type": "AdministrativeArea",
        name: "Województwo Śląskie",
      },
      {
        "@type": "AdministrativeArea",
        name: "Województwo Dolnośląskie",
      },
      {
        "@type": "Country",
        name: "Polska",
      },
    ],
    url: "https://www.2kdetailing.opole.pl/obsluga-eventow",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona Główna",
        item: "https://www.2kdetailing.opole.pl/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Obsługa Eventów Motoryzacyjnych",
        item: "https://www.2kdetailing.opole.pl/obsluga-eventow",
      },
    ],
  };

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Audi Driving Experience 2026 – Silesia Ring Kamień Śląski | 2K Detailing",
    description:
      "Bieżąca opieka nad autami sportowymi w alei serwisowej Toru Silesia Ring: ręczne mycie samochodów, usuwanie gumy torowej, pyłu hamulcowego oraz mycie szyb.",
    thumbnailUrl: [
      "https://www.2kdetailing.opole.pl/images/obsluga-audi-driving-experience-silesia-ring.webp",
    ],
    uploadDate: "2026-10-18T10:00:00+02:00",
    embedUrl: "https://www.youtube-nocookie.com/embed/IKlKxru2Eko",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <main>
        <EventPageClient faqData={faqData} />
      </main>
    </>
  );
}
