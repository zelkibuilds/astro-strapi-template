import type { Article } from "../../types/article";

export type PreparedArticle = {
  title: Article["attributes"]["title"];
  description: Article["attributes"]["description"];
  coverUrl: Article["attributes"]["cover"]["data"]["attributes"]["url"];
};

export const PageArticle = (props: PreparedArticle) => (
  <article className="border border-blue-400 rounded p-6">
    <img src={props.coverUrl} alt={props.title} />
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </article>
);
