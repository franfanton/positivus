import Image from "next/image";

const Card = ({ text, onClick }: { text: string; onClick: () => void }) => (
  <div className="px-14 flex flex-col justify-between gap-y-5">
    <p>{text}</p>
    <button className="flex gap-4" onClick={onClick}>
      <span className="text-positivusGreen lg:text-lg font-normal">
        Learn More
      </span>
      <Image src="/arrow.svg" alt="Arrow" width={20} height={20} />
    </button>
  </div>
);

const CaseStudies = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="md:gap-10  flex flex-col md:flex-row items-center">
        <h2 className="bg-positivusGreen text-black p-2 flex rounded items-center w-max">
          Case Studies
        </h2>
        <p className="max-w-[580px] text-black text-center flex md:text-start my-5 md:my-0 px-5 md:px-0">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className=" bg-positivusDark rounded-[45px] py-16 hidden lg:flex">
        <Card
          text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
          onClick={() => {
            console.log("Learn More");
          }}
        />
        <div className="w-px bg-white mx-4 block" />
        <Card
          text="For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic."
          onClick={() => {
            console.log("Learn More");
          }}
        />
        <div className="w-px bg-white mx-4 block" />
        <Card
          text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
          onClick={() => {
            console.log("Learn More");
          }}
        />
      </div>
      {/* Mobile */}
      <div className="flex overflow-x-auto md:overflow-visible gap-4 lg:hidden">
        <div className="flex-shrink-0 w-[calc(100%-1rem)] md:w-auto bg-positivusDark rounded-[45px] py-16">
          <Card
            text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
            onClick={() => {
              console.log("Learn More");
            }}
          />
        </div>
        <div className="flex-shrink-0 w-[calc(100%-1rem)] md:w-auto bg-positivusDark rounded-[45px] py-16">
          <Card
            text="For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic."
            onClick={() => {
              console.log("Learn More");
            }}
          />
        </div>
        <div className="flex-shrink-0 w-[calc(100%-1rem)] md:w-auto bg-positivusDark rounded-[45px] py-16">
          <Card
            text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
            onClick={() => {
              console.log("Learn More");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default CaseStudies;
