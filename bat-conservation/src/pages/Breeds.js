// src/pages/Breeds.js
import React, { useEffect, useState } from 'react'; 
import batData from '../data/bats.json';
import '../styles/styles.css';

// Utility function to import all images from the assets folder
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// Import all images in the assets folder
const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

function Breeds() {
  const [bats, setBats] = useState([]);
  const [selectedBat, setSelectedBat] = useState(null);

  useEffect(() => {
    setBats(batData);
  }, []);

  const handleOpenModal = (bat) => {
    setSelectedBat(bat);
  };

  const handleCloseModal = () => {
    setSelectedBat(null);
  };

  return (
    <div className="breeds-container">
      <h1>Bat Breeds</h1> {/* This header will push the images down */}
      <div className="breeds-gallery">
        {bats.map((bat) => (
          <div key={bat._id} className="breeds-item" onClick={() => handleOpenModal(bat)}>
            {/* Use the imported images object to find the correct image */}
            <img src={images[bat.img_name]} alt={bat.name} />
            <p>{bat.name}</p>
          </div>
        ))}
      </div>

      {selectedBat && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <h2>{selectedBat.name}</h2>
            <img src={images[selectedBat.img_name]} alt={selectedBat.name} />
            <p><strong>Conservation Status:</strong> {selectedBat.conservationStatus}</p>
            <p><strong>Notable Features:</strong> {selectedBat.notable}</p>
            <p><strong>Countries Found In:</strong> {selectedBat.countries.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Breeds;

/*
// src/pages/Breeds.js
import React, { useState } from 'react';
import '../styles/styles.css';

// Importing images directly
import BigBrownBat from '../assets/bigbrownbat.jpg';
import CanaryLongEaredBat from '../assets/canarylongearedbat.png';
import EasternRedBat from '../assets/easternredbat.jpg';
import FloridaBonnetedBat from '../assets/floridabonnetedbat.jpg';
import FlyingFoxBat from '../assets/flyingfoxbat.jpg';
import GreaterBulldogBat from '../assets/greaterbulldogbat.png';
import HoaryBat from '../assets/hoarybat.jpg';
import MexicanFreeTailedBat from '../assets/mexicanfreetailedbat.jpg';
import VampireBat from '../assets/vampirebat.jpg';
import YellowBat from '../assets/yellowbat.jpg';

function Breeds() {
  // Hardcoded bat data with additional details
  const batData = [
    { id: 1, name: 'Big Brown Bat', image: BigBrownBat, conservationStatus: 'Least Concern', notable: 'Can live over 20 years.', countries: ['Canada', 'USA', 'Mexico'] },
    { id: 2, name: 'Canary Long-eared Bat', image: CanaryLongEaredBat, conservationStatus: 'Endangered', notable: 'Has long ears adapted for echolocation.', countries: ['Canada', 'USA'] },
    { id: 3, name: 'Eastern Red Bat', image: EasternRedBat, conservationStatus: 'Least Concern', notable: 'Known for its reddish fur.', countries: ['Eastern USA', 'Canada'] },
    { id: 4, name: 'Florida Bonneted Bat', image: FloridaBonnetedBat, conservationStatus: 'Critically Endangered', notable: 'One of the rarest bats in North America.', countries: ['Florida, USA'] },
    { id: 5, name: 'Flying Fox Bat', image: FlyingFoxBat, conservationStatus: 'Vulnerable', notable: 'Largest species of bat.', countries: ['Not native to North America'] },
    { id: 6, name: 'Greater Bulldog Bat', image: GreaterBulldogBat, conservationStatus: 'Least Concern', notable: 'Feeds on fish using echolocation.', countries: ['Southern USA'] },
    { id: 7, name: 'Hoary Bat', image: HoaryBat, conservationStatus: 'Least Concern', notable: 'Migratory species, one of the most widespread in North America.', countries: ['USA', 'Canada', 'Mexico'] },
    { id: 8, name: 'Mexican Free-tailed Bat', image: MexicanFreeTailedBat, conservationStatus: 'Least Concern', notable: 'Known for its speed and agility in flight.', countries: ['USA', 'Mexico'] },
    { id: 9, name: 'Vampire Bat', image: VampireBat, conservationStatus: 'Least Concern', notable: 'Feeds on blood, primarily livestock.', countries: ['Southern USA', 'Mexico'] },
    { id: 10, name: 'Yellow Bat', image: YellowBat, conservationStatus: 'Least Concern', notable: 'Yellowish fur provides good camouflage.', countries: ['Southern USA'] }
  ];

  const [selectedBat, setSelectedBat] = useState(null);

  const handleOpenModal = (bat) => {
    setSelectedBat(bat);
  };

  const handleCloseModal = () => {
    setSelectedBat(null);
  };

  return (
    <div className="breeds-container">
      <h1>Bat Breeds</h1> {}
      <div className="breeds-gallery">
        {batData.map((bat) => (
          <div key={bat.id} className="breeds-item" onClick={() => handleOpenModal(bat)}>
            <img src={bat.image} alt={bat.name} />
            <p>{bat.name}</p>
          </div>
        ))}
      </div>

      {selectedBat && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <h2>{selectedBat.name}</h2>
            <img src={selectedBat.image} alt={selectedBat.name} />
            <p><strong>Conservation Status:</strong> {selectedBat.conservationStatus}</p>
            <p><strong>Notable Features:</strong> {selectedBat.notable}</p>
            <p><strong>Countries Found In:</strong> {selectedBat.countries.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Breeds;

*/


/*
JSON version not ready yet
import React, { useEffect, useState } from 'react'; 
import batData from '../data/bats.json';
import '../styles/styles.css';

function Breeds() {
  const [bats, setBats] = useState([]);
  const [selectedBat, setSelectedBat] = useState(null);

  useEffect(() => {
    // Load data directly from JSON import
    setBats(batData);
  }, []);

  const handleOpenModal = (bat) => {
    setSelectedBat(bat);
  };

  const handleCloseModal = () => {
    setSelectedBat(null);
  };

  return (
    <div className="breeds-gallery">
      {bats.map((bat) => (
        <div key={bat._id} className="breeds-item" onClick={() => handleOpenModal(bat)}>
          <img src={bat.img_name} alt={bat.name} /> {}
          <p>{bat.name}</p>
        </div>
      ))}

      {selectedBat && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <h2>{selectedBat.name}</h2>
            <img src={selectedBat.img_name} alt={selectedBat.name} />
            <p><strong>Conservation Status:</strong> {selectedBat.conservation_status}</p>
            <p><strong>Notable Features:</strong> {selectedBat.notable_features}</p>
            <p><strong>Countries Found In:</strong> {selectedBat.countries_found.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Breeds;

*/