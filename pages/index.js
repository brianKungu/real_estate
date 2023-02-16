import { Inter } from "@next/font/google";
import { Header, t, Meta } from "../components";
import FeaturedProperties from "../components/FeaturedProperties";
import { ToastContainer, toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ properties }) {
  return (
    <>
      <Meta title="Home" description="Real Estate Home Page" />
      <Header />
      <FeaturedProperties properties={properties} />
      <ToastContainer
        theme={colored}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://realestatebackendcollab.pythonanywhere.com/properties/api/list/all"
  );
  const properties = await data.json();
  console.log(properties);
  return {
    props: { properties },
    revalidate: 60,
  };
}
