import logo from "../../../images/get_lost_logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
       <img className= "main-logo" src={logo} alt="get lost logo" /> 
    </div>
  );
}
