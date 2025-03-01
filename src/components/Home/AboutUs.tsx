import Button from "../Button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div className="flex justify-between gap-24">
        <div className="text-black justify-around flex flex-col lg:max-h-[480px] lg:max-w-[530px]">
          <h1>Navigating the digital landscape for success</h1>
          <Image
            src="/Ilustration.svg"
            alt="Logo"
            width={600}
            height={515}
            className="sm:hidden"
          />
          <p className="md:leading-[28px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button
            title="Book a consultation"
            handleButton={() => console.log("bookaConsultation")}
            styleButton="bg-black py-5 px-9 w-auto sm:self-start mt-8"
            styleTitle="text-md sm:text-xl text-white"
          />
        </div>
        <div className="w-[600px] h-[515px] hidden md:block">
          <Image
            src="/Ilustration.svg"
            alt="Linked In"
            width={600}
            height={515}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-5 gap-10 sm:flex sm:justify-between">
        <div className="w-max-[124px] h-max-[48px]">
          <Image
            src="/amazon.svg"
            alt="Amazon Logo"
            width={10}
            height={10}
            className="w-full h-full filter grayscale"
          />
        </div>
        <div className="w-max-[124px] h-max-[48px]">
          <Image
            src="/dribbble.svg"
            alt="Dribbble Logo"
            width={10}
            height={10}
            className="w-full h-full filter grayscale"
          />
        </div>
        <div className="w-max-[124px] h-max-[48px]">
          <Image
            src="/hubspot.svg"
            alt="Hubspot Logo"
            width={10}
            height={10}
            className="w-full h-full filter grayscale"
          />
        </div>
        <div className="w-max-[124px] h-max-[48px]">
          <Image
            src="/notion.svg"
            alt="Notion Logo"
            width={10}
            height={10}
            className="w-full h-full filter grayscale"
          />
        </div>
        <div className="w-max-[124px] h-max-[48px]">
          <Image
            src="/netflix.svg"
            alt="Netflix Logo"
            width={10}
            height={10}
            className="w-full h-full filter grayscale"
          />
        </div>
        <div className="w-max-[124px] h-max-[48px]">
          <Image
            src="/zoom.svg"
            alt="Zoom Logo"
            width={10}
            height={10}
            className="w-full h-full filter grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
