import React, { useState } from "react";
import axios from "axios";
import Joi from "joi-browser";
import "../styles/add-dialog.css";

const AddDialog = ({ addBat, closeDialog }) => {
  const [formData, setFormData] = useState({
    name: "",
    conservationStatus: "",
    notable: "",
    countries: "",
    img_name: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Validation schema
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    conservationStatus: Joi.string().min(3).max(30).required(),
    notable: Joi.string().min(5).max(100).required(),
    countries: Joi.string().required(),
    img_name: Joi.string().required(),
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validateForm = () => {
    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      setErrorMessage(error.details.map((detail) => detail.message).join(", "));
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    try {
      console.log("Submitting data:", formData); // Debugging log
      const response = await axios.post(
        "https://reactproject-obah.onrender.com/api/bats",
        formData
      );
  
      console.log("API Response:", response.data); // Debugging log
  
      if (response.status === 201 && response.data.newBat) {
        addBat(response.data.newBat); // Update the bat list
        closeDialog(); // Close the dialog
      } else {
        setErrorMessage("Failed to add bat. Invalid server response.");
      }
    } catch (error) {
      console.error("Error adding bat:", error);
      setErrorMessage("An error occurred while adding the bat. Please try again.");
    }
  };
      

  return (
    <div className="add-dialog-overlay">
      <div className="add-dialog">
        <h2>Add a New Bat</h2>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="conservationStatus"
            placeholder="Conservation Status"
            value={formData.conservationStatus}
            onChange={handleChange}
            required
          />
          <textarea
            name="notable"
            placeholder="Notable Feature"
            value={formData.notable}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="text"
            name="countries"
            placeholder="Countries (comma-separated)"
            value={formData.countries}
            onChange={handleChange}
            required
          />
          <select
            name="img_name"
            value={formData.img_name}
            onChange={handleChange}
            required
          >
            <option value="">Select an Image</option>
            <option value="/assets/bigbrownbat.jpg">Big Brown Bat</option>
            <option value="/assets/canarylongearedbat.png">Canary Long-eared Bat</option>
            <option value="/assets/easternredbat.jpg">Eastern Red Bat</option>
          </select>
          <button type="submit">Add Bat</button>
          <button type="button" onClick={closeDialog}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDialog;
