import React from "react";
import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();

  return (
    <div>
      {" "}
      <IoArrowBackOutline
        onClick={() => router.back()}
        className="cursor-pointer w-6 h-6 text-center text-neutralTextColor hover:text-secondaryTextColor"
      />
    </div>
  );
}
