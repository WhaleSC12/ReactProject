// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (for images, JSON, and HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Simple root route to display HTML page with API information
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Adjusted path if index.html is in public
});

// Serve JSON data for the React app
app.get('/api/bats', (req, res) => {
    res.json(batsData);
});

// Bat data array
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
