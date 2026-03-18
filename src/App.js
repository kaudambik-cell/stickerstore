import React, { useState } from "react"; // 1. Import useState
import "./styles.css";

const stickers = [
  {
    id: 1,
    name: "Cool Emoji",
    price: "750",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Gaming Sticker",
    price: "100",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Anime Sticker",
    price: "180",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Motivation Quote",
    price: "160",
    img: "https://via.placeholder.com/150",
  },
];

export default function App() {
  // 2. Create the 'cart' state (starts at 0)
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1); // 3. Function to increase the count
  };

  return (
    <div className="App">
      <header
        style={{
          padding: "20px",
          background: "#222",
          color: "#fff",
          marginBottom: "20px",
        }}
      >
        <h1>Sticker Store</h1>
        {/* 4. Display the count */}
        <p>
          Items in Cart: <strong>{cartCount}</strong>
        </p>
      </header>

      <div className="sticker-list">
        {stickers.map((sticker) => (
          <div key={sticker.id} className="sticker-card">
            <img src={sticker.img} alt={sticker.name} />
            <h3>{sticker.name}</h3>
            <p>Price: ${sticker.price}</p>
            {/* 5. Attach the function to the button */}
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
