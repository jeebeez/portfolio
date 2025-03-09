import { workInfo } from "../data/consts";
import ScrollTo from "./ScrollTo";
import WorkTitle from "./WorkTitle";

const Work = () => {
  return (
    <div className="h-screen px-4 md:px-14 w-full relative" id="work">
      <div className="w-full flex flex-col gap-2 justify-center h-full">
        {workInfo.map((card) => (
          <WorkTitle key={card.title} {...card} />
        ))}
      </div>
      <div className="z-50 absolute -rotate-90 bottom-32 left-0 hidden md:block">
        <ScrollTo text="LETS TALK ?" href="footer" />
      </div>
    </div>
  );
};

export default Work;
