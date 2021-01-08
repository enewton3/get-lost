import logo from "../../../images/get_lost_logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} width="100vw" alt="get lost logo" />
    </div>
  );
}
