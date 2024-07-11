const SectionTitle = ({
  title,
  titleData,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title?: string;
  titleData?: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <h5 className="text-md mb-4 font-bold !leading-tight text-gray-600  dark:text-white sm:text-xl md:text-[20px]">
          {titleData}
        </h5>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
