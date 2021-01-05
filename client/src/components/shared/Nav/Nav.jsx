import Link from "react-router-dom";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div>
      <FontAwesomeIcon icon={faBars} />
      <Logo />
    </div>
  );
}
