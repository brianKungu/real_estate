import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWButton() {
  return (
    <div className="fixed bottom-4 bg-secondaryBg py-2 px-6 mx-4 hover:text-neutralBg rounded-full shadow-md animate-bounce">
      <div className="flex items-center space-x-4 text-primaryTextColor ">
        <FaWhatsapp className="w-8 h-8" />{" "}
        <a href="https://api.whatsapp.com/send?phone=+254723942482">WhatsApp Us</a>
      </div>
    </div>
  );
}
