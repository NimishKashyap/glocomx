
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
function SmallTestimonial({ item }) {
  return (
    <div className="flex flex-col items-center text-center bg-blue-400 py-10 rounded-2xl">
      <div className="flex items-center my-5 mx-5">
        <img src={item.img.url} className="h-24 mr-5" alt="Testimonial" />
        <div>
          <p className="text-left text-base lg:text-xl">{item.name}</p>
          <p className="text-left text-sm text-gray-400">{item.designation}</p>
        </div>
      </div>
      <p className="text-gray-200 w-[90%] text-xs">{item.desc}</p>
    </div>
  );
}
function Testimonial({ data }) {
  // useEffect(() => {
  //   const scrollContainer = document.querySelector("#scroll-container");
  //   setInterval(() => {
  //     // let scrollAmount = scrollContainer.style.width;
  //     let direction = 1;
  //     // scrollContainer.style.transform = `translateX(-${scrollAmount})`;
  //     if (
  //       scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
  //       scrollContainer.scrollWidth
  //     ) {
  //       direction = -1;
  //     }
  //     if (scrollContainer.scrollLeft - scrollContainer.offsetWidth <=0) {
  //       direction= 1;
  //     }
  //     console.log(scrollContainer.scrollLeft + scrollContainer.offsetWidth);
  //     scrollContainer.scrollBy(direction * 200, 0);
  //   }, 2000);
  // }, []);
  return (
    <section id="testimonial" className="text-white text-3xl px-10">
      <h1 className="lg:mx-[9rem] mb-5">{data.testimonials_heading}</h1>
      <div className="hidden lg:grid lg:grid-cols-3 text-white justify-items-center lg:mx-[9rem] gap-x-10 gap-y-10">
        {data.testimonials.map((item, index) => (
          <TestimonialItems key={index} item={item} index={index} />
        ))}
      </div>
      <div
        id="scroll-container"
        className="grid lg:hidden auto-cols-[100%] grid-flow-col overflow-x-scroll gap-x-5 scroll-smooth no-scrollbar"
      >
        {data.testimonials.map((item, index) => (
          <SmallTestimonial key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
