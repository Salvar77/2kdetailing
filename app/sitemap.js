import { readdirSync, statSync } from "fs";
import { join } from "path";

const BASE_URL = "https://www.2kdetailing.opole.pl";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/oferta", priority: 0.95, changeFrequency: "weekly" },
  {
    path: "/oferta/korekta-lakieru",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/oferta/powloka-ceramiczna",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  { path: "/oferta/folia-ppf", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/oferta/pranie-tapicerki",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/oferta/renowacja-skor",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/oferta/detailing-wnetrza",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/oferta/regeneracja-reflektorow",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/oferta/przyciemnianie-szyb",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/oferta/auto-detailing",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  { path: "/cennik", priority: 0.85, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/recenzje", priority: 0.8, changeFrequency: "monthly" },
  { path: "/galeria", priority: 0.75, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.7, changeFrequency: "monthly" },
  { path: "/polityka-prywatnosci", priority: 0.1, changeFrequency: "yearly" },
];

function getBlogSlugs() {
  try {
    const postsDir = join(process.cwd(), "content", "posts");
    const files = readdirSync(postsDir);
    return files
      .filter(
        (f) =>
          f.endsWith(".jsx") ||
          f.endsWith(".tsx") ||
          f.endsWith(".mdx") ||
          f.endsWith(".md"),
      )
      .map((f) => {
        const slug = f.replace(/\.(jsx|tsx|mdx|md)$/, "");
        const filePath = join(postsDir, f);
        const stats = statSync(filePath);
        return {
          slug,
          lastModified: stats.mtime,
        };
      });
  } catch {
    return [];
  }
}

export default function sitemap() {
  const today = new Date();

  // Statyczne trasy
  const staticEntries = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: today,
      changeFrequency,
      priority,
    }),
  );

  // Dynamiczne wpisy bloga
  const blogSlugs = getBlogSlugs();
  const blogEntries = blogSlugs.map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries];
}
