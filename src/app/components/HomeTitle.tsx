import { homeTitle } from "../data/consts";
import { motion } from "framer-motion";

const HomeTitle = () => {
  return (
    <>
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
              className={`text-6xl md:text-8xl lg:text-9xl title`}
            >
              {word}
            </motion.div>
          </h2>
        );
      })}
    </>
  );
};

export default HomeTitle;
