import SharePost from "@/components/services/SharePost";
import TagButton from "@/components/services/TagButton";
import Image from "next/image";

import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
    </>
  );
};

export default DegitalMarketing;
