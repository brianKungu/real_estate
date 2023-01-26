import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const images = [
  {
    imageID: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80",
    imageAlt: "Camera",
  },
  {
    imageID: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    imageAlt: "Camera",
  },
  {
    imageID: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1591389703635-e15a07b842d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
    imageAlt: "Camera",
  },
];

export default function Header() {
  return (
    <div className="px-2 my-8 sm:px-2 md:px-4 lg:px-4">
      <Carousel autoplay>
        {images.map((image) => (
          <div key={image.imageID} className="relative md:h-[500px] w-full h-[300px]">
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
