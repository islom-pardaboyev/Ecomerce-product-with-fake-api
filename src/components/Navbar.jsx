import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import Logo from "../assets/images/new-logo.png";
import NavbarItemCart from "../components/NavItemCart";
import { NavbarContext } from "../context/NavbarContext";
import { SlBasket } from "react-icons/sl";
import { SidebarContext } from "../context/SidebarContext";
import { ProductContext } from "../context/ProductContext";

function Navbar() {
  const { savedProds } = useContext(ProductContext);
  const navbar = [
    { id: 1, title: "Users", path: "/" },
    { id: 2, title: "Products", path: "/products" },
  ];
  const { setDarkMode, darkMode } = useContext(NavbarContext);
  const { showSideBar, setShowSideBar } = useContext(SidebarContext);

  const ThemeIcon = darkMode ? BsFillMoonStarsFill : IoSunnyOutline;

  return (
    <nav className="w-full fixed right-0 top-0 z-10">
      <div className="bg-rose-500 text-white backdrop-blur-lg flex items-center px-6 justify-between">
        <Link to={"/"}>
          <img src={Logo} width={100} alt="Logo" />
        </Link>
        <ul className="flex items-center text-xl gap-3">
          {navbar.map((nav) => (
            <NavbarItemCart key={nav.id} nav={nav} />
          ))}
          <li
            onClick={() => setShowSideBar(!showSideBar)}
            className="relative cursor-pointer"
          >
            <SlBasket />
            <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-white flex items-center justify-center text-red-500 text-xs font-medium">
              {savedProds.length}
            </div>
          </li>
        </ul>

        <ThemeIcon
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl font-semibold cursor-pointer"
        />
      </div>
    </nav>
  );
}

export default Navbar;
