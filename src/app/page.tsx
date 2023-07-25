"use client";

import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";
import { AnimatePresence, motion } from "framer-motion";
import { contactCardInfo, workInfo } from "./data/consts";
import ContactCard from "./components/ContactCard";
import Work from "./components/Work";
import ScrollTo from "./components/ScrollTo";

// const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
//   ssr: false,
// });

const Home = () => {
  const title = (content: string[]) => {
    return (
      <>
        {content.map((letter, index) => {
          return (
            <h2 key={letter} className={`overflow-hidden`}>
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
                }}
                className={`text-9xl title`}
              >
                {letter}
              </motion.div>
            </h2>
          );
        })}
      </>
    );
  };

  return (
    <main className="flex font-monument text-zinc-600 bg-gradient-to-r from-[#d9d9d9] to-[#d3d3d3] flex-col items-center justify-between">
      <AnimatedCursor
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        outerStyle={{
          mixBlendMode: "exclusion",
          border: "3px",
          //   opacity: 0.9,
          backgroundColor: "#ffffff",
          borderBlock: "3px",
          borderColor: "#000fff",
          //   backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        innerStyle={{
          backgroundColor: "#ffffff",
        }}
      />
      <div className="min-h-screen w-full px-14 relative" id="home">
        <button className="absolute z-50 animate-spin-slow top-14 left-14">
          <Image
            src="/clickHere.svg"
            alt="Vercel Logo"
            className=""
            width={100}
            height={100}
            priority
          />
        </button>

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

        <div className="absolute bottom-14 right-14 flex w-full mt-16 flex-col items-end">
          {title(["Gaurav", "Bhatt", "Portfolio", "MMXXIII"])}
        </div>
      </div>
      {/* <div className="min-h-screen w-full relative"> */}

      {/* <p className="absolute top-[20%] left-[20%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          <br />
          voluptatum, quibusdam, quia, quos voluptates voluptate quod
          <br />
          voluptatibus quas quibusdam, quia, quos voluptates voluptate quod
          <br />
          voluptatibus quas quibusdam, quia, quos voluptates voluptate quod
        </p>
        <p className="white-text md:max-w-[40%] absolute bottom-[40%] right-[20%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          <br />
          voluptatum, quibusdam, quia, quos voluptates voluptate quod
          <br />
          voluptatibus quas quibusdam, quia, quos voluptates voluptate quod
          <br />
          voluptatibus quas quibusdam, quia, quos voluptates voluptate quod
        </p>
        <div className="flex items-center absolute bottom-[10%] left-[10%] justify-center">
          <Image
            src="/photo.jpg"
            alt="That's me"
            className=""
            width={300}
            height={500}
            priority
          />
        </div>
      </div> */}
      <div className="min-h-screen relative px-14 w-full flex" id="about">
        <div className="my-auto mt-40">
          <p>
            I stand at the intersection of making memorable web experiences and
            shipping them fast. Being highly self-critical, I am also very
            critical about my work. I deliberate on why I am doing something and
            what value it will add to the end user.
          </p>
          <p className="mt-16">
            I have an eye for product, especially product-gaps which could help
            enhance their functionality and user engagement. I like to make
            jokes whenever possible and am very easy to talk to.
          </p>
        </div>
        <div
          data-scroll-selection
          className="min-w-[50%] flex items-center justify-center"
        >
          <Image
            src="/photo.jpg"
            alt="That's me"
            data-scroll-speed={"6"}
            className=""
            width={300}
            height={500}
            priority
          />
        </div>

        <div className="z-50 absolute -rotate-90 bottom-32 left-0">
          <ScrollTo text="WHAT I DO ?" href="work" />
        </div>
      </div>

      <div className="min-h-screen px-14 w-full relative" id="work">
        <div className="w-full my-20 flex flex-col gap-4">
          {workInfo.map((card) => (
            <Work key={card.title} {...card} />
          ))}
        </div>
        <div className="z-50 absolute -rotate-90 bottom-32 left-0">
          <ScrollTo text="LETS TALK ?" href="footer" />
        </div>
      </div>
      <div
        className="h-[75vh] relative w-full px-14 text-end bg-black"
        id="footer"
      >
        <p className="mt-20 text-6xl text-white ">want to connect ?</p>
        <div className="mt-20 max-w-full flex  gap-8">
          {contactCardInfo.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </div>
        <span className="text-xs text-white absolute bottom-14 right-14 z-50">
          Made with ❤️ in Pune
        </span>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ExpandableDiv />
        <ExpandableDiv />
        <ExpandableDiv />
      </div> */}
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative  "
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
};

export default Home;
