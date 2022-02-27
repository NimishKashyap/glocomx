import Button from "../Button";

function Section10({ data }) {
  return (
    <section className="grid lg:grid-cols-2 px-10 lg:px-[9rem] py-10 lg:pt-20 bg-blue-500">
      <div className="text-white">
        <h1 className="font-medium text-xl lg:text-3xl">{data.section10_heading}</h1>
        <p className="mt-10 text-sm lg:text-base">{data.section10_desc}</p>
        <Button className={"w-2/5 bg-primary text-white px-6 py-2 mt-5 rounded-3xl"}>
          Join Us
        </Button>
      </div>
      <div className=" text-white lg:px-10 justify-self-end mt-10">
        <img
          className="lg:mr-10"
          src={"/assets/images/section10.png"}
          alt="company image"
        />
      </div>
    </section>
  );
}

export default Section10;
