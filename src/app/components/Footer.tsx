import { contactCardInfo } from "../data/consts";
import ContactCard from "./ContactCard";

const Footer = () => {
  return (
    <div
      className="md:h-[75vh] relative w-full px-14 text-end bg-black"
      id="footer"
    >
      <p className="mt-20 text-6xl text-white ">want to connect ?</p>
      <div className="mt-20 max-w-full  flex flex-col md:flex-row my-10 gap-8">
        {contactCardInfo.map((card) => (
          <ContactCard key={card.title} {...card} />
        ))}
      </div>
      <span className="text-xs text-white mb-10 md:absolute bottom-14 right-14 z-50">
        Made with ❤️ in Pune
      </span>
    </div>
  );
};
export default Footer;
