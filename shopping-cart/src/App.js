import React from "react";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/Cart" component={Cart}></Route>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
