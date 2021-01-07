import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="our-name">
        <FontAwesomeIcon icon={faCopyright} /> 2021 The Digital Nomads
      </div>
      <div className="social-icons">
        <FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
        <FontAwesomeIcon className="insta" icon={faInstagramSquare} />
        <FontAwesomeIcon className="twit" icon={faTwitterSquare} />
        <FontAwesomeIcon className="email-footer" icon={faEnvelope} />
      </div>

    </div>
  );
}
