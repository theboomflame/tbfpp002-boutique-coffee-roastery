import { articles } from "@/data/journal";

export function getAllArticles() {
  return articles;
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string) {
  return articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 3);
}