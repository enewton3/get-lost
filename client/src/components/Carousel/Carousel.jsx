import { useState } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Slide from "./Slide";
import Indicator from "./Indicator";

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = props;

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length);
    }
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNextSlide = () => {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div>
      <ArrowLeft
        onClick={() => {
          goToPrevSlide();
        }}
      />

      {images.map((item, index) => {
        return (
          <Slide
            key={`slide${index}`}
            index={index}
            image={item}
            currentIndex={currentIndex}
          />
        );
      })}

      {images.map((item, index) => {
        return (
          <Indicator
            key={`ind${index}`}
            index={index}
            onClick={() => goToSlide(index)}
            currentIndex={currentIndex}
          />
        );
      })}

      <ArrowRight
        onClick={() => {
          goToNextSlide();
        }}
      />
    </div>
  );
}
