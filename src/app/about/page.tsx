import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionThree/>
      <AboutSectionTwo/>
    </>
  );
};

export default AboutPage;
