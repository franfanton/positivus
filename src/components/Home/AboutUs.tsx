import Button from "../Button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="px-8 sm:p-0">
      <div className="flex justify-between gap-24">
        <div className="text-black justify-around flex flex-col">
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
        <Image
          src="/Ilustration.svg"
          alt="Logo"
          width={600}
          height={515}
          className="hidden md:block max-w-[600px] max-h-[515px]"
        />
      </div>
      <div className="grid grid-cols-3 mt-5 gap-10 sm:flex sm:justify-between">
        <Image
          src="/amazon.svg"
          alt="Amazon Logo"
          width={80}
          height={32}
          className="sm:w-[125px] sm:h-[48px] filter grayscale filter grayscale"
        />
        <Image
          src="/dribbble.svg"
          alt="Dribbble Logo"
          width={80}
          height={32}
          className="sm:w-[125px] sm:h-[48px] filter grayscale"
        />
        <Image
          src="/hubspot.svg"
          alt="Hubspot Logo"
          width={80}
          height={32}
          className="sm:w-[125px] sm:h-[48px] filter grayscale"
        />
        <Image
          src="/notion.svg"
          alt="Notion Logo"
          width={80}
          height={32}
          className="sm:w-[125px] sm:h-[48px] filter grayscale"
        />
        <Image
          src="/netflix.svg"
          alt="Netflix Logo"
          width={80}
          height={32}
          className="sm:w-[125px] sm:h-[48px] filter grayscale"
        />
        <Image
          src="/zoom.svg"
          alt="Zoom Logo"
          width={80}
          height={32}
          className="sm:w-[125px] sm:h-[48px] filter grayscale"
        />
      </div>
    </div>
  );
};

export default AboutUs;
