import { gql, GraphQLClient } from "graphql-request";
import type { Article } from "@/types";
import { localizeImage } from "@/lib/localizeImage"; // Adjust this path to where your utility lives

const BASE_URL = process.env.STATAMIC_URL; // e.g., http://stonehaus.test
const client = new GraphQLClient(`${BASE_URL}/graphql`);

export async function getArticles(): Promise<Article[]> {
  const query = gql`
    query GET_ARTICLES {
      entries(collection: "articles") {
        data {
          ... on Entry_Articles_Article {
            id
            title
            slug
            cover_image {
              permalink
            }
          }
        }
      }
    }
  `;
  const data: any = await client.request(query);
  const articles = data?.entries?.data ?? [];

  return articles;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const query = gql`
    query GET_ARTICLE_BY_SLUG($slug: String!) {
      entry(collection: "articles", slug: $slug) {
        ... on Entry_Articles_Article {
          id
          title
          slug
          cover_image {
            permalink
          }
        }
      }
    }
  `;
  const data: any = await client.request(query, { slug });
  const article = data?.entry ?? null;

  return article;
}
