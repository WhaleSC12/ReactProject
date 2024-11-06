// src/pages/Contact.js
import React from 'react';

export default function Contact() {
    return (
        <main className="container contact-container">
            <div className="image-placeholder">
                <img src="images/conservation2.jpg" alt="Conservation" className="contact-image" />
            </div>
            <div className="contact-info">
                <p className="contacttext">
                    Our hotline: <br /> (803) 593-9440 <br /><br />
                    Reach out to us at our email: <br /> ConserveBat@outlook.com
                </p>
                <p className="locations">Locations in various cities</p>
                <img src="images/North-America-Map.png" alt="North America Map" className="map-image" />
            </div>
            <div className="image-placeholder">
                <img src="images/conservation.jpg" alt="Conservation" className="contact-image" />
            </div>
            <h1 className="form-title">Job Application Form</h1>
            <form className="job-application-form centered-form">
                {/* Form fields here */}
            </form>
        </main>
    );
}
