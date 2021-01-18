import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_users_thunk } from "../redux/actions/user";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    dispatch(add_users_thunk(name, password));
    history.push("/admin/license/list");
  };

  return (
    <div className="centered-view">
      <div className="centered-container">
        <form className="centered-container-form">
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="email">Login</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="form-control"
                id="password"
              />
            </div>
            <button onClick={login} className="btn btn-outline-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
