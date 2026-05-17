import { getArticleBySlug } from "@/queries";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return (
    <div>
      <h1>{article?.title}</h1>
    </div>
  );
}
