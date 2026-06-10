import { Section, Container } from "@/components";
import { ArticleProps } from "@/types";

export default function ArticleHero({ title, date }: ArticleProps) {
  return (
    <>
      <Section className="bg-dark-green bg-[url('/stonehaus-background.jpg')] bg-cover bg-center text-white overflow-hidden relative">
        <Container className="text-center max-w-150 grid grid-cols-1 justify-items-center gap-4 mt-[10%] mb-[10%]">
          <h1 className="text-[64px] leading-[1.2]">{title}</h1>
          <time dateTime={date} className="text-sm mb-5 block">
            {date}
          </time>
        </Container>
      </Section>
    </>
  );
}
