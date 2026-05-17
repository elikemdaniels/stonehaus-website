import { gql, GraphQLClient } from "graphql-request";
import type { Article } from "@/types";

const BASE_URL = process.env.STATAMIC_URL;
const client = new GraphQLClient(`${BASE_URL}/graphql`);

export async function getArticles(): Promise<Article[]> {
  const query = gql`
    query GET_ARTICLES {
      entries(collection: "articles") {
        data {
          id
          title
          url
        }
      }
    }
  `;
  const data = await client.request(query);
  return data?.entries?.data ?? [];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const query = gql`
    query GET_ARTICLE_BY_SLUG($slug: String!) {
      entry(collection: "articles", slug: $slug) {
        ... on Entry_Articles_Article {
          id
          title
          url
        }
      }
    }
  `;
  const data = await client.request(query, { slug });
  return data?.entry ?? null;
}
