import { motion } from "framer-motion";

function NewsItems({ item, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white flex flex-col items-center rounded-2xl w-[90%]"
    >
      <img
        className="w-full object-contain"
        src={`/assets/images/${index}.png`}
      />
      <div className="py-10 px-8">
        <h1 className="text-3xl">{item.heading}</h1>
        <p className="text-sm font-light my-5">{item.description}</p>
        <button className="hover:text-primary underline pb-6">Read more</button>
      </div>
    </motion.div>
  );
}
function Section3({ data }) {
  return (
    <section className="bg-blue-700 px-16">
      {" "}
      <h1 className="text-white font-medium pt-16 text-4xl pl-[6rem]">
        {data.section3_heading}
      </h1>{" "}
      <div className="grid grid-cols-3 w-full py-10 gap-x-5 px-24">
        {data.newsandupdates.map((item, index) => (
          <NewsItems key={index} item={item} index={index + 1} />
        ))}
      </div>
    </section>
  );
}

export default Section3;
