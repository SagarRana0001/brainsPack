import SharePost from "@/components/services/SharePost";
import TagButton from "@/components/services/TagButton";
import Image from "next/image";

import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
    </>
  );
};

export default MobileApplication;
