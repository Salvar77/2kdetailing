import React from "react";
import classes from "./BlogOpinions.module.scss";
import { FaStar } from "react-icons/fa";

const ALL_OPINIONS = [
  {
    name: "Krzysztof Kowal",
    service: "Powłoka ceramiczna",
    content:
      "Zdecydowałem się na powłokę ceramiczną w 2K Auto Detailing Opole i to była bardzo dobra decyzja. Samochód wygląda jak nowy, lakier ma piękny połysk i łatwiej się myje. Fachowa obsługa i dokładność na najwyższym poziomie.",
    stars: 5,
    tags: ["ceramika"],
  },
  {
    name: "Zbigniew Włodarczyk",
    service: "Polerowanie lakieru i ceramika",
    content:
      "Oddałem auto na polerowanie lakieru i zabezpieczenie powłoką ceramiczną i efekt jest naprawdę świetny Lakier wygląda jak nowy. Widać, że wiedzą co robią i dbają o detale. Z czystym sumieniem polecam.",
    stars: 5,
    tags: ["korekta", "ceramika"],
  },
  {
    name: "Iwona Feliks",
    service: "Korekta lakieru i przyciemnianie szyb",
    content:
      "Oddałam swoje auto do 2K Auto Detailing Opole na korektę lakieru oraz przyciemnianie szyb i jestem zachwycona efektem. Lakier po korekcie wygląda jak nowy – zniknęły rysy, a kolor odzyskał głębię i połysk. Auto naprawdę robi teraz wrażenie.",
    stars: 5,
    tags: ["korekta", "szyby"],
  },
  {
    name: "Łukasz Kuś",
    service: "Detailing wnętrza",
    content:
      "Bardzo dobry auto detailing w Opolu. W 2K Auto Detailing wykonywałem detailing wnętrza oraz mycie detailingowe i jestem bardzo zadowolony. Samochód został dokładnie wyczyszczony, a lakier odzyskał połysk. Widać doświadczenie.",
    stars: 5,
    tags: ["wnetrze"],
  },
  {
    name: "Dawid Wilk",
    service: "Korekta lakieru",
    content:
      "Polecam. Fachowcy na miejscu, auto wygląda o niebo lepiej, termin realizacji bardzo w porządku. Lakier po korekcie - jakby wyjechał z salonu.",
    stars: 5,
    tags: ["korekta"],
  },
  {
    name: "grześ Dziuba",
    service: "Powłoka ceramiczna",
    content:
      "Gorąco polecam usługi Pana Kamila, zlecenie wykonane szybko, dokładnie i w korzystnej cenie. Wykonana powłoka ceramiczna zdecydowanie ułatwia codzienną pielęgnacje samochodu i lakieru.",
    stars: 5,
    tags: ["ceramika"],
  },
  {
    name: "160298nk",
    service: "Korekta lakieru i szyby",
    content:
      "Skorzystałam z usług 2K Auto Detailing Opole – korekta lakieru i przyciemnianie szyb. Auto wygląda jak nowe, lakier ma piękny połysk, a szyby zrobione idealnie, bez pęcherzyków. Świetny kontakt i pełen profesjonalizm.",
    stars: 5,
    tags: ["korekta", "szyby"],
  },
  {
    name: "Wi Lan",
    service: "Czyszczenie wnętrza i ceramika",
    content:
      "Jestem zadowolony z wykonanej usługi - czyszczenie wnętrza oraz nakładanie ceramiki na cały samochód. Usługa wykonana kompleksowo z dopilnowaniem najmniejszych szczegółów. Nigdy mój samochód nie był tak czysty i dopieszczony.",
    stars: 5,
    tags: ["wnetrze", "ceramika"],
  },
  {
    name: "Karo J",
    service: "Zabezpieczenie lakieru",
    content:
      "Profesjonalna usługa, samochód po odebraniu wyglądał jak nowy. Z całego serca polecam!",
    stars: 5,
    tags: ["ogolne", "ppf"],
  },
  {
    name: "Wojciech Pracki",
    service: "Auto Detailing Opole",
    content:
      "Bardzo miła obsługa. Fachowe doradztwo. Precyzyjne określenie, co jest możliwe do zrealizowania, a co nie. Usługa wykonana zgodnie z oczekiwaniami i w określonym terminie. Bardzo polecam.",
    stars: 5,
    tags: ["ogolne", "ppf"],
  },
  {
    name: "Dawid Meier",
    service: "Detailing wnętrza",
    content:
      "Serdecznie polecam, dokładne czyszczenie wraz z myciem. Najlepszy detailing w Opolu!",
    stars: 5,
    tags: ["wnetrze"],
  },
];

const BlogOpinions = ({ slug }) => {
  // Rozpoznawania tematyki wpisu blogowego na podstawie linku (slug)
  const getTagsForSlug = (s) => {
    if (!s) return [];
    if (s.includes("korekta")) return ["korekta"];
    if (s.includes("ceramiczna")) return ["ceramika"];
    if (s.includes("ppf")) return ["ppf"];
    if (
      s.includes("tapicerki") ||
      s.includes("wnetrza") ||
      s.includes("skor")
    ) {
      return ["wnetrze"];
    }
    if (s.includes("szyb")) return ["szyby"];
    return ["ogolne"];
  };

  const targetTags = getTagsForSlug(slug);

  // Przydzielanie punktów trafności poszczególnym opiniom
  const scoredOpinions = ALL_OPINIONS.map((op) => {
    let score = 0;
    op.tags.forEach((tag) => {
      // Jeśli tag z opinii zgadza się z tematem bloga, daj aż 5 punktów
      if (targetTags.includes(tag)) score += 5;
      // Jeśli tag jest ogólny (np. "super praca"), daje to 1 punkt wsparcia
      if (tag === "ogolne") score += 1;
    });

    // Delikatna losowość (od 0 do 0.5) by przy równym wyniku roszadowały się wpisy 
    // i strona żyła a Google wykyrwało minimalne zmiany.
    const randomization = Math.random() * 0.5;
    return { ...op, score: score + randomization };
  });

  // Sortowanie malejąco dla najlepszego EEAT
  scoredOpinions.sort((a, b) => b.score - a.score);
  
  // Wycinanie tylko 3 super celnych opinii
  const selectedOpinions = scoredOpinions.slice(0, 3);

  return (
    <section className={classes.opinionsContainer}>
      <h2 className={classes.sectionTitle}>
        Sprawdź, co piszą o nas kierowcy z <span>Opola i okolic</span>
      </h2>
      <p className={classes.sectionSubtitle}>
        Setki zadowolonych klientów zaufało naszemu doświadczeniu. Zobacz, w
        jakim stanie wyjechały ich samochody po wykonaniu usług.
      </p>

      <div className={classes.grid}>
        {selectedOpinions.map((opinion, idx) => (
          <div key={`${opinion.name}-${idx}`} className={classes.card}>
            <div className={classes.starsWrapper}>
              {[...Array(opinion.stars)].map((_, i) => (
                <FaStar key={i} className={classes.starIcon} />
              ))}
            </div>
            <p className={classes.content}>&bdquo;{opinion.content}&rdquo;</p>
            <div className={classes.footer}>
              <span className={classes.name}>{opinion.name}</span>
              <span className={classes.service}>{opinion.service}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogOpinions;
