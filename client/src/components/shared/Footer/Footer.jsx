import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faCopyright,
  faEnvelope,
  faHiking,
  faPhone,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";


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

      <div className="total-help">
        <FontAwesomeIcon className="help-icon" icon={faQuestionCircle} />
        <p className="footer-help">Help and Support</p>
        <p className="footer-help">Find answers online anytime.</p>
        <FontAwesomeIcon className="help-icon" icon={faComment} />
        <p className="footer-help">
          Live Chat Mon–Fri, 5am–10pm PT Sat–Sun, 6am–9pm PT
        </p>
        <FontAwesomeIcon className="help-icon" icon={faPhone} />
        <p className="footer-help">
          Call us at : 1-800-426-4840 Mon–Fri, 5am–10pm PT Sat–Sun, 6am–9pm PT
        </p>
      </div>
      <button className="emply">
        <Link className="sign-in" to="/sign-in">
          <p className="employee-word">
            Employee Sign In {"-->"}{" "}
            <FontAwesomeIcon className="employee-icon" icon={faHiking} />
          </p>
        </Link>
      </button>
    </div>
  );
}
