import { Section, Container, Hero } from "@/components";
import { getArticles } from "@/queries";
// import { roboto_mono, bricolage_grotesque } from "./fonts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero
        title="Journals from a multifruit orchard"
        description="A living archive of discoveries, challenges, and lessons from fruit farming."
      />
      ;
    </>
  );
}
