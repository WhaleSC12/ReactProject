// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Breeds from './pages/Breeds';
import News from './pages/News';
import Shop from './pages/Shop';
import Safety from './pages/Safety';
import Navbar from './components/Navbar';
import './styles/styles.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/breeds" element={<Breeds />} />
                <Route path="/news" element={<News />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/safety" element={<Safety />} />
            </Routes>
        </Router>
    );
}

export default App;
