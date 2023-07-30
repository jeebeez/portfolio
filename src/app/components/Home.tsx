import Image from "next/image";
import HomeTitle from "./HomeTitle";
import DownloadResume from "./Resume";
import ScrollTo from "./ScrollTo";

const Home = () => {
  return (
    <div className="md:min-h-screen w-full px-14 relative" id="home">
      <DownloadResume />
      <div className="z-50 absolute -rotate-90 bottom-32 left-0">
        <ScrollTo text="WHO AM I ?" href="about" />
      </div>
      <div className="w-full py-14 ">
        <Image
          src="/jeebee.png"
          alt="JeeBee Logo"
          className="ml-auto"
          width={80}
          height={80}
          priority
        />
      </div>
      <div className=" flex w-full my-20 flex-col items-end">
        <HomeTitle />
      </div>
    </div>
  );
};

export default Home;
