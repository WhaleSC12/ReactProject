// src/pages/Breeds.js
import React, { useState } from 'react';
import batData from '../data/bats.json';
import '../styles/styles.css';

function Breeds() {
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
        <div key={bat._id} className="breeds-item" onClick={() => handleOpenModal(bat)}>
          <img src={require(`../assets${bat.img_name}`).default} alt={bat.name} />
          <p>{bat.name}</p>
        </div>
      ))}

      {selectedBat && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <h2>{selectedBat.name}</h2>
            <img src={require(`../assets${selectedBat.img_name}`).default} alt={selectedBat.name} />
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