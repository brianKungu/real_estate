import Link from "next/link";
import React from "react";
import properties from "../utils/data";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  return (
    <div className="px-4 my-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold capitalize text-secondaryTextColor">
          Our properties
        </h1>
        <Link
          href="propertyList"
          passHref
          className="text-neutralTextColor text-sm md:text-lg"
        >
          View all
        </Link>
      </div>
      <div className="grid w-full md:grid-cols-3 gap-4 mt-8">
        {properties.map((property) => (
          <PropertyCard property={property} key={property.slug}></PropertyCard>
        ))}
      </div>
    </div>
  );
}
