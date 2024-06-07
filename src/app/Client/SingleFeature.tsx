import { Feature } from "@/types/feature";
import Videobg from "@/components/Video/video";
import Video from "@/components/Video";

export const SingleFeatureEven = ({ feature }: { feature: Feature }) => {
  const {title, paragraph } = feature;
  return (
    <div className=" flex w-full py-12 my-16 ">
      <div className="wow fadeInUp w-2/3 " data-wow-delay=".15s">
        <h3 className=" text-[45px] font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-xl font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
      <div
        className="relative mx-auto mb-4 aspect-[20/24] h-[300px] w-[400px] max-w-[500px] text-center lg:m-0"
        data-wow-delay=".15s"
      >
        <Video />
      </div>
    </div>
  );
};
export const SingleFeatureOdd = ({ feature }: { feature: Feature }) => {
  const { title, paragraph } = feature;
  return (
    <div className="mt-16 flex w-full py-12">
      <div
        className="relative mx-auto mb-4 aspect-[20/24] h-[300px] w-[400px] max-w-[500px] text-center lg:m-0"
        data-wow-delay=".15s"
      >
        <Video />
      </div>
      <div className="wow fadeInUp w-2/3 pl-6 justify-center" data-wow-delay=".15s">
        <h3 className=" text-[45px] font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-xl font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
