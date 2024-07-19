import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import UiUxSectionOne from "@/components/services/ui-ux-designing/FirstSection";
import UiSecondSection from "@/components/services/ui-ux-designing/secondSection";
import OurDevelopmentProcess from "@/components/services/webDevelopment/DevelopmentProcess";
import UiSectionThree from "@/components/services/ui-ux-designing/SectionThree";
import UiUxSectionLast from "@/components/services/ui-ux-designing/SectionLast";

export const metadata: Metadata = {
  title: "UI UX Designing | Brainspack",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <Breadcrumb
        route="Services / UI/UX Designing"
        pageName="UI/UX Designing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <UiUxSectionOne />
      <UiSecondSection />
      <OurDevelopmentProcess />
      <UiSectionThree />
      <UiUxSectionLast />
    </>
  );
};

export default BlogDetailsPage;
