import React from "react";
import kanye from "../images/1294788.jpg";
import gnf from "../images/gnf.png";
import d from "../images/d.jpg";
import a from "../images/a.jpg";
import { connect } from "react-redux";
import { AddBasket } from "../actions/addAction";

function Home(props) {
  return (
    <div className="container">
      <div className="image image1">
        <img src={kanye} alt="" />
        <h3>Kanye T-Shirt</h3>
        <h3>$15.00</h3>
        <a
          onClick={() => {
            props.AddBasket("KanyeTshirt");
          }}
          href="#"
          className="addToCart cart1"
        >
          Add To Cart
        </a>
      </div>
      <div className="image image2">
        <img src={gnf} alt="" />
        <h3>GeorgeNotFound Hoddie</h3>
        <h3>$50.00</h3>
        <a
          onClick={() => {
            props.AddBasket("GeorgeNotFoundHoddie");
          }}
          href="#"
          className="addToCart cart2"
        >
          Add To Cart
        </a>
      </div>
      <div className="image image3">
        <img src={d} alt="" />
        <h3>Flamingo Hoddie</h3>
        <h3>$45.00</h3>
        <a
          onClick={() => {
            props.AddBasket("FlamingoHoodie");
          }}
          href="#"
          className="addToCart cart3"
        >
          Add To Cart
        </a>
      </div>
      <div className="image image4">
        <img src={a} alt="" />
        <h3>Gray Hoddie</h3>
        <h3>$35.00</h3>
        <a
          onClick={() => {
            props.AddBasket("GrayHoddie");
          }}
          href="#"
          className="addToCart cart4"
        >
          Add To Cart
        </a>
      </div>
    </div>
  );
}

export default connect(null, { AddBasket })(Home);
