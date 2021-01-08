import { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";
import Logo from "../Logo/Logo";
import MainMenu from "./NavMenuComponents/MainMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUser,
  faShoppingCart,
  faMapSigns,
  faBinoculars,
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
      <Link className="user-link" to="/add-product">
        Add Product
      </Link>
      <Link className="user-link" to="/sign-out">
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
        <Link className="home-link" to="/">
          <Logo />
        </Link>
      </div>
      <div className="burger-boi">
        <FontAwesomeIcon
          icon={faMapSigns}
          name="menuToggle"
          onClick={() => setMenuToggle((prev) => !prev)}
        />
      </div>
      <Transition
        timeout={500}
        in={menuToggle}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        {(state) => <MainMenu state={state} duration={500} />}
      </Transition>

      <div className="option-icons">
        {user && <div className="welcome-msg">Hey there, {user.username}!</div>}
        {searchToggle ? <Search /> : null}
        <div className="search-icon">
          <FontAwesomeIcon
            icon={faBinoculars}
            name="searchToggle"
            onClick={() => {
              // handleClickOutside();
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
