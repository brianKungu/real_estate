import React from "react";
import { Meta, NewsEvents } from "../components";

export default function diaspora() {
  return (
    <>
      <Meta title="Diaspora" description="Diaspora Properties" />
      <div className="px-4 my-4">
        <section>
          <p className="tracking-wide text-neutralTextColor text-lg">
            Investing back home has never been this easy! At{" "}
            <span className="text-secondaryBg font-semibold">Allied Properties</span>{" "}
            we are committed to serve and deliver value to our clientelle. The
            good news is that we have expanded our networks to serve Kenyans in
            the Diaspora by providing prime and affordable properties. Our
            Mission is to help you secure your investments with ease and through
            the most seamless processes. We Deliver!
          </p>
        </section>
        <section>
          <NewsEvents />
        </section>
      </div>
    </>
  );
}
