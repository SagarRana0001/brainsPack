import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MeanSectionOne from "@/components/services/mobile-application/mean/FirstSection";
import MeanSecondSection from "@/components/services/mobile-application/mean/secondSection";
import OurDevelopmentProcess from "@/components/services/webDevelopment/DevelopmentProcess";
import MeanSectionThree from "@/components/services/mobile-application/mean/SectionThree";
import MeanSectionLast from "@/components/services/mobile-application/mean/SectionLast";

export const metadata: Metadata = {
  title: "MEAN Stack | Brainspack",
  description: "This is MEAN Stack Details Page for Brainspack Nextjs",
  // other metadata
};

const MeanDevelopment = () => {
  return (
    <>
      <Breadcrumb
        route="Services / MEAN"
        pageName="MEAN Stack"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <MeanSectionOne />
      <MeanSecondSection />
      <OurDevelopmentProcess />
      <MeanSectionThree />
      <MeanSectionLast />
    </>
  );
};

export default MeanDevelopment;
