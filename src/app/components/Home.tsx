import Image from "next/image";
import { homeTitle } from "../data/consts";
import { motion } from "framer-motion";
import DownloadResume from "./Resume";
import ScrollTo from "./ScrollTo";

const Home = () => {
  return (
    <div className="min-h-screen w-full px-4 md:px-14 relative" id="home">
      <DownloadResume />
      <div className="z-50 absolute -rotate-90 bottom-32 left-0 hidden md:block">
        <ScrollTo text="WHO AM I ?" href="about" />
      </div>
      <div className="w-full py-8 md:py-14">
        <Image
          src="/jeebee.webp"
          alt="JeeBee Logo"
          className="ml-auto"
          width={60}
          height={60}
          priority
        />
      </div>
      <div className="absolute bottom-10 md:bottom-20 right-4 md:right-20 flex w-full flex-col items-end">
        {homeTitle.map((word, index) => {
          return (
            <h2 key={word} className={`overflow-hidden`}>
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    y: "150%",
                  },
                  animate: {
                    y: "10%",
                  },
                }}
                transition={{
                  duration: 1,
                  ease: [0.6, -0.05, 0.01, 0.9],
                  delay: (index + 1) * 0.3,
                  staggerChildren: 2,
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl title"
              >
                {word}
              </motion.div>
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
