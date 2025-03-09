import Image from "next/image";
import ScrollTo from "./ScrollTo";

const About = () => {
  return (
    <div className="min-h-screen relative px-14 w-full flex" id="about">
      <div className="min-w-[50%] flex h-[50%] mt-10 justify-center ">
        <Image
          src="/photo.webp"
          alt="That's me"
          style={{ width: "auto", height: "auto" }}
          width={300}
          height={500}
          priority
        />
      </div>
      <div className="text-2xl mt-40">
        <p>
          I stand at the intersection of making memorable web experiences and
          shipping them fast. Being highly self-critical, I am also very
          critical about my work. I deliberate on why I am doing something and
          what value it will add to the end user.
        </p>
        <p className="mt-16">
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
