function Section7({ data }) {
  return (
    <section id="token" className="text-white grid lg:grid-cols-2 px-10 lg:px-[10rem] py-16">
      <div>
        <h1 className="font-medium text-xl mb-5 lg:text-4xl">{data.section7_heading}</h1>
        <p className="mb-12 lg:text-xl font-light text-sm">{data.section7_desc1}</p>
      </div>
      <div className="justify-self-end">
        <img src="/assets/images/section7.png" alt="Section 6 Image" />
        <p className="text-sm font-light mt-5">
          Average trading volume of cryptocurrencies in USD billion
        </p>
      </div>
    </section>
  );
}

export default Section7;
