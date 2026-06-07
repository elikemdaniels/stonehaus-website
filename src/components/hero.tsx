import { Section, Container, Header } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <Section className="bg-dark-green bg-[url('/stonehaus-background.jpg')] bg-cover bg-center px-0 min-h-[calc(100vh-24px)] text-white overflow-hidden relative">
        <Container className="text-center max-w-150 grid grid-cols-1 justify-items-center gap-4 mt-[10%]">
          <h1 className="text-[64px] leading-[1.2]">{title}</h1>
          <h2 className="text-[24px] leading-[1.6]">{description}</h2>
          <Link
            href="/"
            className="text-lg font-medium px-6 py-4 bg-lemon-green text-dark-green rounded-full mt-7"
          >
            Read articles
          </Link>
        </Container>
        <Container className="absolute bottom-0 left-0 right-0 max-w-6xl flex items-end justify-between">
          <span className="py-6">Socials</span>
          <Image
            src="/stonehaus-farmer.png"
            alt="Stonehaus Background"
            width={800}
            height={800}
            className="w-110 h-auto"
          />
          <span className="py-6">Socials</span>
        </Container>
      </Section>
    </>
  );
}
