import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ArrowLeft(props) {
  return (
    <div onClick={props.onClick} className="carousel-arrow-left">
      <FontAwesomeIcon  className= "lefty" icon={faArrowLeft} />
    </div>
  );
}
