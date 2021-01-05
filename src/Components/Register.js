import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ users, SetUsers }) {
  const [user, SetUser] = useState({ name: "", email: "", pass: "" });

  function fnc(e) {
    console.log(user.name);
    return SetUser({ ...user, name: e.target.value });
  }
  function fnc2(f) {
    console.log(user.email);
    return SetUser({ ...user, email: f.target.value });
  }
  function fnc3(g) {
    console.log(user.pass);
    return SetUser({ ...user, pass: g.target.value });
  }

  const refreshHandler = (e) => {
    e.preventDefault();
    SetUsers(user);
  };

  return (
    <div id="register">
      <form onSubmit={refreshHandler}>
        <div>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            value={user.name}
            onChange={fnc}
            id="name"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email"
            value={user.email}
            onChange={fnc2}
            id="email"
          />
        </div>
        <div>
          <input
            type="password"
            name="pass"
            id=""
            placeholder="Password"
            value={user.pass}
            onChange={fnc3}
            id="pass"
          />
        </div>
        <div>
          <button onClick={refreshHandler}>Submit</button>
        </div>
      </form>
      <div>
        <Link to="/">
          <h3>Log In</h3>
        </Link>
      </div>
    </div>
  );
}

export default Register;
