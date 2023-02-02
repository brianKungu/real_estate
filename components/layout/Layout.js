import React from "react";
import FloatingWButton from "../FloatingWButton";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-primaryBg w-full">
      <div className="mx-auto max-w-7xl">
        <Navbar />
        {children}
        <FloatingWButton />
        <Footer />
      </div>
    </div>
  );
}
