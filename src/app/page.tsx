import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/services";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import ServicesSectionMiddel from "@/components/services/sevicesMiddel";
import ServicesSectionThree from "@/components/services/servicesThree";

export const metadata: Metadata = {
  title: "Brainspack| Shaping the Future of Business with Web",
  description: "This is Home for Startup Nextjs ",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />

      <ServicesSectionThree />
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      <ServicesSectionMiddel />
      <Contact />
    </>
  );
}
