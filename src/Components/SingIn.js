import React, { useState } from "react";
import { Link } from "react-router-dom";

function SingIn({ users, SetUsers }) {
  const [input, SetInput] = useState({
    email: "",
    pass: "",
  });

  const forms2 = (e) => {
    SetInput({ ...input, email: e.target.value });
    console.log(input.email);
  };

  const forms = (e) => {
    SetInput({ ...input, pass: e.target.value });
    console.log(input.pass);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    if (input.name === users.input && input.pass === users.pass) {
      console.log("WORKS!");
    } else {
      console.log("Wrong email or pass buddy!");
    }
  };
  return (
    <div>
      <form onSubmit={submitHandle}>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            value={input.email}
            onChange={forms2}
          />
        </div>
        <div>
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            value={input.pass}
            onChange={forms}
          />
        </div>
        <div>
          <button>Log In</button>
        </div>
      </form>
      <Link to="/Register">
        <h3>Sing Up</h3>
      </Link>
    </div>
  );
}

export default SingIn;
