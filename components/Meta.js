import React from "react";
import Head from "next/head";

const Meta = ({ title, description, image, url }) => {
  const pageTitle = title ? `${title} | Real-Estate` : "Real_Estate.com";
  const pageDescription = description ? description : "Description.";
  const pageImage = image ? image : "#";
  const pageURL = url ? url : "#";
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageURL} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageURL} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={pageImage} />

        {/* + */}
        <meta
          name="viewport"
          content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=1.0, 
                      user-scalable=no, target-densitydpi=device-dpi"
        />
      </Head>
    </>
  );
};

export default Meta;
