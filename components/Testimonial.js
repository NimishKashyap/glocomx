function TestimonialItems({ item, index }) {
  return (
    <div className="flex flex-col items-center text-center bg-blue-400 py-10 rounded-2xl">
      <div className="flex items-center my-5 mx-5">
        <img src={item.img.url} className="h-24 mr-5" alt="Testimonial" />
        <div>
          <p className="text-left text-base lg:text-xl">{item.name}</p>
          <p className="text-left text-sm text-gray-400">{item.designation}</p>
        </div>
      </div>
      <p className="text-gray-200 w-[90%] text-sm">{item.desc}</p>
    </div>
  );
}
function Testimonial({ data }) {
  return (
    <section className="text-white text-3xl px-10"> 
      <h1 className="lg:mx-[9rem]">{data.testimonials_heading}</h1>
      <div className="grid lg:grid-cols-3 text-white justify-items-center lg:mx-[9rem] gap-x-10 gap-y-10">
        {data.testimonials.map((item, index) => (
          <TestimonialItems key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
