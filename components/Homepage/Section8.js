import React from "react";
import ProgressBar from "../ProgressBar";

function Section8({ data }) {
  return (
    <section className="flex flex-col my-24  lg:mx-24 lg:justify-center items-center">
      <h1 className="self-start text-white px-10 lg:px-[4rem] font-medium text-xl lg:text-3xl">
        {data.section8_heading}
      </h1>
      {data.section8_content.map((item, index) => (
        <React.Fragment key={index}>
          <h1
            key={index}
            className="text-white mt-14 mb-10 font-medium mx-5 text-center text-sm lg:text-base"
          >
            {item.heading}
          </h1>
          <ProgressBar
            key={index}
            percentage={`${item.growth_rate}%`}
            width="w-4/5"
          />
        </React.Fragment>
      ))}
    </section>
  );
}

export default Section8;
