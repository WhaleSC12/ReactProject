// src/components/NewsCard.js
import React from 'react';

function NewsCard({ image, title, author, content }) {
  return (
    <div className="news-item">
      <img src={image} alt={title} />
      <div className="news-content">
        <h2>{title}</h2>
        <p className="author">By {author}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default NewsCard;
