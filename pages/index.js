import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Header, Layout, Meta } from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Meta title="Home" description="Real Estate Home Page" />
      <Header />
    </>
  );
}
