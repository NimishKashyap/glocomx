import Button from "../Button";

function Cards({ item, index }) {
  return (
    <div className="flex text-black flex-col text-center w-4/5 gap-y-10 mt-10 bg-white py-16 px-5 rounded-3xl justify-self-center">
      <img className="h-24 object-contain" src={item.img.url} />
      <h1 className="text-center">{item.name}</h1>
      <p className="px-16">{item.desc}</p>
      <Button className="bg-primary w-2/5 text-white mx-auto py-4">
        {item.button_text}
      </Button>
    </div>
  );
}
function Section11({ data }) {
  return (
    <section className="text-white px-[9rem] py-16">
      <h1 className="font-medium text-3xl">{data.section11_heading}</h1>
      <div className="grid grid-cols-2 ">
        {data.section11_content.map((item, index) => (
          <Cards item={item} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Section11;
