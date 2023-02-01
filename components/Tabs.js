import React, { useState } from "react";
import Property from "../pages/property/[slug]";

export default function Tabs({
  description,
  features,
  payment,
  city,
  county,
  neighbourhood,
  proppertyID,
  type,
  status,
  price,
}) {
  const [toggleTab, setToggleTab] = useState("description");
  const activeTab =
    "bg-secondaryBg py-2 px-4 rounded text-primaryTextColor font-semibold";

  const innactiveTab =
    "bg-tansparent py-2 px-4 rounded text-secondaryTextColor font-semibold hover:bg-secondaryBg hover:text-primaryTextColor";
  return (
    <div className="my-6 px-4">
      <div className="flex items-center justify-between">
        <button
          className={toggleTab === "description" ? activeTab : innactiveTab}
          onClick={() => setToggleTab("description")}
        >
          Description
        </button>
        <button
          className={toggleTab === "address" ? activeTab : innactiveTab}
          onClick={() => setToggleTab("address")}
        >
          Address
        </button>
        <button
          className={toggleTab === "details" ? activeTab : innactiveTab}
          onClick={() => setToggleTab("details")}
        >
          Details
        </button>
      </div>
      {/* Description Content */}
      <div className={toggleTab === "description" ? "block my-8" : "hidden"}>
        <div className="my-4">
          <p className="font-bold text-xl">Description</p>
          <p className="my-2 text-neutralTextColor">{description}</p>
        </div>
        <div>
          <p className="font-bold text-xl">Property Features / Amenities</p>
          <ul className="my-2 list-disc list-inside">
            {features &&
              features.map((feature, index) => (
                <li key={index} className="text-neutralTextColor">
                  {feature.info}
                </li>
              ))}
          </ul>
        </div>
        <div className="my-4">
          <p className="font-bold text-xl">Payment plan</p>
          <p className="my-2 text-neutralTextColor">{payment}</p>
        </div>
      </div>
      {/* !Description Content */}
      {/* Address content */}
      <div className={toggleTab === "address" ? "block my-8" : "hidden"}>
        <div className="flex md:items-center justify-between flex-col md:flex-row">
          <div>
            <span className="font-semibold tracking-wider text-secondaryTextColor mr-2">
              City:{" "}
            </span>
            <span className="text-neutralTextColor">{city}</span>
          </div>
          <div>
            <span className="font-semibold tracking-wider text-secondaryTextColor mr-2">
              County:
            </span>
            <span className="text-neutralTextColor capitalize">{county}</span>
          </div>

          <div>
            <span className="font-semibold tracking-wider text-secondaryTextColor mr-2">
              Neighbourhood:{" "}
            </span>
            <span className="text-neutralTextColor capitalize">
              {neighbourhood}
            </span>
          </div>
        </div>
      </div>

      {/* !Address content */}
      {/* Details content */}
      <div className={toggleTab === "details" ? "block my-8" : "hidden"}>
        <div className="flex items-center justify-between flex-wrap">
          <div>
            <span className="font-semibold tracking-wider text-secondaryTextColor mr-2">
              Property ID:{" "}
            </span>
            <span className="text-neutralTextColor">{proppertyID}</span>
          </div>
          <div>
            <span className="font-semibold tracking-wider text-secondaryTextColor mr-2">
              Property Type:{" "}
            </span>
            <span className="text-neutralTextColor capitalize">{type}</span>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap md:my-4">
          <div>
            <span className="font-semibold tracking-wider text-secondaryTextColor mr-2">
              Property Status:{" "}
            </span>
            <span className="text-neutralTextColor capitalize">{status}</span>
          </div>
          <div>
            <span className="font-semibold tracking-wider text-secondaryTextColor mr-2">
              Property Price:{" "}
            </span>
            <span className="text-neutralTextColor">
              {"KSH. "}
              {price}
            </span>
          </div>
        </div>
      </div>
      {/* !Details content */}
    </div>
  );
}
