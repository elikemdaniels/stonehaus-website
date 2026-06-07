import { Section, Container, StonehausLogo } from "@/components";
import Link from "next/link";

export default function Header() {
  return (
    <Section
      as="header"
      className="py-10 absolute top-0 left-0 right-0 z-10 text-white"
    >
      <Container className="max-w-6xl flex items-center justify-between">
        <Link href="/">
          <StonehausLogo />
        </Link>
        <span>Navigation</span>
      </Container>
    </Section>
  );
}
