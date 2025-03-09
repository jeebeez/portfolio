import Image from "next/image";
import ScrollTo from "./ScrollTo";

const About = () => {
  return (
    <div
      className="min-h-screen relative px-4 md:px-14 w-full flex flex-col justify-center items-center md:flex-row"
      id="about"
    >
      <div className="w-full md:min-w-[50%] flex justify-center h-[50%] mt-20 md:mt-0">
        <Image
          src="/photo.webp"
          alt="That's me"
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
          width={300}
          height={500}
          priority
          className="max-w-[250px] md:max-w-[300px]"
        />
      </div>
      <div className="text-lg md:text-2xl mt-10 md:mt-0 px-4 md:px-0">
        <p>
          I stand at the intersection of making memorable web experiences and
          shipping them fast. Being highly self-critical, I am also very
          critical about my work. I deliberate on why I am doing something and
          what value it will add to the end user.
        </p>
        <p className="mt-8 md:mt-16">
          I have an eye for product, especially product-gaps which could help
          enhance their functionality and user engagement. I like to make jokes
          whenever possible and am very easy to talk to.
        </p>
      </div>
      <div className="z-50 absolute -rotate-90 bottom-32 left-0">
        <ScrollTo text="WHAT I DO ?" href="work" />
      </div>
    </div>
  );
};

export default About;
