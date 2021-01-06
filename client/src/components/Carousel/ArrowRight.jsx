import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ArrowRight(props) {
  return (
    <div onClick={props.onClick} className="carousel-arrow-right">
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}
