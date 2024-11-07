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
  // Hardcoded bat data
  const batData = [
    { id: 1, name: 'Big Brown Bat', image: BigBrownBat },
    { id: 2, name: 'Canary Long-eared Bat', image: CanaryLongEaredBat },
    { id: 3, name: 'Eastern Red Bat', image: EasternRedBat },
    { id: 4, name: 'Florida Bonneted Bat', image: FloridaBonnetedBat },
    { id: 5, name: 'Flying Fox Bat', image: FlyingFoxBat },
    { id: 6, name: 'Greater Bulldog Bat', image: GreaterBulldogBat },
    { id: 7, name: 'Hoary Bat', image: HoaryBat },
    { id: 8, name: 'Mexican Free-tailed Bat', image: MexicanFreeTailedBat },
    { id: 9, name: 'Vampire Bat', image: VampireBat },
    { id: 10, name: 'Yellow Bat', image: YellowBat }
  ];

  const [selectedBat, setSelectedBat] = useState(null);

  const handleOpenModal = (bat) => {
    setSelectedBat(bat);
  };

  const handleCloseModal = () => {
    setSelectedBat(null);
  };

  return (
    <div className="breeds-gallery">
      {batData.map((bat) => (
        <div key={bat.id} className="breeds-item" onClick={() => handleOpenModal(bat)}>
          <img src={bat.image} alt={bat.name} />
          <p>{bat.name}</p>
        </div>
      ))}

      {selectedBat && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <h2>{selectedBat.name}</h2>
            <img src={selectedBat.image} alt={selectedBat.name} />
            {/* Additional information can be added here if needed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Breeds;







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