import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "MERN Stack | Brainspack",
  description: "This is MERN Stack Details Page for Brainspack Nextjs",
  // other metadata
};

const MeanDevelopment = () => {
  return (
    <>
      <Breadcrumb
        route="Services / MERN"
        pageName="MERN Stack"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
    </>
  );
};

export default MeanDevelopment;
