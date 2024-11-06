// Shop.js
import React, { useState } from 'react';
import './styles.css';

function Shop() {
  const [selectedItem, setSelectedItem] = useState(null);

  const shopItems = [
    { name: "Bat T-shirt", price: 25, image: "https://naturetshirts.com/cdn/shop/products/littlebrownbat_1200x1200.png" },
    { name: "Bat House", price: 75, image: "https://www.merlintuttle.org/wp-content/uploads/2020/09/US_4_DSC01662-Edit.jpg" }
  ];

  return (
    <main className="container">
      <h1 className="shop-heading">Shop Our Products</h1>
      <section className="shop-gallery">
        {shopItems.map((item, index) => (
          <div key={index} className="shop-item" onClick={() => setSelectedItem(item)}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}<br />${item.price}</p>
          </div>
        ))}
      </section>
      {selectedItem && (
        <div className="modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content">
            <span className="close-modal" onClick={() => setSelectedItem(null)}>&times;</span>
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.image} alt={selectedItem.name} />
            <p>Price: ${selectedItem.price}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Shop;
