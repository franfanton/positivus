import { ServicesMocks } from "@/mocks/servicesMocks";
import Image from "next/image";
import Button from "../Button";

interface EntryProps {
  id: string;
  title: string;
  icon: string;
  styleCard: string;
  styleTitle: string;
  arrow: string;
  styleIconText: string;
}

const Services = () => {
  const servicesData = ServicesMocks;

  const renderItem = (entry: EntryProps, index: number) => {
    return (
      <div
        key={entry.id}
        className={`w-full max-w-[600px] min-h-[300px] flex flex-col lg:flex-row p-6 mb-10 border-2 border-black rounded-xl shadow-lg shadow-black justify-between ${
          entry.styleCard
        } ${index % 2 === 1 ? "lg:justify-self-end" : ""}`}
      >
        <div className="flex flex-col justify-between flex-1 lg:flex-initial">
          <h3
            className={`rounded w-max lg:max-w-56 p-1 ${entry.styleTitle} text-xl lg:text-2xl`}
          >
            {entry.title}
          </h3>
          <div className="flex items-end lg:items-center justify-between lg:justify-normal lg:gap-2">
            <Image src={entry.arrow} alt="Arrow" width={41} height={41} />
            <span className={`hidden lg:block text-sm ${entry.styleIconText}`}>
              Learn More
            </span>
            <div className="w-max-[150px] h-max-[80px] lg:hidden">
              <Image
                src={entry.icon}
                alt="Search Engine"
                width={10}
                height={10}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:self-center lg:max-w-[210px] lg:max-h-[210px]">
          <Image
            src={entry.icon}
            alt="Search Engine"
            width={10}
            height={10}
            className="w-full h-full"
          />
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="md:gap-10 py-28 flex flex-col md:flex-row items-center">
        <h2 className="bg-positivusGreen text-black p-2 flex rounded items-center w-max">
          Services
        </h2>
        <p className="max-w-[580px] text-black text-center flex md:text-start my-5 md:my-0 px-5 md:px-0">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="mx-5 md:mx-0 md:grid md:grid-cols-2">
        {servicesData.map((entry: EntryProps, index: number) => {
          return renderItem(entry, index);
        })}
      </div>
      <div className="relative mx-5 md:mx-0 bg-positivusGray flex flex-col items-center p-14 rounded-[45px] md:text-left md:flex-row md:justify-between mt-16">
        <div className="absolute right-0 z-10 hidden lg:block">
          <Image
            src="services/thingsHappen.svg"
            alt="things Happen"
            width={359}
            height={350}
            className="w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-6 max-w-[500px]">
          <h3 className="text-black">Let’s make things happen</h3>
          <p className="text-black">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button
            title="Get your free proposal"
            handleButton={() => console.log("bookaConsultation")}
            styleButton="bg-black py-5 px-9 w-auto sm:self-start"
            styleTitle="text-md sm:text-xl text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
