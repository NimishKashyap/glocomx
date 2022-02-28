function Section6({ data }) {
  return (
    <section id="valueincrease" className="text-white grid lg:grid-cols-2 px-10 lg:px-[10rem] py-10 lg:py-16">
      <div>
        <h1 className="font-medium text-xl lg:text-4xl">{data.section6_heading}</h1>
        <p className="my-12 lg:text-xl font-light text-sm">{data.section6_description}</p>
      </div>
      <div className="justify-self-end">
        <img src="/assets/images/section6.png" alt="Section 6 Image" />
      </div>
    </section>
  );
}

export default Section6;
