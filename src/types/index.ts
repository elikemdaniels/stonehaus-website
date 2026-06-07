export type Article = {
  id: string;
  title: string;
  date: string;
  slug: string;
  cover_image?: {
    permalink?: string;
  };
  author?: {
    avatar?: {
      permalink?: string;
    };
    name?: string;
    position?: {
      label?: string;
    };
  };
};
