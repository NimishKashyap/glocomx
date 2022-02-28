import Envelope from "./Envelope";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import PhoneIcon from "./PhoneIcon";
import TwitterIcon from "./TwitterIcon";
import Button from "./Button";
function Contact({ data }) {
  return (
    <section className="text-white lg:px-[9rem] py-16 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:px-10">
          <h1 className="text-3xl font-medium">{data.contact_heading}</h1>
          <h3 className="mt-16 text-xl font-medium mb-5">
            {data.contact_subheading}
          </h3>
          <p className="font-thin w-4/5 mb-10">{data.contact_desc}</p>
          <div className="flex w-3/5 justify-between">
            <div className="text-white h-24 w-10">
              <FacebookIcon />
            </div>
            <div className="text-white h-24 w-10">
              <InstagramIcon />
            </div>
            <div className="text-white h-24 w-10 ">
              <TwitterIcon />
            </div>
          </div>
          <div className="px-5">
            <div className="flex">
              <div className="w-5 lg:h-24 lg:w-10 mr-5 lg:mr-10">
                <PhoneIcon />
              </div>
              <p>{data.contact_number}</p>
            </div>
            <div className="flex">
              <div className="w-5 lg:h-24 lg:w-10 mr-5 lg:mr-10">
                <Envelope />
              </div>
              <p>{data.contact_mail}</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-[rgba(255,255,255,0.7)] my-5 lg:col-span-2 lg:grid lg:grid-cols-2 py-10 rounded-2xl gap-y-5 px-5">
          <div className="mb-5 lg:mb-0 lg:ml-[4.5rem] my-2">
            <input
              placeholder="First Name"
              className="bg-[rgba(255,255,255,0.15)] w-full px-5 py-2 rounded-3xl "
            />
          </div>
          <div className="mb-5 lg:mb-0 justify-self-end lg:mr-16 mt-2">
            <input
              placeholder="Last Name"
              className="bg-[rgba(255,255,255,0.15)] w-full px-5 py-2 rounded-3xl "
            />
          </div>
          <div className="mb-5 lg:mb-0 col-span-1 lg:col-span-2 lg:justify-self-center w-full lg:px-[4.5rem] mt-2">
            <input
              placeholder="email"
              className="w-full bg-[rgba(255,255,255,0.15)] px-5 py-2 rounded-3xl"
            />
          </div>
          <div className="col-span-1 lg:col-span-2 justify-self-start w-full lg:px-[4.5rem] mt-2">
            <textarea
              className="w-full h-full bg-[rgba(255,255,255,0.15)] px-5 py-3 rounded-3xl"
              placeholder="Message..."
            />
          </div>
          <Button
            className={
              "w-2/5 col-span-2 lg:w-1/5 bg-primary text-white py-2 mt-10 rounded-3xl justify-self-start lg:mx-[4.5rem] lg:h-16"
            }
          >
            Send
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
