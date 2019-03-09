import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav className="navbar is-light">
    <div className="container">
      <NavLink to="/people" className="navbar-item" activeClassName="is-active">People</NavLink>
      <NavLink to="/about" className="navbar-item" activeClassName="is-active">About</NavLink>
    </div>
  </nav>
)