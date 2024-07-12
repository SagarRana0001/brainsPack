import ServicesBlog from "@/components/services/ServicesBlog";
import servicesData from "@/components/services/servicesData";
import ServicesSectionThree from "@/components/services/servicesThree";
import ServicesSectionMiddel from "@/components/services/sevicesMiddel";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "services Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Services = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className=" pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {servicesData?.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <ServicesBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className=" flex flex-wrap justify-center">
            <ServicesSectionMiddel />
          </div>
        </div>
        <ServicesSectionThree />
      </section>
    </>
  );
};

export default Services;
