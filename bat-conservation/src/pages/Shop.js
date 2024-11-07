// Shop.js
import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

function Shop() {
  const [shopItems, setShopItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Fetch the bat items from the local JSON file
    fetch('/data/bats.json')
      .then((response) => response.json())
      .then((data) => setShopItems(data))
      .catch((error) => console.error('Error fetching bat data:', error));
  }, []);

  return (
    <main className="container">
      <h1 className="shop-heading">Shop Our Products</h1>
      <section className="shop-gallery">
        {shopItems.map((item) => (
          <div key={item._id} className="shop-item" onClick={() => setSelectedItem(item)}>
            <img src={item.img_name} alt={item.name} />
            <p>{item.name}<br />${item.price || 'N/A'}</p>
          </div>
        ))}
      </section>
      {selectedItem && (
        <div className="modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setSelectedItem(null)}>&times;</span>
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.img_name} alt={selectedItem.name} />
            <p>Price: ${selectedItem.price || 'N/A'}</p>
            <p>Conservation Status: {selectedItem.conservationStatus}</p>
            <p>Notable Fact: {selectedItem.notable}</p>
            <p>Countries: {selectedItem.countries.join(', ')}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Shop;
