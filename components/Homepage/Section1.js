import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Section1({ data }) {
  const heroHeading = data.hero_heading;
  const subHeading = data.hero_subheading;
  const heroDescription = data.hero_description;
  const price = data.price;
  const launchDate = data.launchdate;
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    setInterval(() => {
      let difference = new Date(launchDate) - new Date();
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);
      console.log(days, hours, minutes, seconds);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  }, []);

  return (
    <section className="text-white pt-28 w-full h-auto lg:h-full grid grid-cols-1 lg:grid-cols-2 px-10 lg:px-36 items-center bg-cover bg-earth bg-no-repeat">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: "-5rem",
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: "tween",
              delayChildren: 0.1,
              staggerChildren: 0.1,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="flex flex-col pb-10 lg:pb-[10rem]"
      >
        <h1 className="text-3xl lg:text-6xl font-medium text-primary">
          {heroHeading}
        </h1>
        <h3 className="text-2xl lg:text-4xl font-medium w-2/3 mt-10 mb-10">
          {subHeading}
        </h3>
        <p className="font-light text-sm lg:text-base">{heroDescription}</p>
        <motion.button
          animate={{ borderRadius: "3rem" }}
          whileHover={{
            backgroundColor: "rgba(255, 220, 0)",
            scale: 1.05,
            borderRadius: "1rem",
          }}
          transition={{ duration: 0.3 }}
          className="self-start mt-10 bg-primary w-3/5 lg:w-2/5 py-5 lg:text-2xl font-medium"
        >
          Buy Now
        </motion.button>
      </motion.div>
      <div className="flex flex-col justify-center items-center mb-10 lg:mb-[17rem] lg:pl-24 h-full">
        <p className="text-center text-2xl mb-10">
          Public Sale, Price: ${price}
        </p>
        <div className="grid grid-cols-4 justify-items-center gap-x-10 lg:gap-10 text-sm">
          <div className="flex w-[75px] flex-col bg-black items-center lg:px-10 py-6 rounded-xl">
            <h1 className="lg:text-2xl font-semibold">{days}</h1>
            <p>Days</p>
          </div>
          <div className="flex w-[75px] flex-col bg-black items-center lg:px-10 py-6 rounded-xl">
            <h1 className="lg:text-2xl font-semibold">{hours}</h1>
            <p>Hours</p>
          </div>
          <div className="flex w-[75px] flex-col bg-black items-center lg:px-10 py-6 rounded-xl">
            <h1 className="g:text-2xl font-semibold">{minutes}</h1>
            <p>Mins</p>
          </div>
          <div className="flex w-[75px] flex-col bg-black items-center lg:px-10 py-6 rounded-xl">
            <h1 className="lg:text-2xl font-semibold">{seconds}</h1>
            <p>Sec</p>
          </div>
        </div>

        <div className="w-full h-6 bg-white rounded-3xl relative mt-12">
          <div className="w-[65%] flex justify-center items-center bg-primary h-full rounded-3xl text-sm font-semibold text-center">
            65%
          </div>
          <span className="absolute right-0 -top-8">$155,000</span>
        </div>
      </div>
    </section>
  );
}

export default Section1;
