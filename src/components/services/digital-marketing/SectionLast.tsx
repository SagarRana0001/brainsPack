import { digitalAccordionData } from "@/app/utils/constant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function DigitalSectionLast() {
  return (
    <section id="about" className="pb-10 ">
      <div className="container">
        <div className=" border border-body-color/[.15] p-10  dark:border-white/[.15] ">
          <div className=" flex flex-wrap">
            <div className=" w-full pr-4 lg:w-full">
              <div className="relative mx-auto   lg:mr-0"></div>
              <Accordion type="single" collapsible className="w-full">
                {digitalAccordionData.map((value, index) => (
                  <AccordionItem key={value.id} value={`${value.id}`}>
                    <AccordionTrigger className="text-xl font-normal leading-7 ">
                      {value?.heading}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm font-semibold leading-[3rem] text-[#777181]">
                      <p>
                        <span className="font-extrabold text-[#636568]">
                          {value?.tittleOne}
                        </span>
                        {value?.peraOne}
                      </p>
                      <p>
                        <span className="font-extrabold text-[#636568]">
                          {value?.tittleTwo}
                        </span>
                        {value?.peraTwo}
                      </p>
                      <p>
                        <span className="font-extrabold text-[#636568]">
                          {value?.tittleThree}
                        </span>
                        {value?.peraThree}
                      </p>
                      <p>
                        <span className="font-extrabold text-[#636568]">
                          {value?.tittleFour}
                        </span>
                        {value?.peraFour}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DigitalSectionLast;
