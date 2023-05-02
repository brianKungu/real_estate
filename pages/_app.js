import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { Layout } from "../components";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
      async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}, {
              page_path: window.location.pathname,
            });
         `}
      </Script>
      <NextSeo
        title="Allied Properties Kenya"
        description="We are a Kenyan real estate company grounded on a mission to
              connect Kenyans all over the world to affordable properties."
        image="/images/logoPNG.png"
        url="https://instagram.com/allied_properties_kenya?igshid=YmMyMTA2M2Y="
        facebook={{
          url: "https://www.facebook.com/Allied-properties-Ltd-116948054625320/",
          title: "Allied Properties LTD",
          description:
            "We are a Kenyan real estate company grounded on a mission to connect Kenyans all over the world to affordable properties.",
        }}
      />
      <Layout>
        <Component {...pageProps} /> <Analytics />
      </Layout>
    </>
  );
}
