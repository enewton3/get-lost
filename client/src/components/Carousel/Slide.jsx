export default function Slide(props) {
  const { index, image, currentIndex, type } = props;
  const source = image.default ? image.default : image;
  const imageCheck = source.includes("/");

  const classNameDefault = type ? `carousel-slide-${type}` : "carousel-slide";
  const classNameActive = type
    ? `carousel-slide-active-${type}`
    : "carousel-slide-active";

  if (imageCheck) {
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
  } else {
    return (
      <div
        className={
          index === currentIndex
            ? `${classNameDefault} ${classNameActive}`
            : `${classNameDefault}`
        }
      >
        {source}
      </div>
    );
  }
}
