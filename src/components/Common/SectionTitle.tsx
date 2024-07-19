const SectionTitle = ({
  title,
  titleData,
  titleServicesData,
  techTitle,
  paragraph,
  techParagraph,
  width = "570px",
  center,
  mb = "100px",
  servicesBottom,
}: {
  title?: string;
  titleData?: string;
  techTitle?: string;
  titleServicesData?: string;
  paragraph?: string;
  techParagraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  servicesBottom?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className={`${servicesBottom || "mb-4"} text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]`}
        >
          {title}
        </h2>
        <h5 className="text-md mb-4 font-bold !leading-tight text-gray-600  dark:text-white sm:text-xl md:text-[20px]">
          {titleData}
        </h5>
        <h2 className="text-md m-0 mb-4 font-semibold !leading-[3rem] text-white  dark:text-white sm:text-xl md:text-[42px]">
          {titleServicesData}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
        <h4 className="text-md text-lg font-bold !leading-7  text-black  dark:text-white sm:text-xl md:text-[20px]">
          {techTitle}
        </h4>
        <p className="text-base !leading-8 text-body-color md:text-lg">
          {techParagraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
