import Videobg from "../Video/video";

const AboutSectionTwo = () => {
  return (
    <section>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-6 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Videobg />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="max-w-[700px]">
              <div className="mb-4 py-8">
                <h3 className="text-[40px] font-bold">
                  Innovate. Elevate. Dominate.
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Social Pulse Studio brings innovative strategies to enhance
                  your social presence, elevating your brand to dominate the
                  market. Through cutting-edge techniques, we amplify your
                  business growth by converting your online presence into a
                  next-level brand, ensuring you stand out and succeed in the
                  competitive landscape.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-[40px] font-bold">
                  Inspiring brands, driving growth.
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Through innovative branding initiatives and storytelling, we
                  help your business stand out in a crowded digital landscape,
                  establishing a unique identity that resonates. Our analytics
                  team provides valuable insights into consumer behavior and
                  campaign performance, enabling continuous optimization for
                  maximum impact. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
