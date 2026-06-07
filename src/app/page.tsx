import { Section, Container, Hero, ArticleList } from "@/components";
import { getArticles } from "@/queries";

export default async function Home() {
  const articles = await getArticles();
  // const articles = [
  //   {
  //     title: "Soursop Isn’t Just a Fruit Tree; It’s a Microclimate Solver",
  //     date: "October 15, 2023",
  //     author: "Stephanie Daniels",
  //     avatar: "/avatar.jpg",
  //     image: "/farmer.jpg",
  //     authorPosition: "Exotic Fruit Farmer",
  //   },
  //   {
  //     title: "The Hidden Benefits of Growing Soursop",
  //     date: "November 2, 2023",
  //     author: "Stephanie Daniels",
  //     avatar: "/avatar.jpg",
  //     image: "/farmer.jpg",
  //     authorPosition: "Exotic Fruit Farmer",
  //   },
  //   {
  //     title: "Soursop in the Age of Climate Change",
  //     date: "November 20, 2023",
  //     author: "Stephanie Daniels",
  //     avatar: "/avatar.jpg",
  //     image: "/farmer.jpg",
  //     authorPosition: "Exotic Fruit Farmer",
  //   },
  //   {
  //     title: "Soursop: A Sustainable Solution for Modern Agriculture",
  //     date: "December 5, 2023",
  //     author: "Stephanie Daniels",
  //     avatar: "/avatar.jpg",
  //     image: "/farmer.jpg",
  //     authorPosition: "Exotic Fruit Farmer",
  //   },
  // ];
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
