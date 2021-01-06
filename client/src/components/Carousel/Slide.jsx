export default function Slide(props) {
  const { index, image, currentIndex } = props;
  return (
    <div
      className={
        index === currentIndex
          ? "carousel-slide carousel_slide_active"
          : "carousel-slide"
      }
    >
      <img src={image} alt={`${index + 1}`} />
    </div>
  );
}
