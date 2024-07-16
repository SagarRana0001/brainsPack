import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
    </>
  );
};

export default MeanDevelopment;
