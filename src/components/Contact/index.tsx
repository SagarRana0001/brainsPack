import Image from "next/image";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden md:pt-20 lg:pt-28">
      <div className="container ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-[90%] px-6 lg:w-7/12 xl:w-6/12">
            <div
              className="bg-hero mb-12 flex h-[500px] w-full flex-wrap items-center rounded-sm bg-white bg-[url('/imagesBrains/resources/contact-details-img.jpg')] bg-cover bg-no-repeat   shadow-three dark:bg-gray-dark "
              data-wow-delay=".15s
              "
            ></div>
          </div>
          <div className="w-full px-4 lg:w-6/12 xl:w-6/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
