import SharePost from "@/components/services/SharePost";
import TagButton from "@/components/services/TagButton";
import Image from "next/image";

import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
    </>
  );
};

export default BlogDetailsPage;
