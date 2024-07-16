import { arrayFrontEnd } from "@/app/utils/constant";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const FrontEndSection = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="Front-end">
      <div className="container">
        <div className=" border-body-color/[.15]  dark:border-white/[.15] ">
          <div className="flex justify-center p-5  text-2xl">
            Front-end Development
          </div>
          <div className=" flex flex-wrap">
            {arrayFrontEnd.map((curr, ind) => (
              <>
                <div
                  key={ind}
                  className="flex w-full justify-center pr-4 lg:w-1/4"
                >
                  <div className="relative mb-5 aspect-[27/20] h-[125px] w-[125px] max-w-[150px]  lg:mr-0">
                    <Image
                      src={curr.img}
                      alt="about-image"
                      fill
                      className="rounded-2xl border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-1 w-full pl-24 pr-0 lg:w-[75%]">
                  <div className="mx-[-12px] mb-8 flex flex-wrap">
                    <div className="w-full max-w-full  bg-[#edececd1] px-5 py-4 sm:w-full lg:w-full xl:w-[90%]">
                      <SectionTitle
                        titleData={curr.titleData}
                        paragraph={curr.paragraph}
                        mb="0px"
                        width="100%"
                      />
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontEndSection;
