// src/pages/Contact.js
import React, { useState } from 'react';
import '../styles/styles.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Please wait...");

    const formPayload = {
      access_key: 'ef44738c-15f3-4d1e-8f04-8d637fd94678', // Your API key
      ...formData
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      const json = await response.json();
      if (response.ok) {
        setResult("Form submitted successfully");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult(json.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Something went wrong!");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(''), 3000);
    }
  };

  return (
    <main className="container contact-container">
      <div className="contact-content">
        <img src={`${process.env.PUBLIC_URL}/assets/conservation2.jpg`} alt="Conservation" className="contact-image" />
        <h2>Contact Us</h2>
        <p>Our hotline: <br /> (803) 593-9440</p>
        <p>South Carolina Department of National Resources: <br /> (803) 432-444</p>
        <p>Email us: <br /> <a href="mailto:ConserveBat@outlook.com">ConserveBat@outlook.com</a></p>
        <p className="locations">
          We have locations in: <br />
          - Winchester, Virginia <br />
          - Memphis, Tennessee <br />
          - Mexico City, Mexico <br />
          - Prince Rupert, British Columbia <br />
          - Halifax, Nova Scotia
        </p>
      </div>
      <form className="contact-form centered-form" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="ef44738c-15f3-4d1e-8f04-8d637fd94678" />

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>

        {result && <div id="result">{result}</div>}
      </form>
    </main>
  );
}

export default Contact;
