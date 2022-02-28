import { motion } from "framer-motion";

function NewsItems({ item, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white flex flex-col overflow-hidden items-center rounded-2xl mt-5 lg:mt-0 lg:w-[90%]"
    >
      <img
        className="h-[200px] w-full object-cover"
        src={item.image.url}
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
    <section id="news" className="bg-blue-700 px-10">
      {" "}
      <h1 className="text-white font-medium lg:pt-16 text-xl mt-5 lg:text-4xl lg:pl-[6rem]">
        {data.section3_heading}
      </h1>{" "}
      <div className="grid justify-items-center lg:grid-cols-3 w-full py-10 lg:gap-x-5 lg:px-24">
        {data.newsandupdates.map((item, index) => (
          <NewsItems key={index} item={item} index={index + 1} />
        ))}
      </div>
    </section>
  );
}

export default Section3;
