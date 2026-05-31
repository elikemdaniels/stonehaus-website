import { Section, Container } from "@/components";
import Link from "next/link";

export default function Hero() {
  return (
    <Section
      as="header"
      className="bg-dark-green p-4 rounded-4xl min-h-[calc(100svh-32px)] text-white grid place-items-center"
    >
      <Container className="text-center max-w-185 grid grid-cols-1 justify-items-center gap-4">
        <h1 className="text-[80px]">Journals from a multifruit orchard</h1>
        <h2 className="text-[26px] leading-[1.4]">
          A living archive of orchard life, cultivation, discoveries,
          challenges, and lessons from fruit farming.
        </h2>
        <Link
          href="/"
          className="text-xl px-8 py-5 bg-lemon-green text-dark-green rounded-full"
        >
          View catalog
        </Link>
      </Container>
    </Section>
  );
}
