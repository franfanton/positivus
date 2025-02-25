import { TestimonialsMocks } from "@/mocks/testimonialsMocks";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CommentProps {
  id: string;
  text: string;
  name: string;
  position: string;
}

const Testimonials = () => {
  const comments = TestimonialsMocks;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderItem = (entry: CommentProps, index: number) => {
    return (
      <div key={index} className="max-w-[600px] w-full mx-4">
        <div className="relative p-10 border-2 border-positivusGreen rounded-[45px]">
          <p className="text-white">{entry.text}</p>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-[15px] border-t-positivusGreen border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent"></div>
        </div>
        <div className="flex flex-col items-center my-6 relative">
          <h4 className="text-positivusGreen relative z-10">{entry.name}</h4>
          <p className="text-white">{entry.position}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="md:gap-10 flex flex-col md:flex-row items-center">
        <h2 className="bg-positivusGreen text-black p-2 flex rounded items-center w-max">
          Testimonials
        </h2>
        <p className="max-w-[580px] text-black text-center flex md:text-start my-5 md:my-0 px-5 md:px-0">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="bg-black rounded-[45px] px-5 py-10">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
          customTransition="all 0.5s"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item flex justify-center"
          showDots={true}
        >
          {comments.map((comment: CommentProps, index: number) =>
            renderItem(comment, index)
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
