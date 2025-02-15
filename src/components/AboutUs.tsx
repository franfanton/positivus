import Button from "./Button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex justify-between px-8 sm:p-0 gap-24" id="aboutUs">
      <div className="text-black justify-around flex flex-col">
        <h1>Navigating the digital landscape for success</h1>
        <Image
          src="/Illustration.svg"
          alt="Logo"
          width={600}
          height={515}
          className="sm:hidden"
        />
        <p className="md:leading-[28px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
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
        src="/Illustration.svg"
        alt="Logo"
        width={600}
        height={515}
        className="hidden md:block"
      />
    </div>
  );
};

export default AboutUs;
