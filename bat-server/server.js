const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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

// Endpoint to get bat data
app.get('/api/bats', (req, res) => {
  res.json(batsData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
