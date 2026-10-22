"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import AnimatedButton from "../../components/More/AnimatedButton";
import {
  FaBolt,
  FaWater,
  FaFlagCheckered,
  FaGem,
  FaTrophy,
  FaCheckCircle,
  FaPlay,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
  FaTools,
  FaShieldAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import classes from "./page.module.scss";

// ================= SCROLL REVEAL (blur -> ostrość, stagger) =================
const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, amount: 0.2 };

// filter resetujemy do "none" po animacji, żeby nie psuć backdrop-filter w kartach
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE, delay },
    transitionEnd: { filter: "none" },
  }),
};

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const headerChild = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
    transitionEnd: { filter: "none" },
  },
};

// Wrapper animuje się zamiast samej karty – CSS :hover (translateY) zostaje nietknięty
function Reveal({ children, className, delay = 0, amount }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={amount ? { ...VIEWPORT, amount } : VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ badge, children, text }) {
  return (
    <motion.div
      className={classes.sectionHeader}
      variants={headerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.span className={classes.sectionHeader__badge} variants={headerChild}>
        {badge}
      </motion.span>
      <motion.h2 variants={headerChild}>{children}</motion.h2>
      <motion.p variants={headerChild}>{text}</motion.p>
    </motion.div>
  );
}

// Opóźnienie w obrębie rzędu – na desktopie karty wjeżdżają kaskadowo
const stagger = (idx, perRow) => (idx % perRow) * 0.12;

export default function EventPageClient({ faqData }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Video list - single active real video showcase
  const videos = [
    {
      id: "video-1",
      title: "Audi Driving Experience 2026 – Silesia Ring Kamień Śląski",
      desc: "Bieżąca opieka nad autami sportowymi w alei serwisowej Toru Silesia Ring: ręczne mycie samochodów, usuwanie gumy torowej, pyłu hamulcowego oraz mycie szyb.",
      thumbnail: "/images/obsluga-audi-driving-experience-silesia-ring.webp",
      duration: "Short",
      youtubeId: "IKlKxru2Eko",
      tag: "Tor Silesia Ring",
      isShort: true,
    },
  ];

  const pillars = [
    {
      icon: <FaTools />,
      title: "Własny Sprzęt i Mobilność",
      desc: "Jesteśmy w pełni przygotowani do obsługi hal wystawowych, salonów i padoków torowych. Przywozimy własny profesjonalny sprzęt detailingowy, namioty serwisowe, oświetlenie inspekcyjne oraz bezpieczną chemię pH-neutral.",
    },
    {
      icon: <FaFlagCheckered />,
      title: "Tor Silesia Ring & Cała Polska",
      desc: "Nasza baza mieści się w Opolu – tuż obok najnowocześniejszego toru Silesia Ring (Kamień Śląski, woj. opolskie). Dojeżdżamy na każdy tor, obiekt targowy czy salon w Polsce.",
    },
    {
      icon: <FaGem />,
      title: "Perfekcyjny Show-Car Look",
      desc: "Ręczne mycie samochodów, usuwanie przypalonej gumy torowej, pyłu hamulcowego i odcisków palców. Gwarantujemy spektakularny połysk pod oświetlenie wystawowe.",
    },
    {
      icon: <FaTrophy />,
      title: "Sprawdzone Doświadczenie",
      desc: "Obsługujemy wydarzenia motoryzacyjne takie jak Audi Driving Experience 2026, track days oraz premiery dealerskie prestiżowych marek (BMW, Porsche, Audi).",
    },
  ];

  const services = [
    {
      tag: "Tory Wyścigowe & Track Days",
      title: "Obsługa Torowa (Silesia Ring i inne tory)",
      desc: "Podczas jazdy na limicie karoseria i felgi narażone są na ekstremalne zabrudzenia. Nasz zespół dba o stan pojazdów na bieżąco w alei serwisowej i padoku.",
      features: [
        "Bezpieczne usuwanie przypalonej gumy torowej (marbles/rubber) z lakieru i folii PPF",
        "Dokładne doczyszczanie felg z rozgrzanego pyłu hamulcowego (także tarcze ceramiczne)",
        "Ręczne mycie samochodów oraz precyzyjne mycie szyb dla maksymalnej widoczności",
        "Inspekcja stanu powłok ochronnych i folii zabezpieczających po sesjach na torze",
      ],
      time: "Dedykowany boks / padok",
    },
    {
      tag: "Targi & Centra Handlowe",
      title: "Obsługa Targów Motoryzacyjnych i Wystaw",
      desc: "Tysiące zwiedzających dotykających auta to wyzwanie dla każdego wystawcy. Zapewniamy nienaganny wygląd ekspozycji od pierwszej do ostatniej minuty wydarzenia.",
      features: [
        "Mycie aut innowacyjną metodą bez spłukiwania (No Rinse) – w 100% bezpieczną dla lakieru (idealne na hale)",
        "Kompleksowe przygotowanie aut przed otwarciem bram (one-step, wosk, quick detailer)",
        "Stały dyżur detailera – bieżące usuwanie odcisków palców i smug z lakieru i szyb",
        "Detailing wnętrza: odkurzanie, pielęgnacja tapicerki i usuwanie kurzu z ekranów",
      ],
      time: "Ciągły nadzór podczas targów",
    },
    {
      tag: "Salony Dealerskie & Premiery",
      title: "Premiery Samochodowe & Floty Marketingowe",
      desc: "Premiera nowego modelu lub prezentacja dla dziennikarzy wymaga absolutnego braku jakichkolwiek hologramów i smug pod mocnym światłem studyjnym.",
      features: [
        "Wydobycie głębi koloru i maksymalnego refleksu lakieru (wet look)",
        "Precyzyjne odtłuszczenie i nałożenie wosków show-car lub powłok hydrofobowych",
        "Opieka nad flotami samochodów testowych (co-drives) między kolejnymi jazdami",
        "Dbałość o detale: wyczyszczone wnęki, perfekcyjne szyby bez refleksów pod kamery",
      ],
      time: "Pod flesze aparatów i reflektory",
    },
    {
      tag: "Edukacja & Marketing",
      title: "Live Detailing – Pokazy na Żywo dla Gości",
      desc: "Chcesz przyciągnąć tłumy do swojego stoiska na evencie? Pokaz profesjonalnego detailingu na żywo to widowiskowa atrakcja budująca autorytet marki.",
      features: [
        "Prezentacje maszynowej korekty lakieru i usuwania rys pod lampami inspekcyjnymi",
        "Pokazy aplikacji powłok ceramicznych z natychmiastowym testem hydrofobowości",
        "Praktyczne warsztaty i porady dotyczące prawidłowej pielęgnacji aut dla gości",
        "Prestiżowa strefa partnerska z profesjonalnym sprzętem i oświetleniem 2K Detailing",
      ],
      time: "Atrakcja przyciągająca publiczność",
    },
  ];

  const galleryItems = [
    {
      src: "/images/kamil-2k-detailing-audi-rs5-silesia-ring.webp",
      title: "Kamil & Audi RS5 – Audi Driving Experience",
      subtitle: "Silesia Ring • Perfekcyjny finisz i wet-look",
      alt: "Kamil z 2K Detailing przy czerwonym Audi RS5 na evencie Audi Driving Experience na torze Silesia Ring",
    },
    {
      src: "/images/kamil-2k-detailing-mycie-reczne-no-rinse-silesia-ring.webp",
      title: "Mycie Ręczne Bez Spłukiwania (No Rinse)",
      subtitle: "Padok Silesia Ring • Bezpieczna pielęgnacja",
      alt: "Kamil z 2K Detailing wykonujący mycie ręczne Audi RS metodą No Rinse w alei serwisowej",
    },
    {
      src: "/images/obsluga-eventowa-audi-driving-experience-mycie-kol-i-lakieru.webp",
      title: "Zespół 2K Detailing w Akcji Serwisowej",
      subtitle: "Boks Silesia Ring • Mycie kół i lakieru",
      alt: "Zespół 2K Detailing podczas mycia kół i karoserii Audi RS w boksie toru Silesia Ring",
    },
    {
      src: "/images/boks-serwisowy-09-silesia-ring-audi-driving-experience.webp",
      title: "Boks Serwisowy 09 – Silesia Ring",
      subtitle: "Przygotowanie floty Audi RS do sesji na torze",
      alt: "Boks serwisowy 09 na torze Silesia Ring podczas imprezy Audi Driving Experience",
    },
    {
      src: "/images/audi-driving-experience-reczne-wycieranie-audi-rs.webp",
      title: "Ręczne Osuszanie & Wykończenie Mikrofibrą",
      subtitle: "Audi RS5 • Dbałość o każdy detal karoserii",
      alt: "Ręczne osuszanie i doczyszczanie tylnej klapy Audi RS5 mikrofibrą przez zespół 2K Detailing",
    },
    {
      src: "/images/doczyszczanie-szyb-audi-rs5-tor-silesia-ring.webp",
      title: "Precyzyjne Mycie Szyb & Widoczność",
      subtitle: "Silesia Ring • Bezpieczeństwo i brak smug",
      alt: "Precyzyjne mycie szyb bocznych w Audi RS5 przed wyjazdem na tor Silesia Ring",
    },
    {
      src: "/images/mycie-szyb-audi-rs-silesia-ring-2k-detailing.webp",
      title: "Obsługa Floty w Boksach Garażowych",
      subtitle: "Audi Driving Experience • Flota Audi RS",
      alt: "Obsługa detailingowa i czyszczenie floty Audi RS w boksach toru Silesia Ring",
    },
    {
      src: "/images/audi-rs-show-car-look-wet-look-silesia-ring.webp",
      title: "Show-Car Look: Carbon, Lakier & Detale",
      subtitle: "Audi RS • Głęboki połysk pod okiem instruktorów",
      alt: "Zbliżenie na lakier, carbon i tablicę Audi Driving Experience na torze Silesia Ring",
    },
    {
      src: "/images/mobilne-stanowisko-detailingowe-audi-rs-silesia-ring.webp",
      title: "Mobilne Stanowisko Serwisowe w Boksie",
      subtitle: "Własny sprzęt detailingowy i wiadra Rinse",
      alt: "Mobilne stanowisko detailingowe 2K Detailing w garażu toru Silesia Ring",
    },
    {
      src: "/images/audi-driving-experience-silesia-ring-budynek.webp",
      title: "Tor Silesia Ring – Budynek Główny",
      subtitle: "Kamień Śląski • Audi Driving Experience",
      alt: "Napis Audi Driving Experience na budynku toru wyścigowego Silesia Ring w Kamieniu Śląskim",
    },
    {
      src: "/images/obsluga-targow-premier-detailing.webp",
      title: "Targi i Premiery Motoryzacyjne",
      subtitle: "Hale wystawowe • Stała opieka nad ekspozycją",
      alt: "Obsługa targów motoryzacyjnych i salonów dealerskich przez 2K Detailing",
    },
    {
      src: "/images/obsluga-eventow-2k-detailing-silesia-ring.webp",
      title: "Pit Lane & Padok – Silesia Ring",
      subtitle: "Opieka nad supersamochodami na torze",
      alt: "Aleja serwisowa i padok toru Silesia Ring w Kamieniu Śląskim",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
    <div className={classes.eventPage}>
      <div className={classes.ambientGlow} />
      <div className={classes.ambientGlow2} />
      <div className={classes.ambientGlow3} />
      <div className={classes.racingBeam1} />
      <div className={classes.racingBeam2} />

      {/* ================= HERO SECTION ================= */}
      <section className={classes.hero}>
        <Image
          src="/images/obsluga-eventow-2k-detailing-silesia-ring.webp"
          alt="Obsługa eventów motoryzacyjnych i targów - 2K Auto Detailing Opole na torze wyścigowym Silesia Ring"
          fill
          priority
          className={classes.hero__bg}
        />
        <div className={classes.hero__overlay} />

        <div className={classes.hero__content}>
          <div className={classes.hero__badge}>
            <span className={classes.hero__badgeText}>
              <FaFlagCheckered className={classes.hero__badgeIcon} /> 2K Auto Detailing • Silesia Ring • Cała Polska
            </span>
          </div>

          <h1 className={classes.hero__title}>
            Profesjonalna Obsługa <span>Eventów Motoryzacyjnych</span> i Targów
          </h1>

          <p className={classes.hero__lead}>
            Mobilna opieka detailingowa na torach wyścigowych (w tym <strong>Silesia Ring</strong> w Kamieniu Śląskim),
            premierach dealerskich, targach motoryzacyjnych oraz zlotach supersamochodów
            (m.in. <strong>Audi Driving Experience</strong>). Jesteśmy w pełni przygotowani na eventy i wystawy – posiadamy
            własny profesjonalny sprzęt i dbamy o nienaganny stan powierzonych aut.
          </p>

          <div className={classes.hero__actions}>
            <AnimatedButton href="tel:+48797234734" className={classes.heroBtnAnimated}>
              <FaPhoneAlt className={classes.btnIcon} />
              <span>Zadzwoń: 797 234 734</span>
            </AnimatedButton>
            <a href="#oferta" className={classes.hero__btnSecondary}>
              <FaTools /> Zobacz zakres usług
            </a>
          </div>

          <div className={classes.hero__stats}>
            <div className={classes.hero__statItem}>
              <strong>Mobilność</strong>
              <span>Własny profesjonalny sprzęt na eventy</span>
            </div>
            <div className={classes.hero__statItem}>
              <strong>Silesia Ring</strong>
              <span>Baza w Opolu – dojazd w całej Polsce</span>
            </div>
            <div className={classes.hero__statItem}>
              <strong>Show-Car</strong>
              <span>Perfekcyjny wet look i ochrona lakieru</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PILLARS / ATUTY ================= */}
      <section className={classes.pillarsSection}>
        <div className={classes.pillarBeam1} />
        <div className={classes.pillarBeam2} />
        <div className={classes.pillarGlowLeft} />
        <div className={classes.pillarGlowRight} />
        <div className={classes.giantWatermark}>2K MOTORSPORT • TRACK SERVICE</div>

        <div className={classes.sectionContainer}>
          <SectionHeader
            badge="Dlaczego 2K Detailing?"
            text="Event motoryzacyjny wymaga niezawodności i najwyższego standardu estetycznego. Wchodzimy na obiekt w pełni wyposażeni – zdejmujemy z organizatora wszelkie troski o stan wizualny aut."
          >
            Kompleksowe wsparcie dla <span>Twojego Wydarzenia</span>
          </SectionHeader>

          <div className={classes.pillarsGrid}>
            {pillars.map((p, idx) => (
              <Reveal key={idx} className={classes.revealItem} delay={stagger(idx, 4)}>
                <div className={classes.pillarCard}>
                  <div className={classes.pillarCard__icon}>{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES / SCOPE ================= */}
      <section id="oferta" className={classes.sectionContainer}>
        <SectionHeader
          badge="Nasza Oferta Eventowa"
          text="Dostosowujemy zakres prac do specyfiki wydarzenia: od dynamicznych sesji na torze, przez eleganckie gale i premiery, aż po wielotysięczne targi motoryzacyjne."
        >
          Co możemy zaoferować <span>na Twoim Evencie?</span>
        </SectionHeader>

        <div className={classes.servicesGrid}>
          {services.map((s, idx) => (
            <Reveal key={idx} className={classes.revealItem} delay={stagger(idx, 2)} amount={0.15}>
            <div className={classes.serviceCard}>
              <div className={classes.serviceCard__header}>
                <span className={classes.serviceTag}>{s.tag}</span>
                <h3>{s.title}</h3>
              </div>
              <div className={classes.serviceCard__body}>
                <p>{s.desc}</p>
                <ul>
                  {s.features.map((f, fIdx) => (
                    <li key={fIdx}>
                      <FaCheckCircle />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={classes.serviceCard__footer}>
                <span>{s.time}</span>
                <a href="tel:+48797234734" className={classes.serviceCard__cta}>
                  <span>Zapytaj o ten pakiet</span>
                  <span className={classes.serviceCard__arrow}>&rarr;</span>
                </a>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* ================= INFRASTRUCTURE HIGHLIGHT ================= */}
        <Reveal amount={0.15}>
        <div className={classes.infraBox}>
          <div className={classes.infraBox__content}>
            <h3>
              Pełne Przygotowanie na Eventy. <span>Własny Profesjonalny Sprzęt.</span>
            </h3>
            <p>
              Wchodzimy na obiekt w pełni zorganizowani i wyposażeni. Jesteśmy przygotowani
              do pracy w padokach torów wyścigowych, salonach dealerskich oraz halach wystawowych.
              Dysponujemy kompletnym mobilnym stanowiskiem, profesjonalnym sprzętem oraz
              nowoczesną technologią bezpiecznego mycia bez spłukiwania (No Rinse).
            </p>
            <ul className={classes.infraBox__list}>
              <li><FaCheckCircle /> Ręczne mycie samochodów & technologia No Rinse (bezpieczna dla lakieru)</li>
              <li><FaTools /> Skuteczne usuwanie gumy torowej i pyłu hamulcowego</li>
              <li><FaGem /> Precyzyjne mycie szyb bez smug i refleksów</li>
              <li><FaShieldAlt /> Namioty serwisowe 2K Detailing</li>
              <li><FaGem /> Mobilne oświetlenie inspekcyjne LED</li>
              <li><FaCheckCircle /> Bezpieczna, certyfikowana chemia pH-neutral i quick detailery</li>
            </ul>
          </div>
          <div className={classes.infraBox__image}>
            <Image
              src="/images/mobilny-sprzet-detailing-eventy.webp"
              alt="Profesjonalny sprzęt i mobilne stanowisko detailingowe 2K Detailing na evencie motoryzacyjnym"
              fill
            />
          </div>
        </div>
        </Reveal>
      </section>

      {/* ================= VIDEO SHOWCASE ================= */}
      <section className={classes.videoSection}>
        <div className={classes.sectionContainer}>
          <SectionHeader
            badge="Wideo & Realizacje"
            text="Prezentacja wideo z wydarzeń motoryzacyjnych i opieki nad supersamochodami. Kliknij, aby obejrzeć relację z padoku i targów."
          >
            Zobacz naszą pracę <span>w akcji</span>
          </SectionHeader>

          <div className={classes.videoGrid}>
            {videos.map((v) => (
              <Reveal key={v.id}>
              <div className={classes.videoCard}>
                <div
                  className={classes.videoThumbnail}
                  onClick={() => setActiveVideo(v)}
                >
                  <Image src={v.thumbnail} alt={v.title} fill />
                  <div className={classes.videoThumbnail__overlay}>
                    <div className={classes.videoThumbnail__playBtn}>
                      <FaPlay />
                    </div>
                  </div>
                  <span className={classes.videoThumbnail__badge}>{v.tag}</span>
                </div>
                <div className={classes.videoMeta}>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className={classes.videoModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <div
              className={`${classes.videoModal__wrapper} ${
                activeVideo.isShort ? classes.isShort : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={classes.videoModal__closeBtn}
                onClick={() => setActiveVideo(null)}
                aria-label="Zamknij wideo"
              >
                <FaTimes />
              </button>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= GALLERY SECTION ================= */}
      <section className={classes.sectionContainer}>
        <SectionHeader
          badge="Fotorelacja"
          text="Wybrane ujęcia z torów wyścigowych, zlotów supersamochodów i hal wystawowych. Galeria jest na bieżąco uzupełniana o kolejne realizacje zespołu 2K Detailing."
        >
          Galeria <span>z Obsługi Eventów</span>
        </SectionHeader>

        <div className={classes.galleryGrid}>
          {galleryItems.map((item, idx) => (
            <Reveal key={idx} className={classes.revealItem} delay={stagger(idx, 3)}>
            <div
              className={classes.galleryCard}
              onClick={() => setActiveImage(item)}
            >
              <Image
                src={item.src}
                alt={item.alt || item.title}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
              <div className={classes.galleryCard__overlay}>
                <h4>{item.title}</h4>
                <span>{item.subtitle}</span>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= IMAGE LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className={classes.imageModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <div
              className={classes.imageModal__wrapper}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={classes.imageModal__closeBtn}
                onClick={() => setActiveImage(null)}
                aria-label="Zamknij podgląd zdjęcia"
              >
                <FaTimes />
              </button>
              <div className={classes.imageModal__imgContainer}>
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt || activeImage.title}
                  fill
                  sizes="(max-width: 900px) 95vw, 85vw"
                  className={classes.imageModal__img}
                />
              </div>
              <div className={classes.imageModal__caption}>
                <h4>{activeImage.title}</h4>
                <p>{activeImage.subtitle}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FAQ SECTION ================= */}
      <section className={classes.sectionContainer}>
        <SectionHeader
          badge="Najczęstsze Pytania"
          text="Odpowiedzi na najczęściej zadawane pytania przez organizatorów eventów, agencje marketingowe, salony dealerskie i kluby motoryzacyjne."
        >
          FAQ – Obsługa <span>Eventów i Targów</span>
        </SectionHeader>

        <div className={classes.faqContainer}>
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <Reveal key={index} delay={Math.min(index, 5) * 0.06}>
              <div
                className={`${classes.faqItem} ${isOpen ? classes.open : ""}`}
              >
                <button
                  className={classes.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`${classes.faqQuestion__icon} ${
                      isOpen ? classes.rotated : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className={classes.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
              </Reveal>
            );
          })}
        </div>

        {/* ================= CTA BANNER ================= */}
        <Reveal amount={0.3}>
        <div className={classes.ctaBanner}>
          <div className={classes.ctaBanner__content}>
            <h3>
              Planujesz Event Motoryzacyjny, <span>Track Day lub Targi?</span>
            </h3>
            <p>
              Skontaktuj się z nami, aby omówić szczegóły i zarezerwować termin.
              Przygotujemy indywidualny plan obsługi detailingowej dopasowany do Twojego harmonogramu i floty aut.
            </p>
            <div className={classes.ctaBanner__buttons}>
              <AnimatedButton href="tel:+48797234734" className={classes.ctaBtnAnimated}>
                <FaPhoneAlt className={classes.btnIcon} />
                <span>Zadzwoń: +48 797 234 734</span>
              </AnimatedButton>
              <Link href="/kontakt" className={classes.hero__btnSecondary}>
                Formularz kontaktowy &rarr;
              </Link>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
    </MotionConfig>
  );
}
