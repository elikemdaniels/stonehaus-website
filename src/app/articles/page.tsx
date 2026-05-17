import { getArticles } from "@/queries";
import Link from "next/link";

export default async function Articles() {
  const articles = await getArticles();
  return (
    <>
      <h1>Welcome to the Articles Page</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={article.url}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
