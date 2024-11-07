// src/pages/Home.js
import React, { useState } from 'react';
import '../styles/styles.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/images/batanatomy.png',
    '/images/canarylongearedbat.png',
    '/images/floridabonnetedbat.jpg',
    '/images/greaterbulldogbat.png',
    '/images/flyingfoxbat.jpg'
  ];

  const changeSlide = (direction) => {
    setCurrentSlide((prevSlide) =>
      (prevSlide + direction + images.length) % images.length
    );
  };

  return (
    <main className="container">
      <h1 className="heading">North American Bat Conservation Society</h1>
      <section className="carousel">
        <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Bat ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-btn prev" onClick={() => changeSlide(-1)}>&#10094;</button>
        <button className="carousel-btn next" onClick={() => changeSlide(1)}>&#10095;</button>
      </section>
      <p className="footer-text">We are dedicated to preserving bat species...</p>
    </main>
  );
}

export default Home;
