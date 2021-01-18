import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { delete_user } from "../redux/actions/user";

function Navbar() {
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const logout = () => {
    window.localStorage.setItem("user", "");
    dispatch(delete_user())
  };

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            onClick={() => history.push("/admin/license/list")}
            className="btn btn-outline-success ml-2"
          >
            Все Лицензии
          </button>
        </div>
        <div className="chat-navbar-inner-right">
          <button
            onClick={() => history.push("/admin/license/create")}
            className="btn btn-outline-danger ml-2"
          >
            Создать
          </button>
          {user ? (
            <button
              className="btn btn-outline-success ml-2"
              onClick={logout}
            >
              LogOut
            </button>
          ) : (
            <button
              onClick={() => history.push("/login")}
              className="btn btn-outline-success ml-2"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
