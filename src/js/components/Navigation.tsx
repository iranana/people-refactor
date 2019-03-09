import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav className="navbar is-light">
    <NavLink to="/people" className="navbar-item">People</NavLink>
    <NavLink to="/about" className="navbar-item">About</NavLink>
  </nav>
)