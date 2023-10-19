"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
    { imgURL: "assets/images/hero-1.svg", alt: 'smartwatch'},
    { imgURL: "assets/images/hero-2.svg", alt: 'bag'},
    { imgURL: "assets/images/hero-3.svg", alt: 'lamp'},
    { imgURL: "assets/images/hero-4.svg", alt: 'air fryer'},
    { imgURL: "assets/images/hero-5.svg", alt: 'chair'}
]

const HeroCarousel = () => {
  return (
    <div className = 'hero-carousel'>
    <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval = {2000}
        showArrows = {false}
        showStatus = {false}
        >
       {heroImages.map((image) => (
        <Image 
        src = {image.imgURL}
        alt = {image.alt}
        width = {500}
        height = {500}
        className = "object-contain"    
        key = {image.alt} 
        />
       ))}
    </Carousel>
        
    </div>
    );
}

export default HeroCarousel;