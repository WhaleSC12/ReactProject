// src/pages/Breeds.js
import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

function Breeds() {
  const [bats, setBats] = useState([]);
  const [selectedBat, setSelectedBat] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the server endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bats');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBats(data);
        console.log("Data fetched successfully:", data); // Log fetched data
      } catch (error) {
        console.error("Error fetching data:", error); // Log error if fetch fails
      }
    };
    
    fetchData();
  }, []);

  const handleOpenModal = (bat) => {
    setSelectedBat(bat);
  };

  const handleCloseModal = () => {
    setSelectedBat(null);
  };

  return (
    <div className="breeds-container">
      <h1>Bat Breeds</h1> {/* This header pushes images down */}
      <div className="breeds-gallery">
        {bats.length > 0 ? (
          bats.map((bat) => (
            <div key={bat._id} className="breeds-item" onClick={() => handleOpenModal(bat)}>
              {/* Adjusted image path to use the server endpoint */}
              <img src={`http://localhost:5000${bat.img_name}`} alt={bat.name} />
              <p>{bat.name}</p>
            </div>
          ))
        ) : (
          <p>Loading bat data...</p>
        )}
      </div>

      {selectedBat && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <h2>{selectedBat.name}</h2>
            <img src={`http://localhost:5000${selectedBat.img_name}`} alt={selectedBat.name} />
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
import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

function Breeds() {
  const [bats, setBats] = useState([]);
  const [selectedBat, setSelectedBat] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch(`${process.env.PUBLIC_URL}/data/bats.json`)
      .then((response) => response.json())
      .then((data) => setBats(data))
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

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
        {bats.map((bat) => (
          <div key={bat._id} className="breeds-item" onClick={() => handleOpenModal(bat)}>
            {}
            <img src={`${process.env.PUBLIC_URL}/assets/${bat.img_name}`} alt={bat.name} />
            <p>{bat.name}</p>
          </div>
        ))}
      </div>

      {selectedBat && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <h2>{selectedBat.name}</h2>
            <img src={`${process.env.PUBLIC_URL}/assets/${selectedBat.img_name}`} alt={selectedBat.name} />
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