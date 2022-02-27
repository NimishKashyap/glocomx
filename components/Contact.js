import Envelope from "./Envelope";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import PhoneIcon from "./PhoneIcon";
import TwitterIcon from "./TwitterIcon";
import Button from "./Button";
function Contact({ data }) {
  return (
    <section className="text-white px-[9rem] py-16">
      <div className="grid grid-cols-3">
        <div className="">
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
          <div>
            <div className="flex">
              <div className="h-24 w-10 mr-10">
                <PhoneIcon />
              </div>
              <p>{data.contact_number}</p>
            </div>
            <div className="flex">
              <div className="h-24 w-10 mr-10">
                <Envelope />
              </div>
              <p>{data.contact_mail}</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-[rgba(255,255,255,0.7)] col-span-2 grid grid-cols-2 justify-items-center py-10 rounded-2xl">
          <div>
            <input
              placeholder="First Name"
              className="bg-[rgba(255,255,255,0.15)] px-5 py-2 rounded-3xl ml-5"
            />
          </div>
          <div>
            <input
              placeholder="Last Name"
              className="bg-[rgba(255,255,255,0.15)] px-5 py-2 rounded-3xl mr-5"
            />
          </div>
          <div className="col-span-2 justify-self-center w-full px-[4.5rem]">
            <input
              placeholder="email"
              className="w-full bg-[rgba(255,255,255,0.15)] px-5 py-2 rounded-3xl"
            />
          </div>
          <div className="col-span-2 justify-self-start w-full px-[4.5rem]">
            <textarea
              className="w-full h-full bg-[rgba(255,255,255,0.15)] px-5 py-3 rounded-3xl"
              placeholder="Message..."
            />
          </div>
          <Button
            className={
              "w-2/5 bg-primary text-white py-2 mt-10 rounded-3xl justify-self-start mx-[4.5rem] h-16"
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
