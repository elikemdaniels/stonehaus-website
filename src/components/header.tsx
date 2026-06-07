import { Section, Container, StonehausLogo } from "@/components";
import Link from "next/link";

export default function Header() {
  return (
    <Section as="header" className="py-10">
      <Container className="max-w-7xl flex items-center justify-between">
        <Link href="/">
          <StonehausLogo />
        </Link>
        <span>Navigation</span>
      </Container>
    </Section>
  );
}
