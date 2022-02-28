import Button from "../Button";

function Cards({ item, index }) {
  return (
    <div className="flex text-black flex-col text-center w-4/5 gap-y-2 lg:gap-y-10 mt-10 bg-white py-16 px-5 rounded-3xl justify-self-center">
      <img className="h-16 lg:h-24 object-contain" src={item.img.url} />
      <h1 className="text-center">{item.name}</h1>
      <p className="lg:px-16 text-sm lg:text-base">{item.desc}</p>
      <Button className="bg-primary px-5 lg:px-0 lg:w-2/5 text-white mx-auto py-4 text-sm lg:text-base">
        {item.button_text}
      </Button>
    </div>
  );
}
function Section11({ data }) {
  return (
    <section  className="text-white lg:px-[9rem] py-16">
      <h1 className="font-medium text-3xl px-10">{data.section11_heading}</h1>
      <div className="grid lg:grid-cols-2 ">
        {data.section11_content.map((item, index) => (
          <Cards item={item} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Section11;
