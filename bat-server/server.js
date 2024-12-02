// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, '../bat-conservation/build')));

// Serve images and other assets from the public folder
app.use('/assets', express.static(path.join(__dirname, '../bat-conservation/public/assets')));

// API Documentation Route
app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, '../bat-conservation/public', 'api-docs.html'));
});

// API endpoint to serve JSON data for bats
app.get('/api/bats', (req, res) => {
    res.json(batsData);
});

// Bat data array with updated asset paths
const batsData = [
    {
        "_id": 1,
        "name": "Big Brown Bat",
        "img_name": "/assets/bigbrownbat.jpg",
        "conservationStatus": "Least Concern",
        "notable": "Can live over 20 years.",
        "countries": ["Canada", "USA", "Mexico"]
    },
    {
        "_id": 2,
        "name": "Canary Long-eared Bat",
        "img_name": "/assets/canarylongearedbat.png",
        "conservationStatus": "Endangered",
        "notable": "Has long ears adapted for echolocation.",
        "countries": ["Canada", "USA"]
    },
    {
        "_id": 3,
        "name": "Eastern Red Bat",
        "img_name": "/assets/easternredbat.jpg",
        "conservationStatus": "Least Concern",
        "notable": "Known for its reddish fur.",
        "countries": ["Eastern USA", "Canada"]
    },
    {
        "_id": 4,
        "name": "Florida Bonneted Bat",
        "img_name": "/assets/floridabonnetedbat.jpg",
        "conservationStatus": "Critically Endangered",
        "notable": "One of the rarest bats in North America.",
        "countries": ["Florida, USA"]
    },
    {
        "_id": 5,
        "name": "Flying Fox Bat",
        "img_name": "/assets/flyingfoxbat.jpg",
        "conservationStatus": "Vulnerable",
        "notable": "Largest species of bat.",
        "countries": ["Not native to North America"]
    },
    {
        "_id": 6,
        "name": "Greater Bulldog Bat",
        "img_name": "/assets/greaterbulldogbat.png",
        "conservationStatus": "Least Concern",
        "notable": "Feeds on fish using echolocation.",
        "countries": ["Southern USA"]
    },
    {
        "_id": 7,
        "name": "Hoary Bat",
        "img_name": "/assets/hoarybat.jpg",
        "conservationStatus": "Least Concern",
        "notable": "Migratory species, one of the most widespread in North America.",
        "countries": ["USA, Canada, Mexico"]
    },
    {
        "_id": 8,
        "name": "Mexican Free-tailed Bat",
        "img_name": "/assets/mexicanfreetailedbat.jpg",
        "conservationStatus": "Least Concern",
        "notable": "Known for its speed and agility in flight.",
        "countries": ["USA, Mexico"]
    },
    {
        "_id": 9,
        "name": "Vampire Bat",
        "img_name": "/assets/vampirebat.jpg",
        "conservationStatus": "Least Concern",
        "notable": "Feeds on blood, primarily livestock.",
        "countries": ["Southern USA, Mexico"]
    },
    {
        "_id": 10,
        "name": "Yellow Bat",
        "img_name": "/assets/yellowbat.jpg",
        "conservationStatus": "Least Concern",
        "notable": "Yellowish fur provides good camouflage.",
        "countries": ["Southern USA"]
    }
];

// Catch-all handler for any request that doesn’t match an API route
// This will serve your React app’s index.html for all non-API routes


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Serve API documentation
app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, '../bat-conservation/public', 'api-docs.html'));
});

// Redirect root to documentation
app.get('/', (req, res) => {
    res.redirect('/docs');
});

// Import Joi for validation
const Joi = require("joi");

// Define Joi schema for bat validation
const batSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    conservationStatus: Joi.string().min(3).max(30).required(),
    notable: Joi.string().min(5).max(100).required(),
    countries: Joi.string().required(),
    img_name: Joi.string().required(),
});

// Handle POST request to add a new bat
app.post('/api/bats', (req, res) => {
    // Validate incoming data against the schema
    const { error } = batSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ success: false, message: error.details[0].message });
    }

    // Create new bat object
    const newBat = {
        _id: batsData.length + 1, // Generate unique ID
        ...req.body,
    };

    // Add new bat to the in-memory batsData array
    batsData.push(newBat);

    // Respond with the newly added bat
    res.status(201).send({ success: true, newBat });
});

// Catch-all route to serve React app for undefined routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../bat-conservation/build", "index.html"));
});

app.put('/api/bats/:id', (req, res) => {
    console.log("PUT request received with data:", req.body); // Log incoming data
    console.log("Bat ID from URL:", req.params.id); // Log the ID from the URL
  
    const { id } = req.params;
    const { error } = batSchema.validate(req.body);
    if (error) {
      console.error("Validation error:", error.details); // Log validation errors
      return res.status(400).send({ success: false, message: error.details[0].message });
    }
  
    const index = batsData.findIndex((bat) => bat._id === parseInt(id));
    if (index === -1) {
      console.error("Bat not found for ID:", id); // Log if the bat is not found
      return res.status(404).send({ success: false, message: "Bat not found" });
    }
  
    batsData[index] = { ...batsData[index], ...req.body };
    console.log("Updated bat:", batsData[index]); // Log the updated bat
    res.status(200).send({ success: true, updatedBat: batsData[index] });
  });
  
    

  app.delete('/api/bats/:id', (req, res) => {
    const { id } = req.params;
    const index = batsData.findIndex((bat) => bat._id === parseInt(id));
    if (index === -1) return res.status(404).send({ success: false, message: "Bat not found" });
  
    batsData.splice(index, 1);
    res.status(200).send({ success: true });
  });
    
