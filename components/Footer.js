import Envelope from "./Envelope";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import PhoneIcon from "./PhoneIcon";
import TwitterIcon from "./TwitterIcon";

const listItems = [
  {
    name: "Shop",
    link: "#",
  },
  {
    name: "Tokens",
    link: "#",
  },
  {
    name: "Portfolio",
    link: "#",
  },
  {
    name: "Roadmap",
    link: "#",
  },
  {
    name: "FAQ",
    link: "#",
  },
  {
    name: "Team",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];
function Footer({ data }) {
  return (
    <>
      <section className="grid lg:grid-cols-3 text-white px-10 lg:px-[9rem] bg-blue-400 py-16">
        <div>
          <img
            src="/assets/images/navbar_logo.png"
            className="mb-8"
            alt="Glocomx Icon"
          />
          <p className="mb-8 font-light">
            Glocomx! A digital transaction platform that delivers certainty,
            simplicity, and security for all parties.
            <br />
            GLOCOMX! - Revolutionizing International Trade!
          </p>
          <div className="flex w-3/5 mb-5 lg:w-2/5 justify-between mt-10">
            <div className="text-white h-16 w-10">
              <FacebookIcon />
            </div>
            <div className="text-white h-16 w-10">
              <InstagramIcon />
            </div>
            <div className="text-white h-16 w-10 ">
              <TwitterIcon />
            </div>
          </div>
          <div>
            <div className="flex mt-8">
              <div className="h-16 w-10 mr-10">
                <PhoneIcon />
              </div>
              <p>{data.contact_number}</p>
            </div>
            <div className="flex">
              <div className="h-16 w-10 mr-10">
                <Envelope />
              </div>
              <p>{data.contact_mail}</p>
            </div>
          </div>
        </div>
        <div className="lg:justify-self-center my-5 lg:my-0">
          <h1 className="text-3xl font-medium">Quick Links</h1>
          <ul>
            {listItems.map((item) => (
              <li key={item.name} className="mt-8">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-medium">Recent News</h1>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            men book.
          </p>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            men book.
          </p>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            men book.
          </p>
        </div>
      </section>
      <div className="px-10 lg:px-[9rem] bg-blue-900 text-white opacity-50 py-5">Copyright &#169; 2021 Glocomx</div>
    </>
  );
}

export default Footer;
