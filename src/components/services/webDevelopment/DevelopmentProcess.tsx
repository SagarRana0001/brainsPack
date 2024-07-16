import DevelopmentCarousel from "./DevelopmentProcessCrausal";
import ProcessDevelopment from "./Process";

const OurDevelopmentProcess = () => {
  return (
    <section id="contact" className="overflow-hidden md:pt-20 lg:pt-28">
      <div className="container ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12 xl:w-[35%]">
            <ProcessDevelopment />
          </div>
          <div className="w-[90%] px-6 lg:w-7/12 xl:w-[65%]">
            <DevelopmentCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDevelopmentProcess;
