export type Article = {
  id: string;
  title: string;
  url: string;
  slug: string;
  featured_image?: {
    permalink: string;
  };
};
