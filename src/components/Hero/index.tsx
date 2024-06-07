import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-8 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-10">
            <div className="mx-auto max-w-[1000px] text-center">
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  overflow: "hidden",
                }}
              >
                <h1
                  style={{
                    background:
                      "linear-gradient(to right, #4A6CF7, #FBB040)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "typing 2s steps(14, end) infinite",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  Empowering Your Digital Presence at
                </h1>
                <h1
                  style={{
                    background:
                      "linear-gradient(to right, #4A6CF7, #FBB040)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "typing 2s steps(14, end) infinite",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontSize: "4rem",
                    fontWeight: "bold",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  Social Pulse Studios
                </h1>
              </div>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Social Pulse Studio brings innovative strategies to enhance
                your social presence, elevating your brand to dominate the
                market. Through cutting-edge techniques, we amplify your
                business growth by converting your online presence into a
                next-level brand, ensuring you stand out and succeed in the
                competitive landscape.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                {/* Link component removed since it's not used */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        {/* SVGs removed for brevity */}
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        {/* SVGs removed for brevity */}
      </div>
    </section>
  );
};

export default Hero;
