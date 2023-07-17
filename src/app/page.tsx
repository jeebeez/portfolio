"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import AnimatedCursor from "react-animated-cursor";
import { AnimatePresence, motion } from "framer-motion";

// const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
//   ssr: false,
// });

const Home = () => {
 

  const ContactCard = (
    <>
      <div
        className={
          "flex items-center justify-center font-extrabold flex-1 h-full bg-[#f74214] border-[#d9cebe] border text-[#d9cebe]  hover:text-[#f74214] hover:bg-[#d7d7d7] transition-all hover:flex-[15%] duration-500 ease-in-out"
        }
      >
        <div className="absolute">LINKEDIN</div>
      </div>
    </>
  );

  const title = (content: string[]) => {
    return (
      <>
        {content.map((letter, index) => {
          return (
            <h2 key={letter} className="overflow-hidden">
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    y: "200%",
                  },
                  animate: {
                    y: "0%",
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.9],
                  delay: (index + 1) * 0.2,
                }}
                className="text"
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
    <main className="flex min-h-screen bg-gradient-to-r text-[#1e1e1e] from-[#d9d9d9] to-[#d3d3d3] flex-col items-center justify-between p-24">
      <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={70}
        innerScale={1}
        outerScale={2}
        outerAlpha={1}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
      />
      <div className="absolute top-10 left-10 flex gap-2 items-center ">
        <div className="flex duration-300 transition ease-in-out hover:rotate-180">
          <div className="w-4 h-8 rounded-tl-full border-2 rounded-bl-full bg-slate-100"></div>
          <div className="w-4 h-8 rounded-tr-full rounded-br-full bg-gray-400"></div>
        </div>
        <span>Invert Colors</span>
      </div>
      {title(["Gaurav", "Bhatt", "Portfolio", "MMXXIII"])}
      <div className="flex flex-col group gap-2">
        <div className="group flex gap-2">
          <div className="">arrow</div>
          <div>Project Name</div>
        </div>

        <h2 className="overflow-hidden">
          <div className="transition-all ease-in-out -translate-y-[100%] duration-700  group-hover:opacity-100 group-hover:translate-y-0 opacity-0">
            NextJS, Firebase
          </div>
        </h2>
      </div>
      <div className="flex h-16 items-center -rotate-90 group">
        <div
          className={
            " items-center justify-center font-extrabold flex-1 h-full bg-[#f74214]   w-20 "
          }
        />
        <div className="ml-2  text-[#f74214] flex transition-all duration-500 ease-in-out  group-hover:flex-[50%] ">
          LINKEDIN
        </div>
      </div>
      <div className="w-full h-52 group max-w-full flex gap-8">
        {ContactCard}
        {ContactCard}
        {ContactCard}
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
