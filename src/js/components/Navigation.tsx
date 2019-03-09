import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <NavLink to="/people">People</NavLink>
    <NavLink to="/about">About</NavLink>
  </nav>
)