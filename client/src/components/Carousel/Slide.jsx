export default function Slide(props) {
  const { index, image, currentIndex, type } = props;
  const source = image.default ? image.default : image;

  const classNameDefault = type ? `carousel-slide-${type}` : "carousel-slide";
  const classNameActive = type
    ? `carousel-slide-active-${type}`
    : "carousel-slide-active";

  return (
    <img
      className={
        index === currentIndex
          ? `${classNameDefault} ${classNameActive}`
          : `${classNameDefault}`
      }
      src={source}
      alt={`${index + 1}`}
    />
  );
}
