// src/pages/Breeds.js
import React, { useState } from 'react'; 
import '../styles/styles.css';

// Importing images directly
import BigBrownBat from '../assets/big_brown_bat.jpg';
import CanaryLongEaredBat from '../assets/canary_long_eared_bat.jpg';
import EasternRedBat from '../assets/eastern_red_bat.jpg';
import FloridaBonnetedBat from '../assets/florida_bonneted_bat.jpg';
import FlyingFoxBat from '../assets/flying_fox_bat.jpg';
import GreaterBulldogBat from '../assets/greater_bulldog_bat.jpg';
import HoaryBat from '../assets/hoary_bat.jpg';
import MexicanFreeTailedBat from '../assets/mexican_free_tailed_bat.jpg';
import VampireBat from '../assets/vampire_bat.jpg';
import YellowBat from '../assets/yellow_bat.jpg';

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