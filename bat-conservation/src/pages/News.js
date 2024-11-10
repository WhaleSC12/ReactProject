// src/pages/News.js
import React from 'react';
import '../styles/styles.css';
import NewsCard from '../components/NewsCard';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/assets/whitenose.jpg`,
      title: "Potential New Cure for White-Nose Syndrome?",
      author: "Ava Sain",
      content: "Researchers at the Institute of Arizona think they have found a cure for white-nose syndrome. Early trials show remarkable recovery in bats with the disease and suggest that they will be successful in curing the disease responsible for killing hundreds of thousands of bats a year."
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/assets/windmill.jpg`,
      title: "Latest Report on Bat Deaths by Windmills",
      author: "John Wilfong",
      content: "The latest report on bat deaths due to windmills in the Greater Carolina area is grim. Over 400 bats have died flying into North Carolina windmills in 2023 alone. Authorities are now looking into temporary measures to deal with the problem."
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/assets/batrescue.jpeg`,
      title: "New Efforts in Bat Rehabilitation Centers",
      author: "Moses Young",
      content: "A new rehabilitation center for injured bats has recently opened in Austin, Texas. The center focuses on treating bats affected by urbanization, providing them with a safe space to recover before being released back into the wild. The efforts are part of a larger initiative to preserve North American bat populations and mitigate the impact of habitat loss."
    }
  ];

  return (
    <main className="container">
      <h1 className="news-heading">Bat News</h1>
      <section className="news-gallery">
        {newsArticles.map(article => (
          <NewsCard
            key={article.id}
            image={article.image}
            title={article.title}
            author={article.author}
            content={article.content}
          />
        ))}
      </section>
    </main>
  );
}
