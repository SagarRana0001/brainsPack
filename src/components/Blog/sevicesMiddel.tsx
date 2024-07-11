import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import NutshellData from "./nutshell";
import NutshellBlog from "./nutshellData";

const ServicesSectionMiddel = () => {
  return (
    <section className="py-7">
      <div className="container ">
        <div className=" bg-hero relative  flex flex-wrap items-center bg-[#1b1525] bg-[url('/imagesBrains/shapes/service-bg-1-1.png')] bg-cover bg-center bg-no-repeat ">
          <div className="absolute  bottom-8 right-[45rem] h-[606px] w-[631px] rounded-[50%] border-2 bg-white opacity-[0.08] mix-blend-luminosity"></div>
          <div className="absolute  bottom-[-33px] right-[34rem] h-[860px] w-[831px] rounded-[50%] border-2 bg-white opacity-[0.03] mix-blend-luminosity"></div>
          <div className="w-full  px-4  pt-12 lg:w-full">
            <div className="flex  items-center text-green-400 ">
              <div className="px-3">
                <div className="flex">
                  <span className="text-4xl">
                    <img
                      className="h-4"
                      src="/imagesBrains/shapes/section-title-shape.png"
                    />
                  </span>
                  <span className="text-md ml-1 font-bold ">
                    What we’re offering
                  </span>
                </div>

                <SectionTitle
                  titleServicesData="Brainspack Services in a Nutshell:"
                  mb="14px"
                />
              </div>
              <div className="pt-12">
                <SectionTitle paragraph="we specialize in a wide array of technologies, ensuring that our clients benefit from the latest advancements in the digital landscape. Our technical proficiency includes:" />
              </div>
            </div>

            <div className="text-md  flex justify-center pb-10 font-mono font-bold leading-8 text-white">
              {NutshellData?.map((blog) => (
                <div
                  key={blog.id}
                  className="!w-[33%] px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <NutshellBlog blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesSectionMiddel;
