import { Hero, ArticleList } from "@/components";

export default async function HomePage() {
  return (
    <>
      <Hero
        title="Journals from a multifruit orchard"
        description="A living archive of discoveries, challenges, and lessons from fruit farming."
      />
      <ArticleList />
    </>
  );
}
