import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Header, Layout, Meta } from "../components";
import PrimaryPill from "../components/PrimaryPill";
import SecondaryPill from "../components/SecondaryPill";
import PropertyCards from "../components/PropertyCards";
import PropertyCard from "../components/PropertyCard";
import FeaturedProperties from "../components/FeaturedProperties";
import Tabs from "../components/Tabs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Meta title="Home" description="Real Estate Home Page" />
      <Header />
      <PropertyCards />
      <FeaturedProperties />
    </>
  );
}
