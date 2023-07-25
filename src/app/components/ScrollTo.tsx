const ScrollTo = ({ text, href }: { text: string; href: string }) => {
  const scrollIntoView = (href: string) => {
    const elem = document.getElementById(href);

    elem?.scrollIntoView({ behavior: "smooth" });

    return;
  };
  return (
    <button
      className="flex h-16 items-center group"
      onClick={() => scrollIntoView(href)}
    >
      <div
        className={
          "items-center justify-center font-extrabold flex-1 h-full bg-zinc-600 w-16"
        }
      />
      <div className="ml-4 text-zinc-600 flex transition-all duration-500 ease-in-out  group-hover:flex-[60%] whitespace-nowrap ">
        {text}
      </div>
    </button>
  );
};

export default ScrollTo;
