import { useState, useEffect } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Slide from "./Slide";
import Indicator from "./Indicator";
import "./Carousel.css";

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images, imageChange, intervalTime,  } = props;

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

  useEffect(() => {
    if (imageChange) {
      const interval = setInterval(() => {
        goToNextSlide();
      }, intervalTime);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="carousel">
      <div className="slides">
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
      </div>
      <div className="carousel-nav">
        <ArrowLeft
          onClick={() => {
            goToPrevSlide();
          }}
        />
        <div className="indicators">
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
        </div>

        <ArrowRight
          onClick={() => {
            goToNextSlide();
          }}
        />
      </div>
    </div>
  );
}
