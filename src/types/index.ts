export type Article = {
  id: string;
  title: string;
  url: string;
  slug: string;
  cover_image?: {
    permalink: string;
  };
};
