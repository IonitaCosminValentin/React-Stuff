import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import Render from "./ItemRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/shop/:id" component={Render}></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h3>Home Page</h3>
    </div>
  );
}

export default App;
