const SectionTitle = ({
  title,
  paragraph,
  width = "800px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[55px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-2xl ">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export const SectionTitleClient = ({
  title,
  paragraph,
  width = "900px",
  center,
  mb = "70px",
  mt="00px"
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  mt?:string
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginTop: mb, marginBottom:mt }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[55px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-2xl ">
          {paragraph}
        </p>
      </div>
    </>
  );
};
export const SectionTitleService = ({
  title,
  paragraph,
  width = "900px",
  center,
  mb = "70px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginTop: mb }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[55px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-2xl ">
          {paragraph}
        </p>
      </div>
    </>
  );
};
export const SectionTitleBlog = ({
  title,
  paragraph,
  width = "900px",
  center,
  mb = "70px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom:mb }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[55px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-2xl ">
          {paragraph}
        </p>
      </div>
    </>
  );
};
export const SectionTitleAbout = ({
  title,
  paragraph,
  width = "1000px",
  center,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[55px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-2xl ">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
