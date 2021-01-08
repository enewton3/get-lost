import { Link } from "react-router-dom";
import "./MainMenu.css";

export default function MainMenu(props) {
  const defaultStyle = {
    transition: `max-height ${props.duration}ms linear`,
    maxHeight: 0,
  };

  const transitionStyles = {
    entering: { maxHeight: "200px" },
    entered: { maxHeight: "200px" },
    exiting: { maxHeight: 0 },
    exited: { maxHeight: 0 },
  };
  
  return (
    <div
      className="menu-links"
      style={{ ...defaultStyle, ...transitionStyles[props.state] }}
    >
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
  );
}
