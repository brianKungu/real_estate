import React from "react";
import PrimaryPill from "./PrimaryPill";
import SecondaryPill from "./SecondaryPill";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function PropertyCard({ property }) {
  return (
    <div className="relative md:max-w-md overflow-hidden rounded-md">
      <Link href={`/property/${property.slug}`} passHref>
        <img
          src={property.imageSrc}
          className="propertyCardImage"
          alt="property image"
        />
      </Link>
      <div className="absolute top-0 flex m-4 space-x-2">
        <PrimaryPill text="Sale" />
        <SecondaryPill text={property.type} />
      </div>

      <div className="absolute bottom-0 flex items-center justify-between w-full p-4 mx-auto text-white">
        <div className="flex flex-col">
          <h2 className="text-md md:text-lg font-bold drop-shadow-sm">
            {property.title}
          </h2>
          <div className="flex items-center justify-start space-x-1">
            <FiMapPin />
            <p className="text-sm">{property.location}</p>
          </div>
        </div>
        <p className="md:text-lg font-semibold text-sm">
          {"KSH."} {property.price}
        </p>
      </div>
    </div>
  );
}
