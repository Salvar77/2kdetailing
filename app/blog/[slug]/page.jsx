import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import BlogPostClient from "./client";

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

    const url = `/blog/${slug}`;
    return {
      title: `${title} – Blog`,
      description,
      alternates: { canonical: url },
      openGraph: { url },
    };
  } catch {
    return notFound();
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  return <BlogPostClient slugFromParent={slug} />;
}
