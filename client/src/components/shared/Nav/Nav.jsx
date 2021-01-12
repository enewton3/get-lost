//helper stuff
import { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
//components
import Logo from "../Logo/Logo";
import MainMenu from "./NavMenuComponents/MainMenu";
import Search from "../../Search/Search";
import CartCounter from "../../CartCounter/CartCounter";
//logos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faMapSigns,
  faBinoculars,
} from "@fortawesome/free-solid-svg-icons";
//css
import "./Nav.css";

export default function Nav(props) {
  const { user } = props;
  const [userMenuToggle, setUserMenuToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const authUserLinks = (
    <>
      <Link className="user-link" to="/add-product">
        Add Product
      </Link>
      <Link className="user-link" to="/sign-out">
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
    <div className="all-nav">
      <div className="burger-boi">
        <FontAwesomeIcon
          icon={faMapSigns}
          name="menuToggle"
          onClick={() => setMenuToggle((prev) => !prev)}
        />
      </div>
      <div className="all-icons">
        <Link className="home-link" to="/">
          <Logo />
        </Link>
      </div>

      <CSSTransition
        timeout={300}
        in={menuToggle}
        unmountOnExit
        classNames="menu"
      >
        <MainMenu />
      </CSSTransition>

      <div className="option-icons">
        {user && <div className="welcome-msg">Hey there, {user.username}!</div>}
        <CSSTransition
          timeout={500}
          in={searchToggle}
          unmountOnExit
          classNames="search-bar"
        >
          <Search searchToggle={searchToggle} />
        </CSSTransition>
        <div className="search-icon">
          <FontAwesomeIcon
            icon={faBinoculars}
            name="searchToggle"
            onClick={() => {
              setSearchToggle((prev) => !prev);
            }}
          />{" "}
        </div>
        <div className="user-icon">
          <FontAwesomeIcon
            icon={faUser}
            name="userMenuToggle"
            onClick={() => setUserMenuToggle((prev) => !prev)}
          />
        </div>
        <CSSTransition
          timeout={300}
          in={userMenuToggle}
          unmountOnExit
          classNames="user-menu"
        >
          <div className="user-menu">
            {user ? authUserLinks : unAuthUserLinks}
          </div>
        </CSSTransition>
        <Link className="shopping-cart-icon" to="/shopping-cart">
          <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <CartCounter />
        </Link>
      </div>
    </div>
  );
}
