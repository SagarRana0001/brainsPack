import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

const AboutSectionTwo = () => {
  return (
    <section className="py-7">
      <div className="container">
        <div className=" bg-hero flex  flex-wrap items-center bg-slate-900 bg-[url('/imagesBrains/backgrounds/business-from-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat bg-blend-luminosity">
          <div className="w-full  px-4  lg:w-full">
            <div className="flex justify-center p-9 pb-0 text-5xl text-white">
              Brainspack
            </div>
            <div className="text-md flex justify-center p-7 pb-10 font-mono font-bold leading-8 text-white">
              Brainspack is a globally acknowledged brand specializing in the
              creation of advanced web and mobile applications. Through
              meticulous research, a design thinking-driven methodology, and
              unparalleled expertise in strategy, consulting, technology, and
              operations, we forge an innovative pathway to assist enterprises.
              Assisting businesses in embracing emerging technologies to stay
              ahead of evolving trends. The success of the organization is
              attributed to its capacity for delivering steadfast leadership.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" bg-hero  flex flex-wrap items-center  bg-gray-200 bg-[url('/imagesBrains/backgrounds/funfact-bg-1-1.png')]  bg-cover bg-fixed bg-center bg-no-repeat pb-20 pt-10  bg-blend-luminosity ">
          <div className="flex w-full flex-wrap items-center justify-between  px-8  lg:w-full">
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold"> Icon</h1>
              <AnimatedCounter endValue={3} duration={500} />
              <h4 className="text-md font-bold">Years of experience</h4>
            </div>
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold"> Icon</h1>
              <AnimatedCounter endValue={700} duration={5000} />
              <h4 className="text-md font-bold">IT problems solved</h4>
            </div>
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold"> Icon</h1>
              <AnimatedCounter endValue={11} duration={500} />
              <h4 className="text-md font-bold">Satisfied clients</h4>
            </div>
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold"> Icon</h1>
              <AnimatedCounter endValue={15} duration={500} />
              <h4 className="text-md font-bold">Pro team members</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
