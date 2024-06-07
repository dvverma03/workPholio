/*import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="We help businesses reach their full potential by creating a brand identity that is authentic and reflective of them. We understand that every brand comes with its own unique challenges, and hence requires expertise. We join hands with you as your growth partners and focus on delivering a power-packed result each time!"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          
        </div>
      </section>
    </>
    
  );
};

export default Features;*/

import SectionTitle from "../Common/SectionTitle";
import { SingleFeatureEven, SingleFeatureOdd } from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section id="features" className="relative py-16 md:py-8 lg:py-10">
        <div className="container relative z-10">
          <SectionTitle
            title="Our Services"
            paragraph="We help businesses reach their full potential by creating a brand identity that is authentic and reflective of them. We understand that every brand comes with its own unique challenges, and hence requires expertise. We join hands with you as your growth partners and focus on delivering a power-packed result each time!"
            center
          />

          <div>
            {featuresData.map((feature, idx) =>
              idx % 2 === 0 ? (
                <SingleFeatureEven key={feature.id} feature={feature} />
              ) : (
                <SingleFeatureOdd key={feature.id} feature={feature} />
              ),
            )}
          </div>
        </div>

        {/* Add the SVG background image */}
        <Image
          src="/images/hero/shape-01.svg"
          alt="Background SVG"
          width={400} // specify the width of the SVG
          height={400} // specify the height of the SVG
          className="absolute right-0 top-0"
          style={{ zIndex: -1 }}
        />
      </section>
    </>
  );
};

export default Features;
