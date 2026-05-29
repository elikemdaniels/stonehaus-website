import { Section, Container } from "@/components";
import { getArticles, getArticleBySlug } from "@/queries";
import Image from "next/image";

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
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-bold mb-4">{article?.title}</h1>
        {article?.featured_image && (
          <Image
            src={article.featured_image.permalink}
            alt={article.title}
            className="w-full h-auto mb-4"
            width={600}
            height={400}
          />
        )}
      </Container>
    </Section>
  );
}
