export default function Slide(props) {
  const { index, image, currentIndex } = props;
  return (
    <div
      className={
        index === currentIndex
          ? "carousel-slide carousel-slide-active"
          : "carousel-slide"
      }
    >
      <img src={image.default} alt={`${index + 1}`} />
    </div>
  );
}
