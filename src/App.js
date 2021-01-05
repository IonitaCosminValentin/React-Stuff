import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Register from "./Components/Register";
import SingIn from "./Components/SingIn";

function App() {
  const [users, SetUsers] = useState([]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SingIn}>
            <SingIn users={users} SetUsers={SetUsers} />
          </Route>
          <Route path="/Register" exact component={Register}>
            <Register users={users} SetUsers={SetUsers} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
