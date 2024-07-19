"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { phpArray } from "@/app/utils/constant";
import RightArrow from "../../webDevelopment/svgIcon/RightArrow";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const PhpSectionOne = () => {
  const [subMenu, setSubMenu] = useState(false);
  const showSubmenu = (e) => {
    if (e.title === "Web Development") {
      setSubMenu(true);
    } else {
      setSubMenu(false);
    }
  };
  const leaveSubmenu = () => {
    setSubMenu(false);
  };
  const NavList = [
    {
      id: 1,
      title: "Web Development",
      path: "/services/webDevelopment",
      icon: <RightArrow />,
      newTab: false,
      submenu: [
        {
          id: 11,
          title: "MEAN Development",
          path: "/mean",
          icon: <RightArrow />,
          newTab: false,
        },
        {
          id: 12,
          title: "MERN Development",
          path: "/mern",
          icon: <RightArrow />,
          newTab: false,
        },
        {
          id: 13,
          title: "PHP",
          path: "/php",
          icon: <RightArrow />,
          newTab: false,
        },
      ],
    },
    {
      id: 2,
      title: "UI/UX Designing",
      path: "/services/ui-ux-designing",
      icon: <RightArrow />,
      newTab: false,
    },
    {
      id: 3,
      title: "Mobile App Development",
      path: "/services/mobile-application",
      icon: <RightArrow />,
      newTab: false,
    },
    {
      id: 4,
      title: "Degital Marketing",
      path: "/services/digital-marketing",
      icon: <RightArrow />,
      newTab: false,
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
        <div className=" border-body-color/[.15]  dark:border-white/[.15] ">
          <div className=" flex flex-wrap">
            <div className=" w-full pr-4 lg:w-1/3">
              <div className="relative mx-auto mb-5 aspect-[25/24] max-w-[470px]  lg:mr-0">
                <div className=" bg-[#f7f7f9]">
                  <ul className="block p-3 ">
                    <SectionTitle titleData="Services" mb="0px" />
                    {NavList.map((value, index) => (
                      <>
                        <div
                          key={value.id}
                          className="group flex items-center justify-between  p-3 hover:cursor-pointer hover:bg-white"
                          onMouseEnter={(e) => showSubmenu(value)}
                          onMouseLeave={(e) => leaveSubmenu()}
                        >
                          <Link href={value.path}>{value.title}</Link>
                          <div className="hidden text-green-500 group-hover:block">
                            {value.icon}
                          </div>
                        </div>
                        {value?.submenu?.map((curr, index) => (
                          <>
                            {subMenu ? (
                              <div
                                onMouseEnter={() => setSubMenu(true)}
                                key={curr.id}
                                className="group flex items-center justify-between  p-3 hover:cursor-pointer hover:bg-white"
                              >
                                <Link href={curr.path}>{curr.title}</Link>
                                <div className="hidden text-green-500 group-hover:block">
                                  {curr.icon}
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </>
                        ))}
                      </>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative mx-auto aspect-[25/24] max-w-[470px] lg:mr-0">
                <Image
                  src="/imagesBrains/backgrounds/service-details-need-help-bg.jpg"
                  alt="about-image"
                  fill
                  className="bg-blend-luminosity!h-auto  mx-auto max-w-full bg-slate-500 drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/imagesBrains/backgrounds/service-details-need-help-bg.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden !h-auto max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
                <div className="absolute left-20 top-[8%] h-auto w-[65%] items-center justify-center p-10   text-center text-xl font-semibold text-white  lg:top-[8%]">
                  <div>Easy solutions to your tech problem</div>
                  <div className="mt-4 text-sm">Have any question?</div>
                  <div className=" flex justify-center text-sm  ">
                    <span>
                      <Link
                        href="/about"
                        className="relative block aspect-[37/22] w-full hover:cursor-pointer hover:text-green-600"
                      >
                        Free +91-9168117671
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center bg-green-700 p-4 text-base font-semibold text-white hover:cursor-pointer hover:bg-slate-800 hover:font-bold dark:mt-12">
                <div>Contact Us</div>
              </div>
            </div>

            <div className="w-full pl-4 pr-0 lg:w-[66%]">
              <div className="relative mx-auto mb-6 aspect-[16/9]  lg:mr-0">
                <Image
                  src="/imagesBrains/services/service-details-img-4.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto  max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/imagesBrains/services/service-details-img-4.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden !h-auto max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
              <div className="mx-[-12px] flex flex-wrap">
                {phpArray.map((curr, index) => (
                  <div
                    key={index}
                    className="w-full max-w-full px-3 sm:w-full lg:w-full xl:w-full"
                  >
                    <SectionTitle
                      title={curr.title}
                      paragraph={curr.paragraph}
                      mb="44px"
                      width="100%"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhpSectionOne;
