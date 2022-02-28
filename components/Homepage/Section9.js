import React from "react";

function Section9({ data }) {
  return (
    <section id="portfolio" className="grid lg:grid-cols-2 px-5 lg:px-[9rem] py-10 lg:pt-20 bg-blue-500">
      <div className="text-white">
        <h1 className="font-medium text-xl lg:text-3xl">{data.section9_heading}</h1>
        <p className="mt-10 text-sm">{data.section9_desc}</p>
      </div>
      <div className="flex flex-col text-white my-10 lg:my-0 lg:px-10 gap-y-10">
        {data.section9_content.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center">
              <img className="mr-10" src={item.img.url} alt="company image" />
              <div>
                <span className="text-xl font-medium">{item.heading}</span>
                <p className="font-light text-sm lg:text-base">{item.description}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Section9;
