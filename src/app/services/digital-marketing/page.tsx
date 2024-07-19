import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import OurDevelopmentProcess from "@/components/services/webDevelopment/DevelopmentProcess";
import DigitalSectionOne from "@/components/services/ui-ux-designing/FirstSection";
import DigitalSecondSection from "@/components/services/ui-ux-designing/secondSection";
import UiSectionThree from "@/components/services/mobile-application/SectionThree";
import DigitalSectionLast from "@/components/services/digital-marketing/SectionLast";

export const metadata: Metadata = {
  title: "Digital Marketing | Brainspack",
  description: "This is Digital Marketing Page for Brainspack Nextjs",
  // other metadata
};

const DegitalMarketing = () => {
  return (
    <>
      <Breadcrumb
        route="Services / Digital Marketing"
        pageName="Digital Marketing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <DigitalSectionOne />
      <DigitalSecondSection />
      <OurDevelopmentProcess />
      <UiSectionThree />
      <DigitalSectionLast />
    </>
  );
};

export default DegitalMarketing;
