import { workInfo } from "../data/consts";
import ScrollTo from "./ScrollTo";
import WorkTitle from "./WorkTitle";

const Work = () => {
  return (
    <div className="min-h-screen md:px-14 w-full relative" id="work">
      <div className="w-full my-16 flex flex-col gap-2">
        {workInfo.map((card) => (
          <WorkTitle key={card.title} {...card} />
        ))}
      </div>
      <div className="z-50 absolute -rotate-90 bottom-32 left-0">
        <ScrollTo text="LETS TALK ?" href="footer" />
      </div>
    </div>
  );
};

export default Work;
