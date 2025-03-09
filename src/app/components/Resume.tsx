import { useEffect, useState } from "react";

const DownloadResume = () => {
  const url =
    "https://portfolio2023.s3.amazonaws.com/Gaurav-Bhatt-Software-Engineer.pdf";

  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={url}
      className="absolute z-50 animate-spin-slow top-12 left-12"
      target="__blank"
    >
      <svg
        width={100}
        height={100}
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        className=" scale-75 text-black transition duration-50000 "
      >
        <path
          id="NBStudio"
          fill="none"
          stroke="none"
          d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"
        />
        <text
          fontSize="50"
          fill="#000000"
          letterSpacing="10"
          fontFamily="sans-serif"
          fontWeight="bold"
        >
          <textPath href="#NBStudio" startOffset="5">
            Resume   •  {currentYear}  •    
            {/* Click here  •  Click here  •   */}
          </textPath>
        </text>
      </svg>
    </a>
  );
};
export default DownloadResume;
