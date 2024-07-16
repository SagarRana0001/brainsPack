import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
    </>
  );
};

export default MeanDevelopment;
