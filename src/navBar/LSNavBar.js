import React, { Component } from "react";
import "./NavBar.css";

class LSNavBar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-custom">
        <p className="navbar-brand">Notificación Averia</p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-collapse">
          ☰
        </button>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item active">
              {" "}
            </li>
            <a className="nav-link text-white" href="/SignUp">
                Sign Up
            </a>

            <a className="nav-link text-white" href="/login">
                Login
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}
export default LSNavBar;
