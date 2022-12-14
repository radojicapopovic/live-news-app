type Article = {
  [x: string]: any;
  author: string | null;
  category: string;
  escription: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  pagination: Pagination;
  data: Article;
};

type Category =
  | "general"
  | "buisness"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";
