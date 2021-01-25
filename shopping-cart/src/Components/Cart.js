import React, { Fragment } from "react";
import { connect } from "react-redux";
import kanye from "../images/1294788.jpg";
import gnf from "../images/gnf.png";
import d from "../images/d.jpg";
import a from "../images/a.jpg";
import { productQuantity } from "../actions/productQuantity";

function Cart({ basketProps, productQuantity }) {
  let productsInCart = [];
  Object.keys(basketProps.products).forEach(function (item) {
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
  });
  function productImages(product) {
    if (product.tagName === "kanye") {
      return kanye;
    } else if (product.tagName === "gnf") {
      return gnf;
    } else if (product.tagName === "d") {
      return d;
    } else if (product.tagName === "a") {
      return a;
    }
  }

  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment>
        <div className="product">
          <ion-icon name="close-circle"></ion-icon>
          <img src={productImages(product)} alt="" />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price},00</div>
        <div className="quantity">
          <ion-icon
            className="decrease"
            name="arrow-back-circle-outline"
          ></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon
            className="increase"
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">${product.numbers * product.price},00</div>
      </Fragment>
    );
  });
  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Basket Total</h4>
        <h4 className="basketTotal">{basketProps.cartCost}.00</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity })(Cart);
