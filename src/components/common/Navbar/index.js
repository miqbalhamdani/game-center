import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

import "./navbar.css";

export default function Navbar() {
  const email = useSelector(state => state.user.profile.email)

  const guestMenu = () => (
    <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          REGISTER
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          LOGIN
        </Link>
      </li>
    </ul>
  );

  const UserMenu = () => (
    <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/profile">
          {email}
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">
          LOGOUT
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-space-betweenÍ"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/game-list">
                GAME LIST
              </Link>
            </li>
          </ul>

          { email ? UserMenu() : guestMenu() }
        </div>
      </div>
    </nav>
  );
}
