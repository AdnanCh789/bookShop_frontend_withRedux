import React from "react";
import { getCurrentUser } from "../helper/helper";
import { NavLink } from "react-router-dom";

function Menu() {
  const user = getCurrentUser();
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-primary">
        <NavLink className="navbar-brand mx-3" to="/">
          BookShop
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {!user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                  Signin
                </NavLink>
              </li>
            )}
            {!user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/signout">
                Signout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/dashboard">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
