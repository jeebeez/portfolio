interface ContactCardProps {
  title: string;
  text: string;
  subText: string;
}

const ContactCard = ({ title, text, subText }: ContactCardProps) => {
  return (
    <>
      <div
        className={
          "flex items-center h-64 justify-center font-extrabold flex-1 bg-black border-[#d9cebe] border text-[#d9cebe] hover:text-[#f74214] hover:bg-[#d7d7d7] transition-all hover:flex-[22%] duration-700 ease-in-out"
        }
      >
        <div className="text-4xl">title</div>
      </div>
    </>
  );
};

export default ContactCard;
