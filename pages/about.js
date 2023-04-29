import React from "react";
import { BackButton, Meta } from "../components";
import Image from "next/image";
import dynamic from "next/dynamic";

const About = () => {
  
  return (
    <div className="px-4 my-4">
      <Meta
        title="About Page"
        description="A brief description of who I am and what I do"
      />
      <BackButton />
      <div className="my-4 flex items-center justify-center md:text-center text-left">
        <div className="my-auto">
          <h1 className="text-4xl font-bold md:text-4xl tracking-widest">
            Welcome to{" "}
            <span className="text-secondaryBg">Allied Properties,</span> <br />
            The home of value!
            {/* <br /> based in Nairobi */}
          </h1>
          <div className="mt-4">
            <h3 className="text-2xl text-secondaryTextColor/80 font-bold">
              What we do.
            </h3>
            <p className="mt-2 text-neutralTextColor tracking-wide">
              We are a Kenyan real estate company grounded on a mission to
              connect Kenyans all over the world to affordable properties.
            </p>
            <p className="text-neutralTextColor my-4">
              At <strong>Allied Properties</strong>, we assure you of:
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
          <div className="flex items-center mt-8 space-x-4 justify-center">
            <p className="px-4 py-2 rounded-full bg-secondaryBg text-primaryTextColor">
              Contact us
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=+254723942482"
              className="hover:opacity-70"
            >
              <Image
                src="/icons/whatsappicon.png"
                width={48}
                height={48}
                alt="WhatsaApp icon"
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
            <a href="#" className="hover:opacity-70">
              <Image
                src="/icons/twittericon.png"
                width={48}
                height={48}
                alt="Twitter icon"
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
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
