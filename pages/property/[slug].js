import React from "react";
import { BackButton, Meta } from "../../components";
import { useRouter } from "next/router";
import properties from "../../utils/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiMapPin } from "react-icons/fi";
import Tabs from "../../components/Tabs";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function Property() {
  const { query } = useRouter();
  const { slug } = query;
  console.log(slug);
  const property = properties.find((x) => x.slug === slug);
  if (!property) {
    return <div>Property not found</div>;
  }

  console.log(property);
  return (
    <div className="px-4">
      <Meta title={property.title} />
      <div className="flex justify-between items-center my-4">
        <div className="flex flex-col gap-4 my-4 md:my-0">
          <div className="flex items-center gap-2">
            <BackButton />
            <h1 className="font-bold text-2xl md:text-3xl uppercase text-secondaryTextColor">
              {property.title}
            </h1>
          </div>
          <div className="flex items-center gap-4 md:gap-2 text-neutralTextColor">
            <FiMapPin className="md:w-6 md:h-6" />

            <p className="text-md md:text-lg text-neutralTextColor">{property.location}</p>
          </div>
        </div>
        <p className="text-xl md:text-3xl font-bold text-secondaryTextColor">
          {"KSH."}
          {property.price}
        </p>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        autoPlay={true}
        arrows={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 1.0"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {property &&
          property.images.map((image, index) => (
            <div className="mr-1" key={index}>
              <img
                src={image.img}
                alt="property images"
                className="rounded-md"
              />
            </div>
          ))}
      </Carousel>
      <div className="md:grid block md:grid-cols-3">
        <div className="col-span-2">
          <Tabs
            description={property.description}
            features={property.features}
            payment={property.paymentPlan}
            city={property.city}
            county={property.county}
            neighbourhood={property.neighbourhood}
            proppertyID={property.ID}
            type={property.type}
            status={property.status}
            price={property.price}
          />
        </div>
        <div className="my-6">
          <h2 className="text-center font-bold text-2xl capitalize text-secondaryTextColor">
            Get more information
          </h2>
        </div>
      </div>
      {/* <p>{property.description}</p>

      <ul>
        {property &&
          property.features.map((feature, index) => (
            <li key={index}> {feature.info}</li>
          ))}
      </ul>
      <p>{property.paymentPlan}</p> */}
    </div>
  );
}
{
  /* <div>
          {property &&
            property.images.map((image, index) => (
              <div className="max-w-sm" key={index}>
                <img src={image.img} alt="property images" />
              </div>
            ))}
        </div> */
}
