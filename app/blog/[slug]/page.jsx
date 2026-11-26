import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "../../../components/More/Cta";
import BlogOpinions from "../../../components/More/BlogOpinions";
import classes from "./page.module.scss";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "posts");
  const files = await fs.readdir(dir);
  return files
    .filter((f) => f.endsWith(".jsx"))
    .map((f) => ({ slug: f.replace(".jsx", "") }));
}

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;
    const mod = await import(`../../../content/posts/${slug}.jsx`);
    const { title, description } = mod.meta;
    const seoTitle = mod?.meta?.seoTitle || title;
    const seoDesc = mod?.meta?.seoDescription || description;

    const url = `/blog/${slug}`;
    return {
      title: seoTitle,
      description: seoDesc,
      alternates: { canonical: url },
      openGraph: {
        url,
        title: seoTitle,
        description: seoDesc,
        images: [
          {
            url: mod.meta.hero || "/og/logo-2kdetailing-opole.png",
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
    };
  } catch {
    return notFound();
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  let mod = null;
  try {
    mod = await import(`../../../content/posts/${slug}.jsx`);
  } catch {
    return notFound();
  }

  const { title, description, date, hero } = mod.meta;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: date,
    image: `https://www.2kdetailing.opole.pl${hero}`,
    author: {
      "@type": "Organization",
      name: "2K Auto Detailing Opole",
    },
    publisher: {
      "@id": "https://www.2kdetailing.opole.pl/#business",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.2kdetailing.opole.pl/blog/${slug}`,
    },
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
        name: "Blog",
        item: "https://www.2kdetailing.opole.pl/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://www.2kdetailing.opole.pl/blog/${slug}`,
      },
    ],
  };

  const jsonLdArray = [blogJsonLd, breadcrumbJsonLd];

  const Content = mod.default;
  const meta = mod.meta;

  const getImageSrc = (img) => {
    if (!img) return "/2k-logo-black-biale-tlo.png";
    if (typeof img === "string") {
      if (img.startsWith("/") || img.startsWith("http")) return img;
      return `/images/${img}`;
    }
    return img.src;
  };

  const imageSrc = getImageSrc(meta.dynamicImage || meta.image);

  const imageStyles = {
    "detailing-wnetrza-opole": "specialImage2",
    "pranie-tapicerki-opole": "stylePranie",
    "renowacja-skor-opole": "specialImage",
    "folia-ppf-opole": "styleThree",
    "korekta-lakieru-opole": "anotherSpecialImage",
    "powloka-ceramiczna-opole": "styleFour",
    "auto-detailing-opole": "anotherSpecialImage",
    "czyszczenie-wnetrza-samochodu-opole": "styleCzyszczenie",
    "przygotowanie-lakieru-na-zime-opole": "styleZima",
    "parujace-szyby-w-samochodzie": "styleSzyby",
    "regeneracja-reflektorow-przeglad-opole": "styleReflektory",
  };
  const customImageClass = imageStyles[slug] || "";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArray) }}
      />
      <main className={classes.blogPost__container}>
        <article className={classes.blogPost}>
          <div className={classes.heroWrapper}>
            <div
              className={`${classes.blogPost__imageWrapper} ${
                customImageClass ? classes[customImageClass] : ""
              }`}
              style={{ "--hero-bg": `url("${imageSrc}")` }}
            >
              <Image
                src={imageSrc}
                alt={meta.mainImageAltText || title}
                width={1200}
                height={600}
                priority
                style={{ objectFit: "cover" }}
              />
              <div className={classes.imageOverlay}></div>
            </div>
            <div
              className={`${classes.blogPost__whiteBlock} ${classes.blogPost__whiteBlockLeft}`}
            ></div>
          </div>

          <div className={classes.blogPost__box}>
            <h1>{title}</h1>
            <time>{date}</time>

            <Content />

            {meta.images && (
              <div className={classes.blogPost__imageGrid}>
                {meta.images.map((img, i) => (
                  <Image
                    key={i}
                    src={getImageSrc(img)}
                    alt={meta.imagesAltText?.[i] || `${title} ${i + 1}`}
                    width={800}
                    height={450}
                    style={{ objectFit: "cover" }}
                  />
                ))}
              </div>
            )}

            <BlogOpinions slug={slug} />

            <Link href="/blog" className={classes.backButton}>
              ← Powrót do bloga
            </Link>
          </div>
          <CtaSection />
        </article>
      </main>
    </>
  );
}
