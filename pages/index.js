import Head from "next/head";
import Image from "next/image";
import Advisors from "../components/Advisors";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Section1 from "../components/Homepage/Section1";
import Section10 from "../components/Homepage/Section10";
import Section11 from "../components/Homepage/Section11";
import Section12 from "../components/Homepage/Section12";
import Section2 from "../components/Homepage/Section2";
import Section3 from "../components/Homepage/Section3";
import Section4 from "../components/Homepage/Section4";
import Section5 from "../components/Homepage/Section5";
import Section6 from "../components/Homepage/Section6";
import Section7 from "../components/Homepage/Section7";
import Section8 from "../components/Homepage/Section8";
import Section9 from "../components/Homepage/Section9";
import Navbar from "../components/Navbar/Navbar";
import Team from "../components/Team";
import styles from "../styles/Home.module.css";

export default function Home({ result }) {
  // console.log(props);
  return (
    <>
      <Head>
        <title>Glocomx</title>
      </Head>

      <main className="font-poppins text-lg font-base h-[101vh] bg-cover bg-earth bg-no-repeat no-scrollbar">
        <Navbar />
        <Section1 data={result} />
        <Section2 data={result.section2} />
        <Section3 data={result} />
        <Section4 data={result} />
        <Section5 data={result} />
        <Section6 data={result} />
        <Section7 data={result} />
        <Section8 data={result} />
        <Section9 data={result} />
        <Section10 data={result} />
        <Section11 data={result} />
        <Section12 data={result} />
        <FAQ data={result} />
        <Team data={result} />
        <Advisors data={result} />
        <Contact data={result} />
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
