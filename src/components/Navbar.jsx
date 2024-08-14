import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/images/new-logo.png";
import NavbarItemCart from "../components/NavItemCart";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const navbar = [
    {
      id: 1,
      title: "Users",
      path: "/",
    },
    {
      id: 2,
      title: "Products",
      path: "/products",
    },
  ];
  return (
    <nav className="w-full sticky top-0 z-40">
      <div className="container mx-auto bg-black/30 text-white backdrop-blur-lg rounded-md mt-3 flex items-center px-6 justify-between ">
        <Link to={"/"}>
          <img src={Logo} width={100} alt="" />
        </Link>
        <ul className="flex items-center text-xl gap-3">
          {navbar.map((nav) => (
            <NavbarItemCart key={nav.id} nav={nav} />
          ))}
        </ul>

        <FontAwesomeIcon icon={faMoon} />
      </div>
    </nav>
  );
}

export default Navbar;
