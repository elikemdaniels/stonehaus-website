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
      <Section className="bg-dark-green bg-[url('/stonehaus-background.jpg')] bg-cover bg-center px-0 min-h-screen text-white overflow-hidden">
        <Header />
        <Container className="text-center max-w-150 grid grid-cols-1 justify-items-center gap-4 mt-[4%]">
          <h1 className="text-[64px] leading-[1.2]">{title}</h1>
          <h2 className="text-[24px] leading-[1.6]">{description}</h2>
          <Link
            href="/"
            className="text-lg font-medium px-6 py-4 bg-lemon-green text-dark-green rounded-full mt-7"
          >
            Read articles
          </Link>
        </Container>
        <Container className="fixed bottom-0 left-0 right-0 max-w-7xl flex items-end justify-between">
          <span>Socials</span>
          <Image
            src="/stonehaus-farmer.png"
            alt="Stonehaus Background"
            width={200}
            height={200}
            className="w-115 h-auto"
          />
          <span>Socials</span>
        </Container>
      </Section>
    </>
  );
}
