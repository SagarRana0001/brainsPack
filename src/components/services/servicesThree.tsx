import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const ServicesSectionThree = () => {
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
        <div className=" border-body-color/[.15]  dark:border-white/[.15] ">
          <div className=" flex flex-wrap">
            <div className="relative w-full pr-4 lg:w-1/3">
              <div className=" mx-auto aspect-[25/24] max-w-[470px] lg:mr-0">
                <Image
                  src="/imagesBrains/resources/tech-services-img-1.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto !h-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/imagesBrains/resources/tech-services-img-1.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden !h-auto max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>

              <div className="absolute left-64 top-[8%] h-auto  w-[65%] items-center justify-center bg-green-400 p-10 text-xl font-semibold  text-white">
                <div>
                  Tech solutions bringing your business ideas to digital life
                </div>
                <div className="mt-4 flex text-sm  hover:cursor-pointer hover:text-green-600">
                  <span>
                    <Link
                      href="/about"
                      className="relative block aspect-[37/22] w-full"
                    >
                      Learn More
                    </Link>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full px-4 pl-[13rem] lg:w-[66%]">
              <div className="flex  items-center text-green-400 ">
                <span className="text-4xl">
                  <img
                    className="h-4"
                    src="/imagesBrains/shapes/section-title-shape.png"
                  />
                </span>
                <span className="text-md ml-1 font-bold ">Stay protected</span>
              </div>
              <SectionTitle
                title="Tech services for your business ideas"
                paragraph="Unlock tailored excellence with brainspack tech services"
                mb="2rem"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px]  flex-wrap">
                  <div className="flex items-center align-middle">
                    <div
                      className="relative mt-5 flex h-[50px] w-[50px] items-center
                          justify-center rounded-[50%] !bg-green-600 hover:cursor-pointer hover:!bg-green-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div className="w-full px-7 sm:w-1/2 lg:w-full xl:w-full">
                      <SectionTitle
                        techTitle="Web development"
                        techParagraph="Shaping Digital Worlds Through Code and Creativity."
                        mb="0px"
                      />
                    </div>
                  </div>
                  <div className="flex items-center align-middle">
                    <div
                      className="relative mt-5 flex h-[50px] w-[50px] items-center
                          justify-center rounded-[50%] !bg-green-600 text-base hover:cursor-pointer hover:!bg-green-400 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div className="w-full px-7 sm:w-1/2 lg:w-full xl:w-full">
                      <SectionTitle
                        techTitle="UI/UX designing"
                        techParagraph="Weaving Aesthetic Brilliance into Digital Experiences."
                        mb="0px"
                      />
                    </div>
                  </div>
                  <div className="flex items-center align-middle">
                    <div
                      className="relative mt-5 flex h-[50px] w-[50px] items-center justify-center
                          rounded-[50%] !bg-green-600 hover:cursor-pointer hover:!bg-green-400 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div className="w-full px-7 sm:w-1/2 lg:w-full xl:w-full">
                      <SectionTitle
                        techTitle="Mobile Application"
                        techParagraph="Unleashing Innovation in the Palm of Your Hand."
                        mb="0px"
                      />
                    </div>
                  </div>
                  <div className="flex items-center align-middle">
                    <div
                      className="relative mt-5 flex h-[50px] w-[50px] items-center justify-center
                          rounded-[50%] !bg-green-600 hover:cursor-pointer hover:!bg-green-400 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div className="w-full px-7 sm:w-1/2 lg:w-full xl:w-full">
                      <SectionTitle
                        techTitle="Digital Marketing"
                        techParagraph="Strategically Elevating Online Presence for Impactful Results."
                        mb="0px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionThree;
