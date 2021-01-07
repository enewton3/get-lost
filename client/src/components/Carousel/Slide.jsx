export default function Slide(props) {
  const { index, image, currentIndex } = props;
  const source = image.default ? image.default : image;

  return (
    <img
      className={
        index === currentIndex
          ? "carousel-slide carousel-slide-active"
          : "carousel-slide"
      }
      src={source}
      alt={`${index + 1}`}
    />
  );
}
