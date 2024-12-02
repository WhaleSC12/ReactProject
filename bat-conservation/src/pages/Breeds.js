import React, { useState, useEffect } from "react";
import axios from "axios";
import AddDialog from "../components/AddDialog";
import "../styles/breeds.css";

const Breeds = () => {
  const [bats, setBats] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedBat, setSelectedBat] = useState(null);

  useEffect(() => {
    // Fetch bats on mount
    (async () => {
      try {
        const response = await axios.get("https://reactproject-obah.onrender.com/api/bats");
        setBats(response.data);
      } catch (error) {
        console.error("Error fetching bats:", error);
      }
    })();
  }, []);

  const addBat = (newBat) => setBats([...bats, newBat]);

  const editBat = async (updatedBat) => {
    try {
      const response = await axios.put(`https://reactproject-obah.onrender.com/api/bats/${updatedBat._id}`, updatedBat);
      if (response.status === 200) {
        setBats(bats.map((bat) => (bat._id === updatedBat._id ? updatedBat : bat)));
        setShowEditDialog(false);
      }
    } catch (error) {
      console.error("Error editing bat:", error);
    }
  };

  const deleteBat = async (batId) => {
    try {
      const response = await axios.delete(`https://reactproject-obah.onrender.com/api/bats/${batId}`);
      if (response.status === 200) {
        setBats(bats.filter((bat) => bat._id !== batId));
      }
    } catch (error) {
      console.error("Error deleting bat:", error);
    }
  };

  return (
    <div id="breeds" style={{ paddingTop: "100px" }}>
      <div className="breeds-gallery">
        {bats.map((bat) => (
          <div key={bat._id} className="breeds-item">
            <img src={`https://reactproject-obah.onrender.com${bat.img_name}`} alt={bat.name} />
            <p>{bat.name}</p>
            <button onClick={() => { setSelectedBat(bat); setShowEditDialog(true); }}>Edit</button>
            <button onClick={() => deleteBat(bat._id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-bat-container">
        <button id="add-bat" onClick={() => setShowAddDialog(true)}>+</button>
      </div>
      {showAddDialog && <AddDialog addBat={addBat} closeDialog={() => setShowAddDialog(false)} />}
      {showEditDialog && <AddDialog bat={selectedBat} editBat={editBat} closeDialog={() => setShowEditDialog(false)} />}
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