import Link from "next/link";

export interface ContactCardProps {
  title: string;
  subTitle: string;
  url: string;
}

const ContactCard = ({ title, subTitle, url }: ContactCardProps) => {
  return (
    <>
      <Link
        className={
          "flex relative h-48 md:h-64 font-extrabold flex-1 bg-black border-[#d9cebe] border text-[#d9cebe] hover:bg-[#d7d7d7] transition-all hover:flex-[22%] duration-500 ease-in-out group p-4 md:p-6"
        }
        href={url}
        target={"_blank"}
      >
        <div className="transition-all ease-in-out group-hover:translate-y-0 -translate-y-[50%] opacity-0 group-hover:opacity-100 duration-500 text-2xl md:text-5xl absolute text-black bottom-5 right-5  ">
          ↗︎
        </div>

        <div className="transition-all flex ease-in-out text-black opacity-0 group-hover:opacity-100 duration-500 flex-col items-start">
          <div className="group-hover:text-xl md:group-hover:text-2xl  text-xl transition-all ease-in-out group-hover:translate-y-0 duration-500 -translate-y-[50%]">
            {title}
          </div>
          <div className="group-hover:text-sm md:group-hover:text-base font-extralight text-start transition-all ease-in-out duration-500  group-hover:translate-y-0 -translate-y-[100%] opacity-0 group-hover:opacity-100 w-52 md:w-full">
            {subTitle}
          </div>
        </div>
        <div className="absolute transition-all duration-300 ease-in-out top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="
           transition-all ease-in-out duration-500 text-2xl md:text-5xl     group-hover:text-2xl group-hover:text-black   translate-y-0 group-hover:-translate-y-[100%] group-hover:opacity-0
"
          >
            {title}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ContactCard;
