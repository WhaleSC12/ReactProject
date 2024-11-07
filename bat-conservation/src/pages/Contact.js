// src/pages/Contact.js
import React from 'react';
import '../styles/styles.css';

function Contact() {
  return (
    <main className="container contact-container">
      <div className="image-placeholder">
        <img src="/images/conservation2.jpg" alt="Conservation 2" />
      </div>
      <div className="contact-info">
        <p>Contact us at: ConserveBat@outlook.com...</p>
        <img src="/images/North-America-Map.png" alt="North America Map" className="map-image" />
      </div>
      <form className="centered-form">
        {/* Form fields */}
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </main>
  );
}

export default Contact;
