import { contactCardInfo } from "../data/consts";
import ContactCard from "./ContactCard";

const Footer = () => {
  return (
    <div
      className="md:h-[75vh] relative w-full px-4 md:px-14 py-6 md:py-10 bg-black flex flex-col justify-end"
      id="footer"
    >
      <div className="text-end">
        <div className="flex flex-col items-end">
          <p className="pt-20 text-3xl w-72 md:w-full md:text-6xl text-white">
            want to connect ?
          </p>
        </div>
        <div className="mt-10 md:mt-40 mb-10 md:mb-20 max-w-full flex flex-col md:flex-row gap-4 md:gap-8">
          {contactCardInfo.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </div>
      </div>
      <span className="text-xs text-white block bottom-4 md:bottom-14 text-center z-50 pb-4 md:pb-0">
        Made with ❤️ in Pune
      </span>
    </div>
  );
};
export default Footer;
