import React from "react";
import PropertyCard from "./PropertyCard";
import properties from "../utils/data";
import Link from "next/link";

export default function Properties() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold capitalize text-secondaryTextColor">
        Our latest properties
      </h1>

      <div className="grid w-full md:grid-cols-3 gap-4 mt-8">
        {properties.map((property) => (
          <PropertyCard property={property} key={property.slug}></PropertyCard>
        ))}
      </div>
    </div>
  );
}
