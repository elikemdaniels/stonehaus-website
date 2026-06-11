import { Section, Container } from "@/components";
import { ArticleProps } from "@/types";

export default async function ArticleContent({ content }: ArticleProps) {
  return (
    <Section className="py-20 bg-vanilla">
      <Container className="max-w-250 flex flex-col gap-3 prose lg:prose-xl">
        <article dangerouslySetInnerHTML={{ __html: content ?? "" }} />
      </Container>
    </Section>
  );
}
