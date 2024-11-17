import React, { useState, useEffect } from "react";
import axios from "axios";
import AddDialog from "../components/AddDialog";
import "../styles/breeds.css";

const Breeds = () => {
  const [bats, setBats] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [selectedBat, setSelectedBat] = useState(null);

  // Fetch existing bats when the component mounts
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://reactproject-obah.onrender.com/api/bats");
        setBats(response.data);
        console.log("Fetched bats:", response.data);
      } catch (error) {
        console.error("Error fetching bats:", error);
      }
    })();
  }, []);

  const addBat = (newBat) => {
    setBats((prevBats) => [...prevBats, newBat]);
  };

  const openAddDialog = () => {
    console.log("Add Dialog opened");
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    console.log("Add Dialog closed");
    setShowAddDialog(false);
  };

  return (

    
    <div id="breeds">

              {fsdfdsfjdsfnjewnfjnewkjfnkenkj}
      <div style={{ height: "80px", backgroundColor: "transparent" }}>
        {fdsjfisdnifdsjfjsdifjidsfj}
        <p style={{ visibility: "hidden" }}>This is placeholder text to push content down.</p>
      </div>

      {/* Display Bats */}
      <div className="breeds-gallery">
        {bats.map((bat) => (
          <div
            key={bat._id}
            className="breeds-item"
            onClick={() => setSelectedBat(bat)}
          >
            <img
              src={`https://reactproject-obah.onrender.com${bat.img_name}`}
              alt={bat.name}
            />
            <p>{bat.name}</p>
          </div>
        ))}
      </div>

      {/* Add Button at the Bottom */}
      <div className="add-bat-container">
        <button id="add-bat" onClick={openAddDialog}>
          +
        </button>
      </div>

      {/* Add Dialog */}
      {showAddDialog && (
        <AddDialog addBat={addBat} closeDialog={closeAddDialog} />
      )}

      {/* Bat Detail Modal */}
      {selectedBat && (
        <div className="modal-overlay" onClick={() => setSelectedBat(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBat.name}</h2>
            <img
              src={`https://reactproject-obah.onrender.com${selectedBat.img_name}`}
              alt={selectedBat.name}
            />
            <p>
              <strong>Conservation Status:</strong> {selectedBat.conservationStatus}
            </p>
            <p>
              <strong>Notable Features:</strong> {selectedBat.notable}
            </p>
            <p>
              <strong>Countries Found In:</strong> {selectedBat.countries}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

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