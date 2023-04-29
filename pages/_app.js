import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { Layout } from "../components";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", "handleRouterChange");

    return () => {
      router.events.off("routerChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-56ZJY3VZC7"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-56ZJY3VZC7', {
             page_path: window.location.pathname,
           });
         `,
        }}
      />
      <Layout>
        <Component {...pageProps} /> <Analytics />
      </Layout>
    </>
  );
}
