import Link from "next/link";
import { ContactCardProps } from "./ContactCard";

const Work = ({ title, subTitle, url }: ContactCardProps) => {
  return (
    <Link href={url} target="_blank" className="inline-flex flex-col items-end ml-auto group">
      <div className="group items-center flex gap-1">
        <h2 className="overflow-hidden flex h-full py-2">
          <div className="transition-all text-7xl mr-4 ease-in-out translate-x-[30%] duration-500  group-hover:opacity-100 group-hover:translate-x-0 opacity-0">
            ↖︎
          </div>
        </h2>
        <div className="project text-8xl transition ease-in-out duration-300 hover:scale-x-[.98]">
          {title}
        </div>
      </div>
      <h2 className="overflow-hidden">
        <div className="transition-all font-monument text-xs ease-in-out -translate-y-[30%] duration-500  group-hover:opacity-100 group-hover:translate-y-0 opacity-0">
          {subTitle}
        </div>
      </h2>
    </Link>
  );
};

export default Work;
