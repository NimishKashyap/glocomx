import { motion } from "framer-motion";
import Button from "../Button";

function Section2Items({ details, index }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: "-1rem",
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.05,
          },
        },
      }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center"
    >
      <img className="h-20 object-contain" src={details.image.url} />
      <h1 className="text-white mt-5">{details.heading}</h1>
      <p className="text-primary">{details.sub_heading}</p>

      <Button className="lg:w-full bg-primary text-white px-6 py-2 mt-5">
        <a about="_blank" href={details.button_link}>
          {details.button_text}
        </a>
      </Button>
    </motion.div>
  );
}

function Section2({ data }) {
  return (
    <section id="shop" className="lg:h-[40vh] bg-blue-500 flex flex-col lg:flex-row justify-evenly py-5 gap-y-10">
      {data.map((item, index) => (
        <Section2Items key={index} details={item} index={index} />
      ))}
    </section>
  );
}

export default Section2;
