import { CaseStudiesMocks } from "@/mocks/caseStudiesMock";
import Image from "next/image";
import { useState } from "react";

interface EntryProps {
  id: string;
  content: string;
  title: string;
}
const OurWorking = () => {
  const caseStudies = CaseStudiesMocks;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleShow = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderItem = (entry: EntryProps, index: number) => {
    const isShown = activeIndex === index;
    const formattedIndex = String(index + 1).padStart(2, "0");

    return (
      <div
        key={index}
        className={`${
          !isShown ? "bg-positivusGray" : "bg-positivusGreen"
        } px-14 py-10 rounded-[45px] flex flex-col gap-7 transition-all duration-300  border-2 border-black shadow-lg shadow-black`}
      >
        <div className="flex justify-between">
          <div className="flex gap-6 items-center">
            <p className="text-black font-bold text-md lg:text-6xl">
              {formattedIndex}
            </p>
            <p className="text-black font-medium">{entry.title}</p>
          </div>
          <button
            onClick={() => toggleShow(index)}
            className="flex items-center"
          >
            {isShown ? (
              <div className="w-10 h-10 lg:w-14 lg:h-14">
                <Image
                  src="icons/Minus.svg"
                  alt="Minus"
                  width={58}
                  height={58}
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="w-10 h-10 lg:w-14 lg:h-14">
                <Image
                  src="icons/Plus.svg"
                  alt="Plus"
                  width={58}
                  height={58}
                  className="w-full h-full"
                />
              </div>
            )}
          </button>
        </div>
        <div
          className={`bg-black my-4 h-[2px] w-full ${
            !isShown ? "hidden" : "block"
          } transition-all duration-300`}
        />
        <p className={`text-black ${!isShown ? "hidden" : "block"}`}>
          {entry.content}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="md:gap-10 flex flex-col md:flex-row items-center">
        <h2 className="bg-positivusGreen text-black p-2 flex rounded items-center w-max">
          Our Working Process
        </h2>
        <p className="max-w-[580px] text-black text-center flex md:text-start my-5 md:my-0 px-5 md:px-0">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      {caseStudies.map((entry: EntryProps, index: number) =>
        renderItem(entry, index)
      )}
    </div>
  );
};

export default OurWorking;
