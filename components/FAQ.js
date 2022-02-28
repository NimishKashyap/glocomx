import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CaretIcon from "./CaretIcon";
function FAQItems({ item, index }) {
  const [selected, setSelected] = useState(false);
  return (
    <motion.div
      onClick={() => setSelected(!selected)}
      className="border-b-[1px] lg:pt-5 border-[rgba(255,255,255,0.3)] flex flex-col justify-center-center"
    >
      <h1 className="text-sm lg:text-xl font-medium pb-5 relative mt-5">
        {item.question}{" "}
        <CaretIcon selected={selected} className="absolute top-2 right-0 lg:right-5" />
      </h1>
      <AnimatePresence>
        {selected && (
          <motion.p
            key={"content"}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", paddingBottom: "2rem" },
              collapsed: { opacity: 0, height: 0, paddingBottom: "0rem" },
            }}
            transition={{ type: "tween" }}
            className={`font-light w-[90%]`}
          >
            {item.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
function FAQ({ data }) {
  return (
    <section id="faq" className="text-white px-10 lg:px-[9rem] py-5 lg:py-[5rem]">
      <h1 className="text-xl lg:text-3xl font-medium">{data.faq_heading}</h1>
      <div className="grid lg:grid-cols-2 gap-y-16 gap-x-10 py-10">
        <div>
          {data.faq.map(
            (item, index) =>
              index < data.faq.length / 2 && (
                <FAQItems item={item} index={index} key={index} />
              )
          )}
        </div>
        <div className="-mt-12 lg:mt-0">
          {data.faq.map(
            (item, index) =>
              index >= data.faq.length / 2 && (
                <FAQItems item={item} index={index} key={index} />
              )
          )}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
