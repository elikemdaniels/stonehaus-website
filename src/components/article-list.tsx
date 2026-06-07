import { Section, Container, ArticleCard } from "@/components";
import { getArticles } from "@/queries";

export default async function ArticleList() {
  const articles = await getArticles();

  return (
    <Section className="py-20 bg-vanilla">
      <Container className="max-w-250 flex flex-col gap-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </Container>
    </Section>
  );
}
