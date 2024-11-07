// src/pages/Breeds.js
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
          <img src={bat.img_name} alt={bat.name} /> {/* Using the direct path from JSON */}
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
