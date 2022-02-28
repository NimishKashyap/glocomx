import { motion } from "framer-motion";

function BenefitCard({ item, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01, backgroundColor: "#23293B" }}
      className="flex flex-col text-center w-auto lg:w-auto mx-5 bg-blue-400 bg-opacity-50 py-16 px-5 text-white rounded-xl"
    >
      <motion.img
        whileHover={{
          y: ["-3px", "3px"],
          transition: {
            duration: 0.4,
            yoyo: Infinity,
            ease: "easeOut",
          },
        }}
        className="h-[90px] object-contain"
        src={item.img.url}
        alt="Benefit card image"
      />
      <h1 className="text-white break-words font-medium text-2xl my-5">{item.heading}</h1>
      <p className="text-white text-sm font-light">{item.description}</p>
    </motion.div>
  );
}

function Section5({ data }) {
  return (
    <section className="bg-blue-700 lg:px-16 text-white">
      <h1 className="text-white font-medium lg:pt-[5rem] text-xl lg:text-3xl pl-10 lg:pl-[6rem]">
        {data.section5_heading}
      </h1>
      <div className="grid lg:grid-cols-4 px-10 lg:px-[1rem] my-16 gap-y-10">
        {data.section5_content.map((item, index) => (
          <BenefitCard item={item} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Section5;
