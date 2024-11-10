// src/components/BreedItem.js
import React from 'react';

function BreedItem({ bat, onClick }) {
  return (
    <div className="breeds-item" onClick={() => onClick(bat)}>
      <img src={`${process.env.PUBLIC_URL}/assets/${bat.img_name}`} alt={bat.name} />
      <p>{bat.name}</p>
    </div>
  );
}

export default BreedItem;
