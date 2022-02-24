import Head from "next/head";
import Image from "next/image";
import Section1 from "../components/Homepage/Section1";
import Section2 from "../components/Homepage/Section2";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home({result}) {
  // console.log(props);
  return (
    <>
      <Head>
        <title>Glocomx</title>
      </Head>

      <main className="font-poppins text-lg font-base h-screen bg-cover bg-earth bg-no-repeat">
        <Navbar />
        <Section1 data={result} />
        <Section2 data={result.section2}/>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch("https://glocomx-backend.herokuapp.com/home-page");

  const result = await data.json();
  return {
    props: { result },
  };
};
