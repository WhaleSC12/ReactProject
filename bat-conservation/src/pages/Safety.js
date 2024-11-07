// src/pages/Safety.js
import React from 'react';

function Safety() {
  return (
    <div className="container bat-safety-content">
      <h1>Bat Safety Guide</h1>

      <section className="safety-section">
        <h2>How to Handle a Bat Safely</h2>
        <p>When handling a bat, always wear thick gloves and avoid direct contact with your skin...</p>
        <p>Use a towel or cloth to gently pick up the bat...</p>
      </section>

      <div className="safety-image">
        <p><strong>How to Handle a Bat Safely</strong></p>
        <img src={`${process.env.PUBLIC_URL}/assets/safety.jpg`} alt="Handling a Bat" />
      </div>

      <section className="safety-section">
        <h2>Important Safety Measures</h2>
        <p>Avoid trying to catch or handle a bat if you are untrained...</p>
      </section>

      <div className="safety-image">
        <p><strong>Releasing a Bat Safely</strong></p>
        <img src={`${process.env.PUBLIC_URL}/assets/attic.jpg`} alt="Releasing a Bat" />
      </div>

      <section className="safety-section">
        <h2>How to Treat a Bat Bite or Scratch</h2>
        <p>If bitten or scratched by a bat, wash the wound immediately...</p>
      </section>

      <div className="safety-image">
        <p><strong>Treating a Bat Bite</strong></p>
        <img src={`${process.env.PUBLIC_URL}/assets/bite.jpg`} alt="Treating a Bat Bite" />
      </div>
    </div>
  );
}

export default Safety;
