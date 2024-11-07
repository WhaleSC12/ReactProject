// src/pages/Shop.js
import React, { useState } from 'react';
import '../styles/styles.css';

function Shop() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, name: 'Bat T-shirt', price: '$25', img: `${process.env.PUBLIC_URL}/assets/tshirt.png` },
    { id: 2, name: 'Bat House', price: '$75', img: `${process.env.PUBLIC_URL}/assets/bathouse.jpg` },
    { id: 3, name: 'Bat Plush Toy', price: '$20', img: `${process.env.PUBLIC_URL}/assets/bat-plush.png` },
    { id: 4, name: 'Bat Mug', price: '$15', img: `${process.env.PUBLIC_URL}/assets/bat-mug.jpg` },
    { id: 5, name: 'Bat Poster', price: '$10', img: `${process.env.PUBLIC_URL}/assets/bat-poster.jpg` },
    { id: 6, name: 'Bat Guidebook', price: '$20', img: `${process.env.PUBLIC_URL}/assets/bat-guidebook.jpg` }
];


  return (
    <div className="shop-container">
      <h1 className="shop-heading">Shop</h1>
      <div className="shop-grid">
        {items.map((item) => (
          <div key={item.id} className="shop-item" onClick={() => setSelectedItem(item)}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setSelectedItem(null)}>&times;</span>
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.img} alt={selectedItem.name} style={{ width: '100%' }} />
            <p>Price: {selectedItem.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
