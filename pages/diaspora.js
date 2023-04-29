import React,{useEffect} from "react";
import { Carousel } from "antd";
import { BackButton, Meta, NewsEvents } from "../components";
import Image from "next/image";

const images = [
  {
    imageID: 1,
    imageSrc: "/images/jabali1.jpeg",
    imageAlt: "Property image",
  },
  {
    imageID: 2,
    imageSrc: "/images/jabali2.jpeg",
    imageAlt: "Property image",
  },
  {
    imageID: 3,
    imageSrc: "/images/jabali5.jpeg",
    imageAlt: "Property image",
  },
];

export default function Diaspora({ news }) {

  return (
    <>
      <Meta title="Diaspora" description="Diaspora Properties" />
      <div className="px-4 my-4">
        <BackButton />
        <section className="mt-4">
          <Carousel autoplay>
            {images.map((image) => (
              <div
                key={image.imageID}
                className="relative md:h-[500px] w-full h-[300px]"
              >
                <Image
                  src={image.imageSrc}
                  className="block w-full rounded-lg"
                  alt={image.imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            ))}
          </Carousel>
          <p className="tracking-wide text-neutralTextColor text-lg py-8">
            Investing back home has never been this easy! At{" "}
            <span className="text-secondaryBg font-semibold">
              Allied Properties
            </span>{" "}
            we are committed to serve and deliver value to our clientelle. The
            good news is that we have expanded our networks to serve Kenyans in
            the Diaspora by providing prime and affordable properties. Our
            Mission is to help you secure your investments with ease and through
            the most seamless processes. We Deliver!
          </p>
        </section>
        <section>
          <NewsEvents news={news} />
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://backend.alliedproperties.co.ke/properties/api/news_events/list/all"
  );
  const news = await data.json();
  console.log(news);

  return {
    props: { news },
  };
}
