export type ArticleProps = {
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

export type ArticleHeroProps = {
  title: string;
  date: string;
};
