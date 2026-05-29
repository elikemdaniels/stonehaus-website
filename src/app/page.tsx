import { Section, Container } from "@/components";
import { getArticles } from "@/queries";
import Link from "next/link";

export default async function Home() {
  const articles = await getArticles();
  return (
    <Section as="header" id="home-header">
      <Container>
        <h1>Welcome to the Home Page</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
