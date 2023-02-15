import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import Image from "next/image";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useRouter();
  const activeLink =
    "bg-secondaryBg text-primaryTextColor md:px-3 px-2 py-2 rounded-md text-sm md:text-base font-medium mr-2 text-center";
  const innactiveLink =
    "text-secondaryTextColor hover:bg-neutralBg hover:text-primaryTextColor md:px-3 px-2 py-2 rounded-md text-sm md:text-base font-medium mr-4 text-center";
  useEffect(() => {
    if (location.asPath === "/") {
      setActiveTab("Home");
    } else if (location.asPath === "/propertyList") {
      setActiveTab("propertyList");
    } else if (location.asPath === "/diaspora") {
      setActiveTab("diaspora");
    } else if (location.asPath === "/about") {
      setActiveTab("about");
    }
  }, [location.asPath]);

  return (
    <Disclosure
      as="nav"
      className="navbar sticky top-0 w-full my-4 border-b-2 border-opacity-50 bg-primaryBg drop-shadow-md border-neutralBg"
    >
      <div className="flex space-x-4 items-center justify-center text-sm px-2 lg:px-6">
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <AiOutlineMail className="md:h-6 md:w-6 text-neutralTextColor hover:text-secondaryBg" />
          <a
            href="mailto:alliedpropertieskenya@gmail.com"
            className="text-neutralTextColor hover:text-secondaryBg font-semibold"
          >
            Allied Properties Kenya
          </a>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <BsTelephoneOutbound className="md:h-6 md:w-6 text-neutralTextColor hover:text-secondaryBg" />

          <a
            href="tel:+254723942482"
            className="text-neutralTextColor hover:text-secondaryBg font-semibold"
          >
            0723942482
          </a>
        </div>
      </div>
      <div className="max-w-7xl px-4 mx-auto lg:px-6">
        <div className="relative flex items-center justify-center h-16">
          {/* Links */}
          <div className="flex items-center justify-center flex-grow w-full">
            <div className="flex items-center justify-center text-center w-full">
              <Link
                href="/"
                className={activeTab === "Home" ? activeLink : innactiveLink}
                onClick={() => setActiveTab("Home")}
              >
                Home
              </Link>

              <Link
                href="/propertyList"
                className={
                  activeTab === "propertyList" ? activeLink : innactiveLink
                }
                onClick={() => setActiveTab("propertyList")}
              >
                Property List
              </Link>

              <Link
                href="/diaspora"
                className={
                  activeTab === "diaspora" ? activeLink : innactiveLink
                }
                onClick={() => setActiveTab("diaspora")}
              >
                Diaspora
              </Link>

              <Link
                href="/about"
                className={activeTab === "about" ? activeLink : innactiveLink}
                onClick={() => setActiveTab("about")}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
