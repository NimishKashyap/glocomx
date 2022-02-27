import ProgressBar from "../ProgressBar";

function Section8({ data }) {
  return (
    <section className="flex flex-col my-24 mx-24 justify-center items-center">
      <h1 className="self-start text-white px-[4rem] font-medium text-3xl">
        {data.section8_heading}
      </h1>
      {data.section8_content.map((item, index) => (
        <>
          <h1 key={index} className="text-white mt-14 mb-10 font-medium">{item.heading}</h1>
          <ProgressBar
            key={index}
            percentage={`${item.growth_rate}%`}
            width="w-4/5"
          />
        </>
      ))}
    </section>
  );
}

export default Section8;
