import React from "react";
import { Link  } from "react-router-dom";
import "../css/style.css";
export const Nav = () => {
  // const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    // navigate("/login");
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
              <Link to="/create-student" className="nav-link">
                create students
              </Link>
            </li>

            <li className="nav-item active">
              <Link to="/roles" className="nav-link">
                View Roles
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/permissions" className="nav-link">
                View permissions
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/content-type" className="nav-link">
                View content type
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/create-permission" className="nav-link">
               Create Permission
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/assign-role" className="nav-link">
               Assign Role
              </Link>
            </li>
            <li className="nav-item active">
              <a href="/login" className="nav-link" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
