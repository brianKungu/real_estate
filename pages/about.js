import React from "react";
import { FiFacebook } from "react-icons/fi";
import { Meta } from "../components";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function about() {
  return (
    <>
      <Meta
        title="About Page"
        description="A brief description of who I am and what I do"
      />

      <div className="grid gap-4 px-4 my-8 md:grid-cols-2 grid-row-2">
        <div className="my-auto">
          <h1 className="text-4xl font-bold md:text-5xl">
            Hi, I`m Charles Kiprono, <br />A real estate agent
            <br /> based in Nairobi
          </h1>
          <div className="mt-4">
            <h3 className="text-2xl text-secondaryTextColor">What I do?</h3>
            <p className="mt-4 text-neutralTextColor">
              Lorem ipsum dolor sit amet. Quo cumque voluptas in numquam ipsam
              sit possimus velit ab nesciunt voluptatum et reiciendis delectus
              qui ullam obcaecati? Et quis debitis aut fuga amet et facere
              dolores et odit mollitia id molestiae eaque qui minus porro eum
              iste Quis.
            </p>
          </div>
          <div className="flex items-center mt-12 space-x-4">
            <p className="px-4 py-2 rounded-full bg-secondaryBg text-primaryTextColor">
              Contact me
            </p>
            <a href="https://api.whatsapp.com/send?phone=0759391973">
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
    </>
  );
}
