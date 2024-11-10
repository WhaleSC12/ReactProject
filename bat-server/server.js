const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Simple root route
app.get('/', (req, res) => {
    res.send('Welcome to the Bat Conservation API!');
});

// Serve JSON data for the React app
app.get('/api/bats', (req, res) => {
    res.json(batsData);
});

// Mock data or import your JSON file data
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
  // ... add more bat data as needed
];

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
