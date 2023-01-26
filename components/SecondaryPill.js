import React from "react";

export default function SecondaryPill({ text }) {
  return (
    <div className="w-auto">
      <p className="px-4 py-2 rounded-full text-primaryTextColor bg-neutralTextColor">
        {text}
      </p>
    </div>
  );
}
