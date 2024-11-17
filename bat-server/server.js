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

app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, '../bat-conservation/public', 'api-docs.html'));
});

app.get('/', (req, res) => {
    res.redirect('/docs');
});

app.post('/api/bats', (req, res) => {
    const newBat = req.body;
    
    if (!newBat.name || !newBat.conservationStatus || !newBat.notable || !newBat.countries || !newBat.img_name) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Generate a new unique ID for the bat
    newBat._id = batsData.length + 1;

    // Add the new bat to the in-memory storage
    batsData.push(newBat);

    res.status(201).json(newBat);
});


const Joi = require("joi");

app.post("/api/bats", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    conservationStatus: Joi.string().min(3).max(30).required(),
    notable: Joi.string().min(5).max(100).required(),
    countries: Joi.string().required(),
    img_name: Joi.string().uri().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ success: false, message: error.details[0].message });
  }

  const newBat = { _id: batsData.length + 1, ...req.body };
  batsData.push(newBat);

  res.send({ success: true, newBat });
});
