function TeamItem({ item, index }) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="border-4 max-w-fit rounded-full">
        <img src={item.img.url} alt="Team Image" />
      </div>{" "}
      <h1 className="font-medium opacity-60 text-xl my-2">{item.name}</h1>
      <p className="font-light w-4/5">{item.desc}</p>
    </div>
  );
}
function Team({ data }) {
  return (
    <section className="text-white px-[9rem] pb-[4rem]">
      <h1 className="text-3xl font-medium pb-16">{data.team_heading}</h1>
      <div className="grid grid-cols-3 gap-y-16">
        {data.team.map((item, index) => (
          <TeamItem item={item} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Team;
