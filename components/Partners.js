function PartnersItems({ item, index }) {
  return (
    <div className="flex flex-col items-center text-white">
      <img
        src={item.company_img.url}
        className="h-36 object-contain mb-5"
        alt="Testimonial"
      />
      <h1>{item.company_name}</h1>
    </div>
  );
}
function Partners({ data }) {
  return (
    <section className="text-white px-[9rem] py-16 bg-blue-500 my-16">
      <h1 className="text-3xl font-medium">{data.partners_heading}</h1>
      <div className="grid grid-cols-3 justify-items-center">
        {data.partners.map((item, index) => (
          <PartnersItems key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Partners;
