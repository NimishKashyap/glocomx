import { motion } from "framer-motion";

function Contents({ item }) {
  return (
    <div
      className={`${
        item.id > 2 ? "lg:justify-self-end" : "lg:justify-self-start"
      } lg:w-2/3`}
    >
      <h1 className="font-medium text-2xl">
        {item.id}. {item.heading}
      </h1>
      <p className="text-sm">{item.description}</p>
    </div>
  );
}

function Section4({ data }) {
  return (
    <section className="bg-blue-700 text-white px-10 lg:px-40 py-24 relative">
      <h1 className="text-xl lg:text-4xl font-medium mb-10">{data.section4_heading}</h1>
      <div className="lg:hidden w-[120px] mx-auto">
        <motion.img whileHover={{y:-10}} src="/assets/images/coin.png" alt="Coin image" />
      </div>
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 lg:grid-flow-col gap-10 ">
        {data.section4_content.map((item, index) => (
          <Contents item={item} key={index} />
        ))}
      </div>
      <div className="hidden lg:block absolute top-24 bottom-0 left-0 right-0 m-auto w-[400px]">
        <motion.img whileHover={{y:-10}} src="/assets/images/coin.png" alt="Coin image" />
      </div>
    </section>
  );
}

export default Section4;
