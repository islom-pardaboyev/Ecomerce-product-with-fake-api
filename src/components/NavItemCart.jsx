import React from "react";
import { NavLink } from "react-router-dom";

function NavItemCart({nav}) {
  return (
    <li className="font-medium">
      <NavLink to={nav.path}>{nav.title}</NavLink>
    </li>
  );
}

export default NavItemCart;
