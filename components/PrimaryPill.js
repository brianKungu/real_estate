import React from "react";

export default function PrimaryPill({ text }) {
  return (
    <div className="w-auto">
      <p className="px-4 py-2 rounded-full text-primaryTextColor bg-secondaryBg">
        {text}
      </p>
    </div>
  );
}
