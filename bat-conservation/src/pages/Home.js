// src/pages/Home.js
import React from 'react';

export default function Home() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '3em', marginTop: '20px' }}>North American Bat Conservation Society</h1>
            <main className="container">
                <section>
                    <span className="gwd-span-nvvn">New:</span>
                    <a href="/news"><span className="gwd-span-mjiz">Potential new cure for <br /> white-nose syndrome?</span></a>
                    <a href="/shop"><span className="gwd-span-1msa">New t-shirt!</span></a>
                    <a href="/breeds"><span className="gwd-span-cmk8">New breed!<br /></span></a>
                </section>
                <section className="carousel">
                    <div className="carousel-container">
                        <div className="carousel-slide"><img src="images/batanatomy.png" alt="Bat 1" /></div>
                        <div className="carousel-slide"><img src="images/canarylongearedbat.png" alt="Bat 2" /></div>
                        <div className="carousel-slide"><img src="images/floridabonnetedbat.jpg" alt="Bat 3" /></div>
                    </div>
                </section>
                <p className="footer-text-header">About us</p>
                <p className="footer-text">We are a for-profit organization dedicated to the preservation, conservation, and research of bat species in North America.</p>
            </main>
        </div>
    );
}

