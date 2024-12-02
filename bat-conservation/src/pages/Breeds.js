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
        const response = await axios.get(
          "https://reactproject-obah.onrender.com/api/bats"
        );
        setBats(response.data);
      } catch (error) {
        console.error("Error fetching bats:", error);
      }
    })();
  }, []);

  const addBat = (newBat) => setBats([...bats, newBat]);

  const editBat = async (updatedBat) => {
    try {
      const response = await axios.put(
        `https://reactproject-obah.onrender.com/api/bats/${updatedBat._id}`,
        updatedBat
      );
  
      if (response.status === 200 && response.data.success) {
        // Update the local state with the updated bat
        setBats((prevBats) =>
          prevBats.map((bat) =>
            bat._id === updatedBat._id ? response.data.updatedBat : bat
          )
        );
        setShowEditDialog(false);
      } else {
        console.error("Failed to update bat:", response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Validation error:", error.response.data.message);
      } else {
        console.error("Error editing bat:", error);
      }
    }
  };
  
  

  const deleteBat = async (batId) => {
    try {
      const response = await axios.delete(
        `https://reactproject-obah.onrender.com/api/bats/${batId}`
      );
      if (response.status === 200) {
        setBats(bats.filter((bat) => bat._id !== batId));
      }
    } catch (error) {
      console.error("Error deleting bat:", error);
    }
  };

  const handleBatClick = (bat) => {
    setSelectedBat(bat);
  };

  return (
    <div id="breeds" style={{ paddingTop: "100px" }}>
      <div className="breeds-gallery">
        {bats.map((bat) => (
          <div key={bat._id} className="breeds-item">
            <img
              src={`https://reactproject-obah.onrender.com${bat.img_name}`}
              alt={bat.name}
              onClick={() => handleBatClick(bat)}
            />
            <p>{bat.name}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedBat(bat);
                setShowEditDialog(true);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteBat(bat._id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="add-bat-container">
        <button id="add-bat" onClick={() => setShowAddDialog(true)}>
          +
        </button>
      </div>
      {showAddDialog && (
        <AddDialog
          addBat={addBat}
          closeDialog={() => setShowAddDialog(false)}
        />
      )}
      {showEditDialog && (
        <AddDialog
          bat={selectedBat}
          editBat={editBat}
          closeDialog={() => setShowEditDialog(false)}
        />
      )}
      {selectedBat && (
  <div className="modal-overlay" onClick={() => setSelectedBat(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <span className="close" onClick={() => setSelectedBat(null)}>
        &times;
      </span>
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


