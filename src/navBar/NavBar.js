import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
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

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                data-toggle="dropdown"
                alt=""
                href="menu"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                Tipos De Notificación
              </a>
              <div className="dropdown-menu dropdown-menu-center">
                <a className="dropdown-item" href="/inicio_averia">
                  Nueva averia{" "}
                </a>

                <div className="dropdown-divider" />

                <a className="dropdown-item" href="/actualizacion_averia">
                  Actualización de averia
                </a>

                <div className="dropdown-divider" />

                <a className="dropdown-item" href="/fin_averia">
                  Cierre de averia
                </a>                
              </div>
            </li>

            <a className="nav-link text-white" href="/login">
                Logout
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
