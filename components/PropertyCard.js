import React from "react";
import PrimaryPill from "./PrimaryPill";
import SecondaryPill from "./SecondaryPill";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";

export default function PropertyCard({
  href,
  imageSrc,
  propertyType,
  propertyTitle,
  location,
  price,
}) {
  return (
    <div className="relative md:max-w-md overflow-hidden rounded-md">
      <Link href={href} passHref>
        <img src={imageSrc} className="propertyCardImage" alt="product image" />
      </Link>
      <div className="absolute top-0 flex m-4 space-x-2">
        <PrimaryPill text="Sale" />
        <SecondaryPill text={propertyType} />
      </div>

      <div className="absolute bottom-0 flex items-center justify-between w-full p-4 mx-auto text-white">
        <div className="flex flex-col">
          <h2 className="text-md md:text-lg font-bold drop-shadow-sm">{propertyTitle}</h2>
          <div className="flex items-center justify-start space-x-1">
            <FiMapPin />
            <p>{location}</p>
          </div>
        </div>
        <p className="md:text-lg font-semibold text-sm">
          {"KSH."} {price}
        </p>
      </div>
    </div>
  );
}
