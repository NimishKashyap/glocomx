import { motion } from "framer-motion";

function Contents({ item }) {
  return (
    <div
      className={`${
        item.id > 2 ? "justify-self-end" : "justify-self-start"
      } w-2/3`}
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
    <section className="bg-blue-700 text-white px-40 py-24 relative">
      <h1 className="text-4xl font-medium mb-10">{data.section4_heading}</h1>
      <div className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-10 ">
        {data.section4_content.map((item, index) => (
          <Contents item={item} key={index} />
        ))}
      </div>
      <div className="absolute top-24 bottom-0 left-0 right-0 m-auto w-[400px]">
        <motion.img whileHover={{y:-10}} src="/assets/images/coin.png" alt="Coin image" />
      </div>
    </section>
  );
}

export default Section4;
