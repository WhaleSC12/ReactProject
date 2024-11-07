// Safety.js
import React from 'react';
import '../styles/styles.css';

function Safety() {
  return (
    <main className="container">
      <h1>Bat Safety Guide</h1>
      <section className="bat-safety-content">
        <div className="safety-section">
          <h2>How to Handle a Bat Safely</h2>
          <p>When handling a bat, always wear thick gloves...</p>
        </div>
        <div className="safety-image">
          <img src="/images/safety.jpg" alt="Handling a Bat" />
        </div>
      </section>
    </main>
  );
}

export default Safety;
