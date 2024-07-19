import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MernSectionOne from "@/components/services/mobile-application/mern/FirstSection";
import MernSecondSection from "@/components/services/mobile-application/mern/secondSection";
import OurDevelopmentProcess from "@/components/services/webDevelopment/DevelopmentProcess";
import MernSectionThree from "@/components/services/mobile-application/mern/SectionThree";
import MernSectionLast from "@/components/services/mobile-application/mern/SectionLast";

export const metadata: Metadata = {
  title: "MERN Stack | Brainspack",
  description: "This is MERN Stack Details Page for Brainspack Nextjs",
  // other metadata
};

const MeanDevelopment = () => {
  return (
    <>
      <Breadcrumb
        route="Services / MERN"
        pageName="MERN Stack"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <MernSectionOne />
      <MernSecondSection />
      <OurDevelopmentProcess />
      <MernSectionThree />
      <MernSectionLast />
    </>
  );
};

export default MeanDevelopment;
