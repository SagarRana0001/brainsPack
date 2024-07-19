import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MobileSectionOne from "@/components/services/mobile-application/FirstSection";
import MobileSecondSection from "@/components/services/mobile-application/secondSection";
import UiSectionThree from "@/components/services/ui-ux-designing/SectionThree";
import OurDevelopmentProcess from "@/components/services/webDevelopment/DevelopmentProcess";
import MobileSectionLast from "@/components/services/mobile-application/SectionLast";

export const metadata: Metadata = {
  title: "Mobile Application | Brainspack",
  description: "This is Mobile Application Page for Brainspack Nextjs",
  // other metadata
};

const MobileApplication = () => {
  return (
    <>
      <Breadcrumb
        route="Services / Mobile Application"
        pageName="Mobile Application"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <MobileSectionOne />
      <MobileSecondSection />
      <OurDevelopmentProcess />
      <UiSectionThree />
      <MobileSectionLast />
    </>
  );
};

export default MobileApplication;
