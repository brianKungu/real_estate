import React from "react";
import PropertyCard from "./PropertyCard";
import properties from "../utils/data";
import Link from "next/link";

export default function PropertyCards() {
  return (
    <div className="px-4">
        <h1 className="text-3xl font-bold capitalize text-secondaryTextColor">
          Our latest properties
        </h1>
        
      <div className="grid w-full md:grid-cols-3 gap-4 mt-8">
        {properties.map((property) => (
          <div key={property.imageID}>
            <PropertyCard
              href={property.href}
              imageSrc={property.imageSrc}
              propertyType={property.type}
              propertyTitle={property.title}
              price={property.price}
              location={property.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
