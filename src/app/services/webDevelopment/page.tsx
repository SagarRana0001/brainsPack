import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import WebSectionOne from "@/components/services/webDevelopment/WebDeveloper";
import FrontEndSection from "@/components/services/webDevelopment/FrontEndSection";
import BackEndSection from "@/components/services/webDevelopment/BackEndSection";
import OurDevelopmentProcess from "@/components/services/webDevelopment/DevelopmentProcess";
import WebSectionLast from "@/components/services/webDevelopment/WebSectionThree";

export const metadata: Metadata = {
  title: "Web Development | Brainspack",
  description: "This is Web Development Details Page for Brainspack Nextjs",
  // other metadata
};

const WebDevelopment = () => {
  return (
    <>
      <Breadcrumb
        route="Services / Web Development"
        pageName="Web Development"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <WebSectionOne />
      <FrontEndSection />
      <BackEndSection />
      <OurDevelopmentProcess />
      <WebSectionLast />
    </>
  );
};

export default WebDevelopment;
