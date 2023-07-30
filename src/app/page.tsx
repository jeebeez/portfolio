"use client";

import AnimatedCursor from "react-animated-cursor";
import About from "./components/About";
import { useEffect, useState } from "react";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Home from "./components/Home";
import Footer from "./components/Footer";

const Portfolio = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <main className="flex overflow-hidden font-monument text-zinc-600 bg-gradient-to-r from-[#d9d9d9] to-[#d3d3d3] flex-col items-center justify-between">
        {mounted ? (
          <AnimatedCursor
            innerSize={8}
            outerSize={50}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            outerStyle={{
              mixBlendMode: "exclusion",
              border: "3px",
              backgroundColor: "#ffffff",
              borderBlock: "3px",
              borderColor: "#000fff",
            }}
            innerStyle={{
              backgroundColor: "#ffffff",
            }}
          />
        ) : null}
        <Home />
        <div className="flex w-[100vw] gap-1  flex-col my-28  overflow-hidden">
          <Marquee
            text="WHO AM I?"
            className="bg-black text-white"
            direction="linear"
          />
          <Marquee
            text="WHO AM I?"
            className="bg-black text-white"
            direction="reverse"
          />
        </div>
        <About />
        <div className="flex w-[100vw]  flex-col my-28 gap-2 overflow-hidden">
          <Marquee
            text="WHAT I DO ?"
            className="bg-black text-white"
            direction="linear"
          />
          <Marquee
            text="WHAT I DO ?"
            className="bg-black text-white"
            direction="reverse"
          />
        </div>
        <Work />
        <Footer />
      </main>
    </div>
  );
};

export default Portfolio;
