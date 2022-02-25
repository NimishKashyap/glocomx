function Section6({ data }) {
  return (
    <section className="text-white grid grid-cols-2 px-[10rem] py-16">
      <div>
        <h1 className="font-medium text-4xl">{data.section6_heading}</h1>
        <p className="mt-12 text-xl font-light">{data.section6_description}</p>
      </div>
      <div className="justify-self-end">
        <img src="/assets/images/section6.png" alt="Section 6 Image" />
      </div>
    </section>
  );
}

export default Section6;
