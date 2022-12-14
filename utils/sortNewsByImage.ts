export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImage = news.data.fiter((item: Article) => item.image !== null);
  const newsWithoutImage = news.data.fiter(
    (item: Article) => item.image === null
  );
}
