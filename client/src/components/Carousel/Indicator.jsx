export default function Indicator(props) {
  const { index, currentIndex } = props;

  return (
    <div
      className={
        index === currentIndex
          ? "carousel-indicator carousel-indicator-active"
          : "carousel-indicator"
      }
      onClick={props.onClick}
    ></div>
  );
}
