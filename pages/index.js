import React, { useEffect } from "react";
import { Inter } from "@next/font/google";
import { Header, t, Meta } from "../components";
import FeaturedProperties from "../components/FeaturedProperties";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ properties }) {
  return (
    <>
      <Meta
        title="Allied Properties Kenya"
        description="We are a Kenyan real estate company grounded on a mission to
        connect Kenyans all over the world to affordable properties."
        image="/images/logoPNG.png"
        url="https://instagram.com/allied_properties_kenya?igshid=YmMyMTA2M2Y="
      />

      <Header />
      <FeaturedProperties properties={properties} />
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://backend.alliedproperties.co.ke/properties/api/list/all"
  );
  const properties = await data.json();
  console.log(properties);
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  return {
    props: { properties },
    revalidate: 60,
  };
}
