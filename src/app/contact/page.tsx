import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch"
        description="You thoughts need to be discussed, So let's Schedule a Discussion Call to make you vision work with our technology Experience. "/>

      <Contact />
    </>
  );
};

export default ContactPage;