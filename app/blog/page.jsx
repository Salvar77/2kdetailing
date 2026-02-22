import BlogComponent from "../../components/Main/Blog";
import classes from "./page.module.scss";

export const metadata = {
  title: "Blog | 2K Auto Detailing Opole",
  description:
    "Porady z zakresu auto detailingu, studium przypadków i realizacje 2K Auto Detailing w Opolu. Dowiedz się, jak dbać o lakier, tapicerkę i folię PPF.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Blog | 2K Auto Detailing Opole",
    description:
      "Sprawdzone techniki detailingu, recenzje produktów i efekty naszych realizacji – wszystko w jednym miejscu.",
    images: [
      {
        url: "/2k-logo-black-biale-tlo.png",
        width: 1200,
        height: 630,
        alt: "Nagłówek bloga 2K Auto Detailing - Pranie tapicerki - Korekta lakieru Opole",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <main className={classes.blog}>
      <h1>Blog</h1>
      <BlogComponent />
    </main>
  );
}
