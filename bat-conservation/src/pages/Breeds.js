// src/pages/Breeds.js
import React, { useEffect, useState } from 'react';

export default function Breeds() {
    const [bats, setBats] = useState([]);

    useEffect(() => {
        fetch('/bats.json')
            .then(response => response.json())
            .then(data => setBats(data))
            .catch(error => console.error('Error fetching bat data:', error));
    }, []);

    return (
        <div className="gallery">
            {bats.map((bat) => (
                <div className="gallery-item" key={bat._id}>
                    <img src={bat.img_name} alt={bat.name} />
                    <p>{bat.name}</p>
                </div>
            ))}
        </div>
    );
}
