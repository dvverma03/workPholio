import SectionTitle, { SectionTitleService } from "@/components/Common/SectionTitle";
import { SingleFeatureEven, SingleFeatureOdd } from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";
import Breadcrumb from "@/Common/Breadcrumb";

const Features = () => {
  return (
    <>
      <section id="features" className="relative pt-24 pb-12 md:pt-24 lg:pt-28">
        <div className="container relative z-10">
          
          <SectionTitleService
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
