import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ArrowRight(props) {
  return (
    <div
      onClick={props.onClick}
      className={
        props.type
          ? `carousel-arrow-right-${props.type}`
          : "carousel-arrow-right"
      }
    >
      <FontAwesomeIcon className="lefty" icon={faArrowRight} />
    </div>
  );
}
