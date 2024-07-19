import DevelopmentCarousel from "./DevelopmentProcessCrausal";
import ProcessDevelopment from "./Process";

const OurDevelopmentProcess = () => {
  return (
    <section id="contact" className="overflow-hidden">
      <div className="container ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12 xl:w-[35%]">
            <ProcessDevelopment />
          </div>
          <div className="flex w-[90%] items-center px-6 lg:w-7/12 xl:w-[65%]">
            <DevelopmentCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDevelopmentProcess;
