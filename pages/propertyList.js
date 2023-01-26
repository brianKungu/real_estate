import React, { useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import properties from "../utils/data";
import { BackButton, Meta } from "../components";
import { Select, Space } from "antd";

const handleChange = (value) => {
  console.log(`Selected ${value}`);
};

export default function propertyList() {
  return (
    <>
      <Meta
        title="Property List"
        description="A list of all the properties we have available."
      />
      <div className="px-4">
        <div className="flex items-center justify-between text-center">
          <BackButton />
          <div className="flex justify-center items-center gap-4">
            <p className="text-neutralTextColor">Filter</p>

            <Space>
              <Select
                defaultValue="All"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "Land", label: "Land" },
                  { value: "Apartment", label: "Apartment" },
                ]}
              />
            </Space>
          </div>
        </div>
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
        </div>{" "}
      </div>
    </>
  );
}
