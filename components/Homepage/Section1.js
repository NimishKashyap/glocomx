import { motion } from "framer-motion";

function Section1({ data }) {
  const heroHeading = data.hero_heading;
  const subHeading = data.hero_subheading;
  const heroDescription = data.hero_description;
  const price = data.price;
  const launchDate = data.launchdate;
  return (
    <section className="text-white pt-28 w-full h-full grid grid-cols-2 px-36 items-center">
      <div className="flex flex-col pb-[10rem]">
        <h1 className="text-6xl font-medium text-primary">{heroHeading}</h1>
        <h3 className="text-4xl font-medium w-2/3 mt-10 mb-10">{subHeading}</h3>
        <p className="font-light">{heroDescription}</p>
        <motion.button
            animate={{borderRadius: "3rem"}}
          whileHover={{ backgroundColor: "rgba(255, 220, 0)", scale: 1.05, borderRadius: "1rem" }}
          
          transition={{ duration: 0.1 }}
          className="self-start mt-10 bg-primary w-2/5 py-5 text-2xl font-medium"
        >
          Buy Now
        </motion.button>
      </div>
      <div>
        Right Side {price} {launchDate}
      </div>
    </section>
  );
}

export default Section1;
