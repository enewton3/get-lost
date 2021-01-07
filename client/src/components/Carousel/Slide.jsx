export default function Slide(props) {
  const { index, image, currentIndex } = props;
  return (
    <img
      className={
        index === currentIndex
          ? "carousel-slide carousel-slide-active"
          : "carousel-slide"
      }
      src={image.default}
      alt={`${index + 1}`}
    />
  );
}
