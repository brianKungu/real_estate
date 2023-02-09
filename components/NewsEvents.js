import React from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

export default function NewsEvents({ news }) {
  return (
    <>
      <div className="my-6">
        <h2 className="font-bold text-2xl capitalize">News and Events</h2>
      </div>

      {news.map((info) => (
        <div className="block md:grid md:grid-cols-3 gap-4" key={info.id}>
          <div className="grid col-span-1">
            <Image
              src={info.cover_image}
              width={500}
              height={500}
              alt="news image"
            />
          </div>
          <div className="col-span-2 my-auto">
            <Link href={`/news/${info.slug}`} passhref>
              <h1 className="font-semibold capitalize text-xl text-secondaryTextColor tracking-wider hover:text-secondaryBg">
                {info.title}
              </h1>
            </Link>
            <p className="text-neutralTextColor my-1">{info.date}</p>
            <p className="text-neutralTextColor my-6">{info.description}</p>
            <div className="flex items-center space-x-2 justify-end my-4">
              <a
                href={`/news/${info.slug}`}
                className="text-neutralTextColor hover:text-secondaryBg font-semibold"
              >
                Read More
              </a>
              <IoArrowForward className="md:h-6 md:w-6 text-neutralTextColor hover:text-secondaryBg" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
