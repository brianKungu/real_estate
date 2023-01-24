import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-4 my-8 md:mx-auto">
      <div className="w-full gap-4 text-center md:grid md:grid-cols-3 md:text-left text-justified">
        <div>
          <img
            src="/images/logo.jpeg"
            className="rounded-lg h-[200px] md:w-3/4 w-full object-fit"
            alt="logo"
          />
        </div>
        <div className="my-4 md:my-0">
          <h1 className="text-3xl font-bold uppercase">Follow us</h1>
          <div className="flex items-center justify-center gap-4 mt-4 md:justify-start">
            <a href="#">
              <FaTwitter className="w-8 h-8 text-neutralTextColor hover:text-secondaryBg" />
            </a>
            <a hred="#">
              <FiFacebook className="w-8 h-8 text-neutralTextColor hover:text-secondaryBg" />
            </a>
            <a hred="#">
              <BsInstagram className="w-8 h-8 text-neutralTextColor hover:text-secondaryBg" />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold uppercase">Talk to us</h1>
          <p className="mt-4 text-neutralTextColor">
            Lorem ipsum dolor sit amet. Quo cumque voluptas in numquam ipsam sit
            possimus velit ab nesciunt voluptatum et reiciendis delectus qui
            ullam obcaecati? Et quis debitis aut fuga amet et facere dolores et
            odit mollitia id molestiae eaque qui minus porro eum iste Quis.
          </p>
        </div>
      </div>
      <span class="block text-sm text-neutralTextColor text-center md:text-left dark:text-neutralTextColor mt-4">
        ©{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          Allied Properties
        </a>
        . All Rights Reserved.2023
      </span>
    </footer>
  );
}
