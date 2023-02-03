import React from "react";
import { Meta, NewsEvents } from "../components";

export default function diaspora() {
  return (
    <>
      <Meta title="Diaspora" description="Diaspora Properties" />
      <div className="px-4 my-4">
        Diaspora
        <section>
          <NewsEvents />
        </section>
      </div>
    </>
  );
}
