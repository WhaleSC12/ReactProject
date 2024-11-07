// src/pages/News.js
import React from 'react';
import whiteNoseImg from '../assets/images/whitenose.jpg';
import windmillImg from '../assets/images/windmill.jpg';
import batRescueImg from '../assets/images/batrescue.jpeg';
import '../styles/styles.css';

export default function News() {
    return (
        <main className="container">
            <h1 className="news-heading">Bat News</h1>
            <section className="news-gallery">
                <div className="news-item">
                    <img src={whiteNoseImg} alt="White-Nose Syndrome" />
                    <div className="news-content">
                        <h2>Potential New Cure for White-Nose Syndrome?</h2>
                        <p className="author">By Ava Sain</p>
                        <p>Researchers at the Institute of Arizona think they have found a cure for white-nose syndrome. Early trials show remarkable recovery in bats with the disease and suggest that they will be successful in curing the disease responsible for killing hundreds of thousands of bats a year.</p>
                    </div>
                </div>

                <div className="news-item">
                    <img src={windmillImg} alt="Bat Deaths by Windmills" />
                    <div className="news-content">
                        <h2>Latest Report on Bat Deaths by Windmills</h2>
                        <p className="author">By John Wilfong</p>
                        <p>The latest report on bat deaths due to windmills in the Greater Carolina area is grim. Over 400 bats have died flying into North Carolina windmills in 2023 alone. Authorities are now looking into temporary measures to deal with the problem.</p>
                    </div>
                </div>

                <div className="news-item">
                    <img src={batRescueImg} alt="Bat Rehabilitation" />
                    <div className="news-content">
                        <h2>New Efforts in Bat Rehabilitation Centers</h2>
                        <p className="author">By Moses Young</p>
                        <p>A new rehabilitation center for injured bats has recently opened in Austin, Texas. The center focuses on treating bats affected by urbanization, providing them with a safe space to recover before being released back into the wild. The efforts are part of a larger initiative to preserve North American bat populations and mitigate the impact of habitat loss.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
