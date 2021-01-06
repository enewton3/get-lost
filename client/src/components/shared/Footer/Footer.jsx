import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <FontAwesomeIcon icon={faCopyright} /> 2021 The Digital Nomads
      </div>
    </div>
  );
}
