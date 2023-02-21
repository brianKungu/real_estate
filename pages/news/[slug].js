import Image from "next/image";
import React from "react";
import { BackButton, Meta } from "../../components";

export default function News({ info }) {
  return (
    <div className="px-4">
      <Meta title={info.title} description={info.title} />
      <div className="flex items-center justify-between my-4">
        <BackButton />
        <div className="flex flex-col">
          <h1 className="font-semibold capitalize text-lg text-right md:text-xl text-secondaryTextColor tracking-wider hover:text-secondaryBg">
            {info.title}
          </h1>
          <p className="text-neutralTextColor my-1 text-right">{info.date}</p>
        </div>
      </div>
      <div>
        <Image
          src={info.cover_image}
          width={1280}
          height={1000}
          alt="news image"
          priority="true"
          className="rounded-md"
        />
        <p className="text-neutralTextColor my-6">{info.description}</p>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const results = await fetch(
    `https://backend.alliedproperties.co.ke/api/news_events/detail?slug=${slug}`
  );

  const data = await results.json();
  return {
    props: {
      info: data,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch(
    "https://backend.alliedproperties.co.ke/properties/api/news_events/list/all"
  );
  const news = await data.json();
  const paths = await news.map((info) => {
    return {
      params: {
        slug: info.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
