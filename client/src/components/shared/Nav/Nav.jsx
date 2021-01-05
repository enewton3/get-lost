import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../../Search/Search";

export default function Nav(props) {
  const { user } = props;
  const [userMenuToggle, setUserMenuToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const authUserLinks = (
    <>
      <Link className="user-link" to="/sign-in">
        Add Product
      </Link>
      <Link className="user-link" to="/sign-in">
        Sign Out
      </Link>
    </>
  );

  const unAuthUserLinks = (
    <>
      <Link className="user-link" to="/sign-in">
        Sign In
      </Link>
      <Link className="user-link" to="/sign-up">
        Sign Up
      </Link>
    </>
  );
  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        name="menuToggle"
        onClick={() => setMenuToggle((prev) => !prev)}
      />
      {menuToggle ? (
        <div className="menu-links">
          <Link className="menu-link" to="/">
            Home
          </Link>
          <Link className="menu-link" to="/about">
            About
          </Link>
          <Link className="menu-link" to="/listing-page/all">
            All Packs
          </Link>
          <Link className="menu-link" to="/listing-page/Day-Trip">
            Day Trip
          </Link>
          <Link className="menu-link" to="/listing-page/Expedition">
            Long Haul
          </Link>
          <Link className="menu-link" to="/listing-page/sale">
            Sale
          </Link>
          <Link className="menu-link" to="/contact">
            Contact
          </Link>
        </div>
      ) : null}
      <Logo />
      <div className="option-icons">
        {user && <div className="welcome-msg">Hey there, {user.username}!</div>}
        {searchToggle ? <Search /> : null}
        <FontAwesomeIcon
          icon={faSearch}
          name="searchToggle"
          onClick={() => setSearchToggle((prev) => !prev)}
        />
        <FontAwesomeIcon
          icon={faUser}
          name="userMenuToggle"
          onClick={() => setUserMenuToggle((prev) => !prev)}
        />
        {userMenuToggle ? (
          <div className="user-menu">
            {user ? authUserLinks : unAuthUserLinks}
          </div>
        ) : null}
        <Link className="shopping-cart-icon" to="/shopping-cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </div>
  );
}
