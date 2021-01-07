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
import "./Nav.css";

export default function Nav(props) {
  const { user } = props;
  const [userMenuToggle, setUserMenuToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const authUserLinks = (
    <div className="all-user">
      <Link className="user-link" to="/sign-in">
        Add Product
      </Link>
      <Link className="user-link" to="/sign-in">
        Sign Out
      </Link>
    </div>
  );

  const unAuthUserLinks = (
    <div className="all-user">
      <Link className="user-link" to="/sign-in">
        Sign In
      </Link>
      <Link className="user-link" to="/sign-up">
        Sign Up
      </Link>
    </div>
  );
  return (
    <div className="all-nav">
      <div className="all-icons">
        <Link className="home-link" to="/"><Logo /></Link>
      </div>
      <div className="burger-boi" >
        <FontAwesomeIcon icon={faBars} name="menuToggle" onClick={() => setMenuToggle((prev) => !prev)} />
      </div>
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

      <div className="option-icons">
        {user && <div className="welcome-msg">Hey there, {user.username}!</div>}
        {searchToggle ? <Search /> : null}
        <div className="search-icon">
          <FontAwesomeIcon
            icon={faSearch}
            name="searchToggle"
            onClick={() => setSearchToggle((prev) => !prev)}
          /> </div>
        <div className="user-icon">
          <FontAwesomeIcon
            icon={faUser}
            name="userMenuToggle"
            onClick={() => setUserMenuToggle((prev) => !prev)}
          />
        </div>
        {userMenuToggle ? (
          <div className="user-menu">
            {user ? authUserLinks : unAuthUserLinks}
          </div>
        ) : null}

        <Link className="shopping-cart-icon" to="/shopping-cart">
          <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </Link>

      </div>

    </div>

  );
}
