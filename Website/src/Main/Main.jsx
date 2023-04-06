import React from "react";
import Carousel from './Carousel/Carousel.jsx';
import Cards from "./Cards/Card.jsx";
import CarouselMultipleCards from './Carousel/CarouselMultipleCards.jsx';
export default function Main() {
  return (
    <div>
      <Carousel />
      <CarouselMultipleCards />
      <Cards />
    </div>
  );
}
