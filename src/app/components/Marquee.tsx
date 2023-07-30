import { v4 } from "uuid";

const Marquee = ({
  text,
  marginX,
  direction = "linear",
  className,
}: {
  text: string;
  marginX?: string;
  direction?: "linear" | "reverse";
  className?: string;
}) => {
  const marqueeArray = (
    <>
      {new Array(6).fill(null).map((index) => {
        return (
          <span key={v4()} className={` ${marginX ? marginX : "mx-4"}`}>
            {text}
          </span>
        );
      })}
    </>
  );

  return (
    <div className={`relative text-6xl  flex ${className}`}>
      <div
        className={`py-2 ${
          direction === "linear" ? "animate-marquee" : "animate-reverse-marquee"
        } whitespace-nowrap`}
      >
        {marqueeArray}
      </div>

      <div
        className={`absolute top-0 py-2 ${
          direction === "linear"
            ? "animate-marquee2"
            : "animate-reverse-marquee2"
        }  ${direction} whitespace-nowrap`}
      >
        {marqueeArray}
      </div>
    </div>
  );
};

export default Marquee;
