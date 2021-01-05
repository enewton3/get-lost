import Link from "react-router-dom";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div>
      <FontAwesomeIcon icon={faBars} onClick={handleMenuToggle}/>
      <div className='menu-links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/listing-page">All Packs</Link>
        <Link to="/listing-page/day-trip">Day Trip</Link>
        <Link to="/listing-page/long-haul">Long Haul</Link>
        <Link to="/listing-page/sale">Sale</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Logo />
      <div className="option-icons">
        <FontAwesomeIcon icon={faSearch} onClick={handleSearchToggle} />
        <FontAwesomeIcon icon={faUser} onClick={handleUserMenuToggle} />
        <div className="user-menu">
          <Link to='/sign-in'
        </div>
      </div>

    </div>
  );
}
