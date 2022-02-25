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
            duration: 1,
            delay: index * 0.5,
          },
        },
      }}
      initial="hidden"
      whileInView={"visible"}
      viewport
      className="flex flex-col items-center justify-center"
    >
      <img className="h-20 object-contain" src={details.image.url} />
      <h1 className="text-white mt-5">{details.heading}</h1>
      <p className="text-primary">{details.sub_heading}</p>

      <Button className="w-full bg-primary text-white px-6 py-2 mt-5">
        <a about="_blank" href={details.button_link}>
          {details.button_text}
        </a>
      </Button>
    </motion.div>
  );
}

function Section2({ data }) {
  return (
    <section className="h-[40vh] bg-blue-500 flex justify-evenly">
      {data.map((item, index) => (
        <Section2Items key={index} details={item} index={index} />
      ))}
    </section>
  );
}

export default Section2;
