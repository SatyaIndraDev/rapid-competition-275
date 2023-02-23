import { Image } from "@chakra-ui/react";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1},
  568: { items: 1 },
  1024: { items: 1 },
};

const items = [
  <div className="item" data-value="1">
    <Image
    
      src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8aea93d6-c525-49b1-8902-9ae553f3cd76.jpg&w=1920&q=75"
      alt=""
    />
  </div>,
  <div className="item" data-value="2">
    <Image
      src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F32ab9254-3291-4ac6-8a9c-1335d674d5db.jpg&w=1920&q=75"
      alt=""
    />
  </div>,
  <div className="item" data-value="3">
    <Image
      src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fa7bfdf05-ad0e-4c24-ab48-7ff64e9115b8.jpg&w=1920&q=75"
      alt=""
    />
  </div>,
  <div className="item" data-value="4">
    <Image
      src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fe66cbd2d-fa4c-4375-af33-bb9d9f2b653d.jpg&w=1920&q=75"
      alt=""
    />
  </div>,
  <div className="item" data-value="5">
    <img
      src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc2431127-fe30-42c7-9172-6a5ef7b1a57f.jpg&w=1920&q=75"
      alt=""
    />
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
    // autoPlay
    // autoPlayStrategy="none"
    // autoPlayInterval={1000}
    // animationDuration={1000}
    // animationType="slide"
    // infinite
    touchTracking={false}
    disableButtonsControls
  />
);
export default Carousel;
