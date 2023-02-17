import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4 my-8 md:mx-auto">
      <div className="w-full gap-4 text-center md:grid md:grid-cols-3 md:text-left text-justified">
        <div>
          <Image
            width={500}
            height={500}
            src="/images/logoPNG.png"
            className="rounded-lg md:w-3/4 w-full object-fit"
            alt="logo"
          />
        </div>
        <div className="my-4 md:my-0">
          <h1 className="text-3xl font-bold uppercase">Follow us</h1>
          <div className="flex items-center justify-center gap-4 mt-4 md:justify-start">
            <a href="#" className="hover:opacity-70">
              <Image
                src="/icons/twittericon.png"
                width={48}
                height={48}
                alt="Twitter icon"
              />
            </a>
            <a
              href="https://www.facebook.com/Allied-properties-Ltd-116948054625320/"
              className="hover:opacity-70"
            >
              <Image
                src="/icons/facebookicon.png"
                width={48}
                height={48}
                alt="Facebook icon"
              />
            </a>
            <a
              href="https://instagram.com/allied_properties_kenya?igshid=YmMyMTA2M2Y="
              className="hover:opacity-70"
            >
              <Image
                src="/icons/instagramicon.png"
                width={48}
                height={48}
                alt="Instagram icon"
              />
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
              Alliedpropertieskenya@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4 my-4 md:my-2 justify-center md:justify-start">
            <BsTelephoneOutbound className="md:h-6 md:w-6 text-neutralTextColor hover:text-secondaryBg" />

            <a
              href="tel:+254723942482"
              className="text-neutralTextColor hover:text-secondaryBg text-base font-semibold"
            >
              +254723942482
            </a>
          </div>
        </div>
      </div>
      <span className="block mt-4 text-sm text-center text-neutralTextColor md:text-left dark:text-neutralTextColor">
        ©{" "}
        <Link href="/" className="hover:underline">
          Allied Properties
        </Link>
        . All Rights Reserved.2023
      </span>
    </footer>
  );
}
