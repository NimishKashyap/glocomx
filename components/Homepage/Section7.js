function Section7({ data }) {
  return (
    <section className="text-white grid grid-cols-2 px-[10rem] py-16">
      <div>
        <h1 className="font-medium text-4xl">{data.section7_heading}</h1>
        <p className="mt-12 text-xl font-light">{data.section7_desc1}</p>
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
