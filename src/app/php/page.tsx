import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PhpSectionOne from "@/components/services/mobile-application/php/FirstSection";
import OurDevelopmentProcess from "@/components/services/webDevelopment/DevelopmentProcess";
import PhpSectionThree from "@/components/services/mobile-application/php/SectionThree";
import PhpSectionLast from "@/components/services/mobile-application/php/SectionLast";

export const metadata: Metadata = {
  title: "PHP | Brainspack",
  description: "This is PHP Stack Details Page for Brainspack Nextjs",
  // other metadata
};

const MeanDevelopment = () => {
  return (
    <>
      <Breadcrumb
        route="Services / PHP"
        pageName="PHP Stack"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <PhpSectionOne />
      <OurDevelopmentProcess />
      <PhpSectionThree />
      <PhpSectionLast />
    </>
  );
};

export default MeanDevelopment;
