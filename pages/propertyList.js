import React, { useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import { BackButton, Meta } from "../components";
import { Select, Space } from "antd";

const handleChange = (value) => {
  console.log(`Selected ${value}`);
};

export default function propertyList({ properties }) {
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
            <PropertyCard
              property={property}
              key={property.slug}
            ></PropertyCard>
          ))}
        </div>{" "}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const properties = await fetch(
    "https://backend.alliedproperties.co.ke/properties/api/list/all"
  ).then((r) => r.json());

  console.log(properties);
  return {
    props: { properties },
  };
}
