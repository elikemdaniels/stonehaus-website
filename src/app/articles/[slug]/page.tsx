import { ArticleHero } from "@/components";
import { getArticles, getArticleBySlug } from "@/queries";

// Generate Static Params for all articles
export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    throw new Error("Article not found");
  }

  return <ArticleHero {...article} />;
}
