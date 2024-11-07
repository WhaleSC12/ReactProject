import React, { useState } from 'react';

function Shop() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const items = [
    {
      title: 'Bat T-shirt',
      price: '25',
      imageUrl: 'https://naturetshirts.com/cdn/shop/products/littlebrownbat_1200x1200.png?v=1658922048',
    },
    {
      title: 'Bat House',
      price: '75',
      imageUrl: 'https://www.merlintuttle.org/wp-content/uploads/2020/09/US_4_DSC01662-Edit.jpg',
    },
    {
      title: 'Bat Plush Toy',
      price: '20',
      imageUrl: '/images/bat-plush.png',
    },
    {
      title: 'Bat Conservation Mug',
      price: '15',
      imageUrl: '/images/bat-mug.jpg',
    },
    {
      title: 'Bat Poster',
      price: '10',
      imageUrl: '/images/bat-poster.jpg',
    },
    {
      title: 'Bat Conservation Guidebook',
      price: '30',
      imageUrl: '/images/bat-guidebook.jpg',
    },
  ];

  const showCart = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="container">
      <h1 className="shop-heading">Shop Our Products</h1>
      <section className="shop-gallery">
        {items.map((item, index) => (
          <div key={index} className="shop-item" onClick={() => showCart(item)}>
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}<br />${item.price}</p>
          </div>
        ))}
      </section>

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h2>{selectedItem.title}</h2>
            <img src={selectedItem.imageUrl} alt={selectedItem.title} style={{ width: '100%' }} />
            <p>Price: ${selectedItem.price}</p>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
            <button className="submit-button">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
