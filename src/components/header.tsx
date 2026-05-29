import { Section, Container } from "@/components";

export default function Header() {
  return (
    <Section as="header" className="bg-amber-300 p-4">
      <Container>
        <h1 className="text-2xl font-bold">Stonehaus Website</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/articles">Articles</a>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
