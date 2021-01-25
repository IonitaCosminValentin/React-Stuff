import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

function NavBar(props) {
  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <div>
      <header>
        <div className="overlay"></div>
        <nav>
          <Link to="/">
            <h2>Shop</h2>
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li className="cart">
              <Link to="/Cart">
                <ion-icon name="basket-outline"></ion-icon>
                Cart
                <span> {props.basketProps.basketNumbers}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(NavBar);
