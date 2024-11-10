// src/pages/ShopItem.js
import React from 'react';

function ShopItem({ item, onClick }) {
  return (
    <div className="shop-item" onClick={() => onClick(item)}>
      <img src={item.img} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  );
}

export default ShopItem;
