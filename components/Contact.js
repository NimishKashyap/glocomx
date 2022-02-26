import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";
function Contact({ data }) {
  return (
    <section className="text-white px-[9rem]">
      <div className="grid grid-cols-3">
        <div className="">
          <h1>{data.contact_heading}</h1>
          <h3>{data.contact_subheading}</h3>
          <p>{data.contact_desc}</p>
          <div>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className="border-2 col-span-2">{/* input */}</div>
      </div>
    </section>
  );
}

export default Contact;
