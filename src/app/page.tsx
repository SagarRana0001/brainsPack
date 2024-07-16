import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/services";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Services from "./services/page";
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
      <Features />

      <ServicesSectionMiddel />
      <ServicesSectionThree />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
