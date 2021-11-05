import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/style.css";
export const Nav = () => {
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    navigate('/')
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/create-role" className="nav-link">
                Create Role
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/addUser" className="nav-link">
                create user
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/students" className="nav-link">
                View students
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/login" className="nav-link" >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
