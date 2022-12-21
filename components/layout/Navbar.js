import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Property List", href: "/propertyList", current: false },
  { name: "About", href: "/about", current: false },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useRouter();
  const activeLink =
    "bg-secondaryBg text-primaryTextColor px-3 py-2 rounded-md text-base font-medium mr-4";
  const innactiveLink =
    "text-secondaryTextColor hover:bg-neutralBg hover:text-primaryTextColor px-3 py-2 rounded-md text-base font-medium mr-4";
  useEffect(() => {
    if (location.asPath === "/") {
      setActiveTab("Home");
    } else if (location.asPath === "/propertyList") {
      setActiveTab("propertyList");
    } else if (location.asPath === "/about") {
      setActiveTab("about");
    }
  }, []);

  return (
    <Disclosure
      as="nav"
      className="w-full sticky bg-primaryBg top-0 border-b-2 drop-shadow-md z-10 border-neutralBg border-opacity-50 my-2"
    >
      <div className="mx-auto max-w-4xl px-4 lg:px-6">
        <div className="relative flex h-16 items-center justify-center">
          {/* Links */}
          <div className="w-full flex flex-grow items-center justify-center">
            <div className="flex justify-evenly items-center">
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
