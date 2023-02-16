/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { BackButton, Form, Meta, Modal } from "../../components";
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
export default function Property({ property }) {
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleClick = (image, index) => {
    setClickedImage(image.img);
    setCurrentIndex(index);
  };
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
            <FiMapPin className="w-6 h-6 md:w-4 md:h-4" />

            <p className="text-sm md:text-lg text-neutralTextColor">
              {property.location}
            </p>
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
                onClick={() => handleClick(image, index)}
              />
            </div>
          ))}
      </Carousel>

      {clickedImage && (
        <Modal clickedImage={clickedImage} setClickedImage={setClickedImage} />
      )}
      <div className="md:grid block md:grid-cols-3">
        <div className="col-span-2">
          <Tabs
            description={property.description}
            features={property.features}
            payment={property.paymentPlan}
            city={property.city}
            county={property.county}
            neighbourhood={property.neighbourhood}
            propertyID={property.property_id}
            type={property.type}
            status={property.status}
            price={property.price}
          />
        </div>
        <div className="my-6">
          <h2 className="text-center font-bold text-2xl capitalize text-secondaryTextColor">
            Get more information
          </h2>
          <Form />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const results = await fetch(
    `https://realestatebackendcollab.pythonanywhere.com/properties/api/property/detail?slug=${slug}`
  );

  const data = await results.json();
  return {
    props: {
      property: data,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch(
    "https://realestatebackendcollab.pythonanywhere.com/properties/api/list/all"
  );
  const properties = await data.json();
  const paths = properties.map((property) => {
    return {
      params: {
        slug: property.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
