import React from "react";
import { FiFacebook } from "react-icons/fi";
import { BackButton, Meta } from "../components";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function about() {
  return (
    <div className="px-4 my-4">
      <Meta
        title="About Page"
        description="A brief description of who I am and what I do"
      />
      <BackButton />
      <div className="grid gap-4 md:grid-cols-2 grid-row-2 my-4">
        <div className="my-auto">
          <h1 className="text-4xl font-bold md:text-4xl  tracking-widest">
            Welcome to{" "}
            <span className="text-secondaryBg">Allied Properties,</span> <br />
            The home of value!
            {/* <br /> based in Nairobi */}
          </h1>
          <div className="mt-4">
            <h3 className="text-2xl text-secondaryTextColor font-semibold">
              What we do.
            </h3>
            <p className="mt-2 text-neutralTextColor tracking-wide">
              We are a Kenyan real estate company grounded on a mission to
              connect Kenyans all over the world to affordable properties.
            </p>
            <p className="text-neutralTextColor my-4">
              At Allied Properties, we assure you of:
              <ul className="list-disc list-inside">
                <li>Affordable properties</li>
                <li>Seamless Conveyance processes</li>
                <li>Unbeatable value for money</li>
                <li>Flexible payment terms</li>
              </ul>
            </p>
            <p className="text-neutralTextColor">
              Do engage us for the ultimate VVIP experience on your property
              ownership journey
            </p>
          </div>
          <div className="flex items-center mt-8 space-x-4 justify-center md:justify-start">
            <p className="px-4 py-2 rounded-full bg-secondaryBg text-primaryTextColor">
              Contact me
            </p>
            <a href="https://api.whatsapp.com/send?phone=+254723942482">
              <FaWhatsapp className="w-8 h-8 text-neutralTextColor hover:text-secondaryBg" />
            </a>
            <a href="#">
              <FiFacebook className="w-8 h-8 text-neutralTextColor hover:text-secondaryBg" />
            </a>
            <a href="#">
              <FaTwitter className="w-8 h-8 text-neutralTextColor hover:text-secondaryBg" />
            </a>
            <a href="#">
              <BsInstagram className="w-8 h-8 text-neutralTextColor hover:text-secondaryBg" />
            </a>
          </div>
        </div>
        <div className="order-first my-4 md:my-0 md:order-last">
          <img
            src="/images/logo.jpeg"
            className="rounded-lg shadow-lg shadow-yellow-200"
            alt="agent photo"
          />
        </div>
      </div>
    </div>
  );
}
