import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

function Breeds() {
    const [bats, setBats] = useState([]);
    const [selectedBat, setSelectedBat] = useState(null);

    useEffect(() => {
        fetch('/data/bats.json')
            .then(response => response.json())
            .then(data => setBats(data))
            .catch(error => console.error('Error fetching bat data:', error));
    }, []);

    return (
        <div className="gallery">
            {bats.map((bat, index) => (
                <div key={index} className="gallery-item" onClick={() => setSelectedBat(bat)}>
                    <img src={bat.img_name} alt={bat.name} />
                    <p>{bat.name}</p>
                </div>
            ))}
            {selectedBat && (
                <div className="modal" id="batModal" onClick={() => setSelectedBat(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2 id="batTitle">{selectedBat.name}</h2>
                        <img src={selectedBat.img_name} alt={selectedBat.name} />
                        <p><strong>Conservation Status:</strong> {selectedBat.conservationStatus}</p>
                        <p><strong>Notable Features:</strong> {selectedBat.notable}</p>
                        <p><strong>Countries Found In:</strong> {selectedBat.countries.join(', ')}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Breeds;
