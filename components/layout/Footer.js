import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
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

          <div className="flex items-center space-x-4 my-4 md:my-2 justify-center md:justify-start">
            <AiOutlineMail className="md:h-6 md:w-6 text-neutralTextColor hover:text-secondaryBg" />

            <a
              href="mailto:alliedpropertieskenya@gmail.com"
              className="text-neutralTextColor hover:text-secondaryBg text-base font-semibold"
            >
              Allied Properties Kenya
            </a>
          </div>

          <div className="flex items-center space-x-4 my-4 md:my-2 justify-center md:justify-start">
            <BsTelephoneOutbound className="md:h-6 md:w-6 text-neutralTextColor hover:text-secondaryBg" />

            <a
              href="tel:0748316324"
              className="text-neutralTextColor hover:text-secondaryBg text-base font-semibold"
            >
              0748316324
            </a>
          </div>
        </div>
      </div>
      <span className="block mt-4 text-sm text-center text-neutralTextColor md:text-left dark:text-neutralTextColor">
        ©{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Allied Properties
        </a>
        . All Rights Reserved.2023
      </span>
    </footer>
  );
}
