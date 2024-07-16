"use client";

import { useTheme } from "next-themes";
import PlainingIcon from "./svgIcon/Planing";
import Development from "./svgIcon/Development";
import Maintenence from "./svgIcon/Maintenence";
import QaLaunch from "./svgIcon/QaLaunch";
import Design from "./svgIcon/Design";
const DevelopmentProcess = [
  {
    name: "Planning",
    icon: <PlainingIcon />,
  },
  {
    name: "Design",
    icon: <Design />,
  },
  {
    name: "Development",
    icon: <Development />,
  },
  {
    name: "Q/A launch",
    icon: <QaLaunch />,
  },
  {
    name: "Maintenance",
    icon: <Maintenence />,
  },
];
const ProcessDevelopment = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 items-center rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark ">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Our Development Process
      </h3>

      <div className="pl-12 leading-5">
        {DevelopmentProcess.map((value, index) => (
          <div key={index} className="relative mb-12 flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-[50%] border-transparent bg-green-400 text-white hover:cursor-pointer hover:bg-green-400 hover:text-[#ffff]">
              {value.icon}
            </div>
            {value.name !== "Maintenance" && (
              <div className="absolute bottom-[-25px] left-[7px] w-[18%] rotate-90 rounded-2xl border-[1px] border-solid border-green-400"></div>
            )}
            <div className=" flex flex-col">
              <p className="dark:text-whiter text-[17px] font-bold leading-tight text-black">
                {value.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProcessDevelopment;
