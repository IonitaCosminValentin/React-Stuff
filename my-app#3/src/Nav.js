import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const white = {
    color: "white",
  };
  return (
    <div>
      <nav>
        <Link to="/" style={white}>
          <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
          <Link to="/Shop" style={white}>
            <li>Shop</li>
          </Link>
          <Link to="/About" style={white}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
