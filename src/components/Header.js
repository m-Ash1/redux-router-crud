import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink end to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/post/add">Add Post</NavLink>
        </li>
        <NavLink className="login" to="login">
          login
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
