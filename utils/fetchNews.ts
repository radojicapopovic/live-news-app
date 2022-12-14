import { gql } from "graphql-request";
import { categories } from "../constants";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery(
      $access_key: Strting!
      $categories: Strting!
      $keywords: Strting
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch(
    "https://xishan.stepzen.net/api/romping-molly/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();
//   const news = sortNewsByImage(newsResponse.data.myQuery);
};

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=8773dafa4ed9b2da68e105e902ef93d8&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"

export default fetchNews;
