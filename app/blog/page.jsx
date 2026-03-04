import BlogComponent from "../../components/Main/Blog";
import classes from "./page.module.scss";

export const metadata = {
  title: "Blog o Auto Detailingu",
  description:
    "Porady z zakresu auto detailingu, studium przypadków i realizacje 2K Auto Detailing w Opolu. Dowiedz się, jak dbać o lakier, tapicerkę i folię PPF.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Blog o Auto Detailingu",
    description:
      "Sprawdzone techniki detailingu, recenzje produktów i efekty naszych realizacji – wszystko w jednym miejscu.",
    images: [
      {
        url: "/og/logo-2kdetailing-opole.png",
        width: 1200,
        height: 630,
        alt: "Nagłówek bloga 2K Auto Detailing - Pranie tapicerki - Korekta lakieru Opole",
      },
    ],
  },
};

export default function BlogPage() {
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
        name: "Blog",
        item: "https://www.2kdetailing.opole.pl/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className={classes.blog}>
        <h1>Blog</h1>
        <BlogComponent />
      </main>
    </>
  );
}
