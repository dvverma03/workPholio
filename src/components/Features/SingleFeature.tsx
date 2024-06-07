import { Feature } from "@/types/feature";

export const SingleFeatureEven = ({ feature }: { feature: Feature }) => {
  const { video, title, paragraph } = feature;
  return (
    <div className="mt-16 flex w-full py-12 ">
      <div className="wow fadeInUp w-2/3 pt-20 " data-wow-delay=".15s">
        <h3 className=" text-[45px] py-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
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
        <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[700px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <video src={video} autoPlay muted loop/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export const SingleFeatureOdd = ({ feature }: { feature: Feature }) => {
  const { video, title, paragraph } = feature;
  return (
    <div className="mt-16 flex w-full py-12">
      <div
        className="relative mx-auto mb-4 aspect-[20/24] h-[300px] w-[400px] max-w-[500px] text-center lg:m-0"
        data-wow-delay=".15s"
      >
        <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[700px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <video src={video} autoPlay muted loop/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="wow fadeInUp w-2/3 pl-6 justify-center  pt-20" data-wow-delay=".15s">
        <h3 className=" text-[45px] py-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-xl font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
