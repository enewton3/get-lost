import { Link } from "react-router-dom";

export default function Slide(props) {
  const { index, source, currentIndex, type } = props;
  const image = source.default ? source.default : source.image;
  const text = source.text ? source.text : null;
  const link = source.link ? source.link : null;

  const classNameDefault = type ? `carousel-slide-${type}` : "carousel-slide";
  const classNameActive = type
    ? `carousel-slide-active-${type}`
    : "carousel-slide-active";

  if (image) {
    return (
      <img
        className={
          index === currentIndex
            ? `${classNameDefault} ${classNameActive}`
            : `${classNameDefault}`
        }
        src={image}
        alt={`${index + 1}`}
      />
    );
  } else if (link) {
    return (
      <div
        className={
          index === currentIndex
            ? `${classNameDefault} ${classNameActive}`
            : `${classNameDefault}`
        }
      >
        <Link to={`${link}`}>{source.text}</Link>
      </div>
    );
  } else if (text) {
    return (
      <div
        className={
          index === currentIndex
            ? `${classNameDefault} ${classNameActive}`
            : `${classNameDefault}`
        }
      >
        {text}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }

  // if (image) {
  //   return (
  //     <img
  //       className={
  //         index === currentIndex
  //           ? `${classNameDefault} ${classNameActive}`
  //           : `${classNameDefault}`
  //       }
  //       src={image}
  //       alt={`${index + 1}`}
  //     />
  //   );
  // } else if (text) {
  //   return <div>{text}</div>;
  // } else if (link) {
  //   return <Link to={link}>{source.text}</Link>;
  // }
}
