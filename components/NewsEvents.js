import React from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

export default function NewsEvents() {
  return (
    <>
      <div className="my-6">
        <h2 className="font-bold text-2xl capitalize">News and Events</h2>
      </div>
      <div className="block md:grid md:grid-cols-3 gap-4">
        <div className="grid col-span-1">
          <Image
            src="/images/image1.jpeg"
            width={500}
            height={500}
            alt="news image"
          />
        </div>
        <div className="col-span-2 my-auto">
          <Link href="#" passhref>
            <h1 className="font-semibold capitalize text-xl text-secondaryTextColor tracking-wider hover:text-secondaryBg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </h1>
          </Link>
          <p className="text-neutralTextColor my-1">3/2/2023</p>
          <p className="text-neutralTextColor my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex items-center space-x-2 justify-end my-4">
            <a
              href="#"
              className="text-neutralTextColor hover:text-secondaryBg font-semibold"
            >
              Read More
            </a>
            <IoArrowForward className="md:h-6 md:w-6 text-neutralTextColor hover:text-secondaryBg" />
          </div>
        </div>
      </div>
    </>
  );
}
