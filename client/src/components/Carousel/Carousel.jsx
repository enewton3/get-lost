import React from "react";
import { useState } from 'react-router-dom';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Slide from './Slide';
import Indicator from './Indicator';
import { First, Second, Third, Fourth, Fifth, Sixth } from '../../images/HomepageCarousel';

const images = [
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth
] 

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
    setCurrentIndex(index)
    
  }
  return <div>Carousel</div>;
}
