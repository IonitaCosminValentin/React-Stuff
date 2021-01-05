import React, { useState, useEffect } from "react";

function Render({ match }) {
  useEffect(() => {
    getItem();
  }, []);

  const [item, setItem] = useState({});

  const getItem = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    const item = await data.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div>
      <div>{item.title}</div>
      <div>{item.category}</div>
      <div>
        <br></br>
      </div>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <br></br>
      </div>
      <div>{item.description}</div>
      <div>
        <br></br>
      </div>
      <div>{item.price}$</div>
    </div>
  );
}
export default Render;
