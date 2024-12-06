const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../bat-conservation/build')));
app.use('/assets', express.static(path.join(__dirname, '../bat-conservation/public/assets')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Bat model
const BatSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    conservationStatus: { type: String, required: true, minlength: 3, maxlength: 30 },
    notable: { type: String, required: true, minlength: 5, maxlength: 100 },
    countries: { type: [String], required: true },
    img_name: { type: String, required: true },
});

const Bat = mongoose.model('Bat', BatSchema);

// API routes
app.get('/api/bats', async (req, res) => {
    try {
        const bats = await Bat.find();
        res.json(bats);
    } catch (error) {
        res.status(500).json({ message: "Error fetching bats." });
    }
});

app.post('/api/bats', async (req, res) => {
    try {
        const batSchema = {
            name: { type: String, required: true, minlength: 3, maxlength: 30 },
            conservationStatus: { type: String, required: true, minlength: 3, maxlength: 30 },
            notable: { type: String, required: true, minlength: 5, maxlength: 100 },
            countries: { type: [String], required: true },
            img_name: { type: String, required: true },
        };

        const newBat = new Bat(req.body);
        const savedBat = await newBat.save();
        res.status(201).json(savedBat);
    } catch (err) {
        res.status(500).json({ message: "Error saving bat." });
    }
});

app.put('/api/bats/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBat = await Bat.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBat) return res.status(404).send({ message: "Bat not found." });
        res.status(200).json(updatedBat);
    } catch (err) {
        res.status(500).json({ message: "Error updating bat." });
    }
});

app.delete('/api/bats/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBat = await Bat.findByIdAndDelete(id);
        if (!deletedBat) return res.status(404).send({ message: "Bat not found." });
        res.status(200).json({ message: "Bat deleted." });
    } catch (err) {
        res.status(500).json({ message: "Error deleting bat." });
    }
});

const batsData = [
    {
        name: "Big Brown Bat",
        img_name: "/assets/bigbrownbat.jpg",
        conservationStatus: "Least Concern",
        notable: "Can live over 20 years.",
        countries: ["Canada", "USA", "Mexico"],
    },
    {
        name: "Canary Long-eared Bat",
        img_name: "/assets/canarylongearedbat.png",
        conservationStatus: "Endangered",
        notable: "Has long ears adapted for echolocation.",
        countries: ["Canada", "USA"],
    },
    {
        name: "Eastern Red Bat",
        img_name: "/assets/easternredbat.jpg",
        conservationStatus: "Least Concern",
        notable: "Known for its reddish fur.",
        countries: ["Eastern USA", "Canada"],
    },
    // Add all other bats from your original array here
];

// Function to populate the database with initial data
const populateInitialData = async () => {
    try {
        const count = await Bat.countDocuments();
        if (count === 0) {
            await Bat.insertMany(batsData);
            console.log("Initial bats data has been populated.");
        } else {
            console.log("Database already contains data, skipping initialization.");
        }
    } catch (error) {
        console.error("Error populating initial data:", error);
    }
};

// Call the function after connecting to the database
mongoose.connect(process.env.MONGO_URI  )
    .then(() => {
        console.log("Connected to MongoDB");
        populateInitialData(); // Populate data here
    })
    .catch((err) => console.error("MongoDB connection error:", err));


// Serve static files and fallback to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../bat-conservation/build/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

