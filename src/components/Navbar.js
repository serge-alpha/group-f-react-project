import React from "react";
import { Link } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { IconContext } from "react-icons";

const Navbar = ({ items }) => {
  let sum = 0;
  items.map((item) => {
    return (sum += item.price);
  });
  return (
    <div className="navbar">
      <div className="navbar__top">
        <h1>Amaze Fashion</h1>
        <div className="navbar__topDetails">
          <Link id="cart__link" to="/register" src="/">
            <IconContext.Provider value={{ className: "nav__icon1" }}>
              <TbUser />
            </IconContext.Provider>
          </Link>
          <Link id="cart__link" to="/cart" src="/">
            <span className="navbar__cartDetails">
              <IconContext.Provider value={{ className: "nav__icon" }}>
                <TbShoppingCart />
              </IconContext.Provider>
              <span className="navbar__details">
                <h4>{items.length} Item</h4>
                <h3>${sum}</h3>
              </span>
            </span>
          </Link>
        </div>
      </div>
      <nav>
        <ul className="nav__links">
          <li className="nav__link">
            <Link id="nav__link" to="/">
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link id="nav__link" to="/">
              Contact
            </Link>
          </li>
          <li className="nav__link">
            <Link id="nav__link" to="/">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
