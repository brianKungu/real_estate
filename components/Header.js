import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const images = [
  {
    imageID: 1,
    imageSrc: "/images/siama1.jpeg",
    imageAlt: "Property image",
  },
  {
    imageID: 2,
    imageSrc: "/images/siama2.jpeg",
    imageAlt: "Property image",
  },
  {
    imageID: 3,
    imageSrc: "/images/siama3.jpeg",
    imageAlt: "Property image",
  },
  {
    imageID: 4,
    imageSrc: "/images/siama4.jpeg",
    imageAlt: "Property image",
  },
];

export default function Header() {
  return (
    <div className="px-2 my-8 sm:px-2 md:px-4 lg:px-4">
      <Carousel autoplay>
        {images.map((image) => (
          <div
            key={image.imageID}
            className="relative md:h-[500px] w-full h-[300px]"
          >
            <Image
              src={image.imageSrc}
              className="block w-full rounded-lg"
              alt={image.imageAlt}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
