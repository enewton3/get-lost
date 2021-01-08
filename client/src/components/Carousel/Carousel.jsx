import { useState, useEffect } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Slide from "./Slide";
import Indicator from "./Indicator";
import "./Carousel.css";

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images, imageChange, intervalTime, type } = props;

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
    <div className={type ? `blur-${type}` : "blur"}>
      <div className={type ? `carousel-${type}` : "carousel"}>
        <div className={type ? `slides-${type}` : "slides"}>
          {images.map((item, index) => {
            return (
              <Slide
                key={`slide${index}`}
                index={index}
                image={item}
                currentIndex={currentIndex}
                type={type}
              />
            );
          })}
        </div>
        <div className={type ? `carousel-nav-${type}` : "carousel-nav"}>
          <ArrowLeft
            type={type}
            onClick={() => {
              goToPrevSlide();
            }}
          />
          <div className={type ? `indicators-${type}` : "indicators"}>
            {images.map((item, index) => {
              return (
                <Indicator
                  key={`ind${index}`}
                  index={index}
                  onClick={() => goToSlide(index)}
                  currentIndex={currentIndex}
                  type={type}
                />
              );
            })}
          </div>

          <ArrowRight
            onClick={() => {
              goToNextSlide();
            }}
            type={type}
          />
        </div>
      </div>
    </div>
  );
}
