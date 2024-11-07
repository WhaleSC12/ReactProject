// src/pages/Contact.js
import React from 'react';
import '../styles/styles.css';

function Contact() {
  return (
    <main className="container contact-container">
      <div className="contact-content">
        <img src={require('../assets/conservation2.jpg')} alt="Conservation 2" className="contact-image" />
        <h2>Our hotline:</h2>
        <p>(803) 593-9440</p>
        <h3>South Carolina Department of National Resources:</h3>
        <p>Email: ConserveBat@outlook.com</p>
      </div>
      <form className="contact-form centered-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="form-control" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </main>
  );
}

export default Contact;
