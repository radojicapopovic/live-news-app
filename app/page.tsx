import React from "react";
import { categories } from "../constants";
import fetchNews from "../utils/fetchNews";

async function page() {
  const news = await fetchNews(categories.join(","));

  console.log(news);
}

export default page;
