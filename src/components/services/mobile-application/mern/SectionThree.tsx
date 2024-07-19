import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Expertise from "../../webDevelopment/svgIcon/Expertise";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const MernSectionThree = () => {
  const ExpertiseData = [
    {
      name: "Technology Stack",
      icon: <Expertise />,
    },
    {
      name: "Quality Assurance",
      icon: <Expertise />,
    },
    {
      name: "Client Support",
      icon: <Expertise />,
    },
    {
      name: "Cost and Timeline",
      icon: <Expertise />,
    },
    {
      name: "Innovation and Adaptability",
      icon: <Expertise />,
    },
  ];
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15]  dark:border-white/[.15] ">
          <div className="-mx-4 flex flex-wrap ">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative  aspect-[22/16] max-w-[600px] lg:mr-0">
                <Image
                  src="/imagesBrains/services/service-details-benefits-img.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto h-[90%!important] max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/imagesBrains/services/service-details-benefits-img.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto  hidden h-[90%!important] max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <SectionTitle
                titleData="why choose us ?"
                mb="0px"
                servicesBottom="mb-0"
              />
              <div className="mb-5 text-green-400 ">
                <span className="text-md ml-1 font-bold ">
                  We excel through expertise, innovation, and client-focused
                  success.
                </span>
              </div>

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="">
                  {ExpertiseData.map((value, index) => (
                    <div
                      key={index}
                      className="relative mb-3 flex items-center gap-3"
                    >
                      <div className="flex h-4 w-[3%] items-center justify-center rounded-[50%] border border-green-400 text-green-400  ">
                        {value.icon}
                      </div>

                      <div className=" flex flex-col">
                        <p className="text-[14px] leading-tight text-black dark:text-white">
                          {value.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MernSectionThree;