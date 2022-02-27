const items = [
  {
    id: 1,
    time: "Nov 2021",
    heading: "ICO PRE-SALE MARKETING",
    content:
      "GLOCOMX plans to start with an initial round of digital marketing to create general awareness about its token and investing.",
  },
  {
    id: 2,
    time: "Jan 2022",
    heading: "PRE-ICO AMA LIVE",
    content:
      "An interactive AMA session for the members of community will be arranged to showcase the products and get their feedback.",
  },
  {
    id: 3,
    time: "Jan 2022",
    heading: "ICO TOKEN SALE",
    content:
      "GLOCOMX team holds an initial token sale for private investors & selected early adopters, who are willing to be a part of the ICO.",
  },
  {
    id: 4,
    time: "Mar 2022",
    heading: "LIQUIDITY POOL CREATION",
    content:
      "Commodity NFT's liquidity pool is created for investors to add liquidity and the token is listed on platforms like PancakeSwap, etc.",
  },
  {
    id: 5,
    time: "May 2022",
    heading: "NFT MARKETPLACE",
    content:
      "GLOCOMX marketplace introduces new digital asset feature as NFT that will be added in 2022. Local and international Trade Commissions and regulators partial activation.",
  },
  {
    id: 6,
    time: "Q4 2022",
    heading: "GLOCOMX MOBILE APP",
    content: "The mobile application is introduced for GLOCOMX marketplace",
  },
  {
    id: 7,
    time: "Q1 2023",
    heading: "OTHER ASSETS LISTING ",
    content: "Other assets will go live on the marketplace.",
  },
  {
    id: 8,
    time: "2024+",
    heading: "CONTINUE GROWING",
    content:
      "Adding non-digital objects for trading in the marketplace as well as perfecting the process within it.",
  },
];
function RoadmapItems({ item, index }) {
  return index % 2 === 0 ? (
    <>
      <h1 className="justify-self-end text-xl font-medium">{item.time}</h1>
      <div>
        <h1 className="text-primary mb-4 font-medium text-xl">
          {item.heading}
        </h1>
        <div className="bg-white text-black rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
          <p className="px-10 py-4">{item.content}</p>
        </div>
      </div>
    </>
  ) : (
    <>
      <div>
        <h1 className="text-primary mb-4 font-medium text-xl">
          {item.heading}
        </h1>
        <div className="bg-white text-black rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
          <p className="px-10 py-4">{item.content}</p>
        </div>
      </div>
      <h1 className="text-xl font-medium">{item.time}</h1>
    </>
  );
}
function Section12({ data }) {
  return (
    <section className="text-white lg:px-[9rem] px-10">
      <h1 className="font-medium text-3xl">Roadmap</h1>
      <div className="grid lg:grid-cols-2 gap-y-14 items-center gap-x-[5rem] py-[3rem] relative">
        {items.map((item, index) => (
          <RoadmapItems item={item} index={index} key={index} />
        ))}
        <div className="h-full hidden lg:block absolute w-3 bg-white mx-auto top-0 right-0 left-0 bottom-0 rounded-lg"/>
      </div>
    </section>
  );
}

export default Section12;
