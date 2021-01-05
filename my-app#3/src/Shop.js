import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();
    console.log(data);
    setItems(data);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="shop-css">
      {items.map((item) => (
        <Link to={`/shop/${item.id}`}>
          <h1 key={item.id}>{item.title}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
