import React, { useState, useEffect } from "react";
import axios from "axios";
import Joi from "joi-browser";
import "../styles/add-dialog.css";

const AddDialog = ({ addBat, editBat, closeDialog, bat }) => {
  const [formData, setFormData] = useState({
    name: "",
    conservationStatus: "",
    notable: "",
    countries: "",
    img_name: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (bat) {
      // Pre-fill the form if a bat is provided for editing
      setFormData({
        name: bat.name,
        conservationStatus: bat.conservationStatus,
        notable: bat.notable,
        countries: bat.countries,
        img_name: bat.img_name,
      });
    }
  }, [bat]);

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
  
    if (!validateForm()) return; // Ensure client-side validation passes
  
    try {
      if (bat) {
        // Editing an existing bat
        const { _id, ...batData } = formData; // Exclude _id from the request body
        console.log("Submitting updated bat without _id:", batData); // Debugging log
        await editBat(_id, batData); // Pass the _id separately
      } else {
        // Adding a new bat
        const response = await axios.post(
          "https://reactproject-obah.onrender.com/api/bats",
          formData
        );
  
        if (response.status === 201 && response.data.newBat) {
          addBat(response.data.newBat);
        }
      }
      closeDialog(); // Close the modal
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred while submitting the form. Please try again.");
    }
  };
  
    


  return (
    <div className="add-dialog-overlay">
      <div className="add-dialog">
        <h2>{bat ? "Edit Bat" : "Add a New Bat"}</h2>
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
            <option value="/assets/canarylongearedbat.png">
              Canary Long-eared Bat
            </option>
            <option value="/assets/easternredbat.jpg">Eastern Red Bat</option>
            <option value="/assets/floridabonnetedbat.jpg">
              Florida Bonneted Bat
            </option>
            <option value="/assets/flyingfoxbat.jpg">Flying Fox Bat</option>
            <option value="/assets/greaterbulldogbat.png">
              Greater Bulldog Bat
            </option>
            <option value="/assets/hoarybat.jpg">Hoary Bat</option>
            <option value="/assets/mexicanfreetailedbat.jpg">
              Mexican Free-tailed Bat
            </option>
            <option value="/assets/vampirebat.jpg">Vampire Bat</option>
            <option value="/assets/yellowbat.jpg">Yellow Bat</option>
          </select>
          <button type="submit">{bat ? "Save Changes" : "Add Bat"}</button>
          <button type="button" onClick={closeDialog}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDialog;
