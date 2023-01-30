import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useRouter();
  const activeLink =
    "bg-secondaryBg text-primaryTextColor px-3 py-2 rounded-md text-base font-medium mr-4 text-center";
  const innactiveLink =
    "text-secondaryTextColor hover:bg-neutralBg hover:text-primaryTextColor px-3 py-2 rounded-md text-base font-medium mr-4 text-center";
  useEffect(() => {
    if (location.asPath === "/") {
      setActiveTab("Home");
    } else if (location.asPath === "/propertyList") {
      setActiveTab("propertyList");
    } else if (location.asPath === "/about") {
      setActiveTab("about");
    }
  },[location.asPath]);

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-10 w-full my-4 border-b-2 border-opacity-50 bg-primaryBg drop-shadow-md border-neutralBg"
    >
      <div className="max-w-4xl px-4 mx-auto lg:px-6">
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
// {navigation.map((item) => (
//   <Disclosure.Button
//     as="a"
//     key={item.name}
//     href={item.href}
//     className={classNames(
//       item.current
//         ? "bg-secondaryBg text-primaryTextColor"
//         : "text-secondaryTextColor hover:bg-neutralBg hover:text-primaryTextColor",
//       " px-3 py-2 rounded-md text-base font-medium"
//     )}
//     aria-current={item.current ? "page" : undefined}
//   >
//     {item.name}
//   </Disclosure.Button>
// ))}
