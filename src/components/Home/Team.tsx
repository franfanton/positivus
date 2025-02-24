import { TeamMocks } from "@/mocks/teamMocks";
import Image from "next/image";
import Button from "../Button";

interface EntryProps {
  id: string;
  name: string;
  role: string;
  description: string;
  img: string;
}
const Team = () => {
  const team = TeamMocks;

  const renderItem = (entry: EntryProps, index: number) => {
    return (
      <div
        key={index}
        className="border-2 border-black shadow-lg shadow-black px-9 py-10 rounded-[45px] gap gap-7 flex flex-col"
      >
        <div className="flex gap gap-5">
          <div className="w-24 h-24 lg:w-24 lg:h-24">
            <Image
              src={entry.img}
              alt="User"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <div className=" text-black flex flex-col justify-end">
            <h4>{entry.name}</h4>
            <p>{entry.role}</p>
          </div>
          <div className="w-10 h-10 lg:w-9 lg:h-9">
            <Image
              src="linkedIn.svg"
              alt="Linked In"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="bg-black my-4 h-[2px] w-full" />
        <p className="text-black">{entry.description}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="md:gap-10 flex flex-col md:flex-row items-center">
          <h2 className="bg-positivusGreen text-black p-2 flex rounded items-center w-max">
            Team
          </h2>
          <p className="max-w-[580px] text-black text-center flex md:text-start my-5 md:my-0 px-5 md:px-0">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap gap-10  ">
          {team.map((entry: EntryProps, index: number) =>
            renderItem(entry, index)
          )}
        </div>
        <div className="lg:flex lg:justify-end">
          <Button
            title="See all team"
            handleButton={() => console.log("See all team")}
            styleButton="w-full lg:w-auto bg-black py-5 px-9"
            styleTitle="text-md sm:text-xl text-white flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
