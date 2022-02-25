function Section9({ data }) {
  return (
    <section className="grid grid-cols-2 px-[9rem] py-10 pt-20 bg-blue-500">
      <div className="text-white">
        <h1 className="font-medium text-3xl">{data.section9_heading}</h1>
        <p className="mt-10">{data.section9_desc}</p>
      </div>
      <div className="flex flex-col text-white px-10 gap-y-10">
        {data.section9_content.map((item, index) => (
          <>
            <div className="flex items-center">
              <img className="mr-10" src={item.img.url} alt="company image" />
              <div>
                <span className="text-xl font-medium">{item.heading}</span>
                <p className="font-light">{item.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Section9;
