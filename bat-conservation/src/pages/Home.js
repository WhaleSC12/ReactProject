// src/pages/Home.js
import React, { useState } from 'react';
import '../styles/styles.css';

// Define images array with paths from the public folder
const images = [
  `${process.env.PUBLIC_URL}/assets/batanatomy.png`,
  `${process.env.PUBLIC_URL}/assets/canarylongearedbat.png`,
  `${process.env.PUBLIC_URL}/assets/floridabonnetedbat.jpg`,
  `${process.env.PUBLIC_URL}/assets/greaterbulldogbat.png`,
  `${process.env.PUBLIC_URL}/assets/flyingfoxbat.jpg`
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to change slides
  const changeSlide = (direction) => {
    setCurrentSlide((prevSlide) =>
      (prevSlide + direction + images.length) % images.length
    );
  };

  return (
    <main className="container">
      <h1 className="heading">North American Bat Conservation Society</h1>
      <p className="subheading">
        New: 
        <a href="https://whalesc12.github.io/ReactProject/#/news">Potential new cure for white-nose syndrome?</a> | 
        <a href="https://whalesc12.github.io/ReactProject/#/shop">New t-shirt!</a> | 
        <a href="https://whalesc12.github.io/ReactProject/#/breeds">New breed!</a>
      </p>
      
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
      
      <p className="footer-text-header">About us</p>
      <p className="footer-text">
        We are a for-profit organization dedicated to the preservation, conservation, and research of bat species in North America.
        We are mainly based in the United States but have sister organizations in Canada, Mexico, and parts of Central America.
      </p>
    </main>
  );
}

export default Home;
