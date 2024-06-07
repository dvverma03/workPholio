import React from "react";
import SectionTitle, { SectionTitleAbout } from "../Common/SectionTitle";
import Video from "../Video";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List: React.FC<{ text: string }> = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-8 md:pt-8 lg:pt-10">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitleAbout
                title="About Us"
                paragraph="Welcome to Social PULSE STUDIOS, where we redefine digital innovation and propel businesses to new heights. As the ultimate digital platform for business growth, we bring over three years of unparalleled experience as a premier digital marketing agency. With a proven track record of success, we've proudly partnered with 100+ clients worldwide, delivering transformative results and driving impactful change."
              />
            </div>
            <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
              <svg
                width="450"
                height="556"
                viewBox="0 0 450 556"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="277"
                  cy="63"
                  r="225"
                  fill="url(#paint0_linear_25:217)"
                />
                <circle
                  cx="17.9997"
                  cy="182"
                  r="18"
                  fill="url(#paint1_radial_25:217)"
                />
                <circle
                  cx="76.9997"
                  cy="288"
                  r="34"
                  fill="url(#paint2_radial_25:217)"
                />
                <circle
                  cx="325.486"
                  cy="302.87"
                  r="180"
                  transform="rotate(-37.6852 325.486 302.87)"
                  fill="url(#paint3_linear_25:217)"
                />
                <circle
                  opacity="0.8"
                  cx="184.521"
                  cy="315.521"
                  r="132.862"
                  transform="rotate(114.874 184.521 315.521)"
                  stroke="url(#paint4_linear_25:217)"
                />
                <circle
                  opacity="0.8"
                  cx="356"
                  cy="290"
                  r="179.5"
                  transform="rotate(-30 356 290)"
                  stroke="url(#paint5_linear_25:217)"
                />
                <circle
                  opacity="0.8"
                  cx="191.659"
                  cy="302.659"
                  r="133.362"
                  transform="rotate(133.319 191.659 302.659)"
                  fill="url(#paint6_linear_25:217)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_25:217"
                    x1="-54.5003"
                    y1="-178"
                    x2="222"
                    y2="288"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_25:217"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
                  >
                    <stop
                      offset="0.145833"
                      stopColor="#4A6CF7"
                      stopOpacity="0"
                    />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_25:217"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
                  >
                    <stop
                      offset="0.145833"
                      stopColor="#4A6CF7"
                      stopOpacity="0"
                    />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
                  </radialGradient>
                  <linearGradient
                    id="paint3_linear_25:217"
                    x1="226.775"
                    y1="-66.1548"
                    x2="292.157"
                    y2="351.421"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_25:217"
                    x1="184.521"
                    y1="182.159"
                    x2="184.521"
                    y2="448.882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_25:217"
                    x1="356"
                    y1="110"
                    x2="356"
                    y2="470"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_25:217"
                    x1="118.524"
                    y1="29.2497"
                    x2="166.965"
                    y2="338.63"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Video />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
