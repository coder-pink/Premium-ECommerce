
"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
      {images.map((img, idx) => (
        <div key={idx}>
          <Image src={img} alt={`Product Image ${idx + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageGallery;
