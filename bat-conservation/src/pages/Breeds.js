import React, { useState, useEffect } from "react";
import axios from "axios";
import AddDialog from "../components/AddDialog";
import "../styles/breeds.css";

const Breeds = () => {
  const [bats, setBats] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [viewModalBat, setViewModalBat] = useState(null); // Bat for viewing details
  const [editModalBat, setEditModalBat] = useState(null); // Bat for editing

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

  const editBat = async (id, updatedBat) => {
    console.log("Payload sent to server:", updatedBat); // Debugging log
    console.log("ID sent to server:", id); // Debugging log
    try {
      const response = await axios.put(
        `https://reactproject-obah.onrender.com/api/bats/${id}`, // Pass ID in URL
        updatedBat
      );
      console.log("Server response:", response.data); // Debugging log
  
      if (response.status === 200 && response.data.success) {
        // Update local state with the updated bat data
        setBats((prevBats) =>
          prevBats.map((bat) =>
            bat._id === id ? response.data.updatedBat : bat
          )
        );
        setShowEditDialog(false);
      }
    } catch (error) {
      console.error("Error editing bat:", error);
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
    setViewModalBat(bat); // Open the view modal
  };

  const handleEditClick = (bat) => {
    setEditModalBat(bat); // Open the edit modal
    setShowEditDialog(true);
  };

  return (
    <div id="breeds" style={{ paddingTop: "100px" }}>
      <div className="breeds-gallery">
        {bats.map((bat) => (
          <div key={bat._id} className="breeds-item">
            <img
              src={`https://reactproject-obah.onrender.com${bat.img_name}`}
              alt={bat.name}
              onClick={() => handleBatClick(bat)} // Open the view modal
            />
            <p>{bat.name}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEditClick(bat); // Open the edit modal
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
      {/* Add Bat Modal */}
      {showAddDialog && (
        <AddDialog
          addBat={addBat}
          closeDialog={() => setShowAddDialog(false)}
        />
      )}
      {/* Edit Bat Modal */}
      {showEditDialog && editModalBat && (
      <AddDialog
      bat={editModalBat} // Pass the bat to be edited
      editBat={editBat} // Pass the edit function
      closeDialog={() => {
      setShowEditDialog(false);
      setEditModalBat(null);
      }}
      />
      )}

      {/* View Bat Modal */}
      {viewModalBat && (
        <div className="modal-overlay" onClick={() => setViewModalBat(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setViewModalBat(null)}>
              &times;
            </span>
            <h2>{viewModalBat.name}</h2>
            <img
              src={`https://reactproject-obah.onrender.com${viewModalBat.img_name}`}
              alt={viewModalBat.name}
            />
            <p>
              <strong>Conservation Status:</strong>{" "}
              {viewModalBat.conservationStatus}
            </p>
            <p>
              <strong>Notable Features:</strong> {viewModalBat.notable}
            </p>
            <p>
              <strong>Countries Found In:</strong>{" "}
              {viewModalBat.countries}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Breeds;
