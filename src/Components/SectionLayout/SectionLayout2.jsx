import SwiperButton from "../Button/SwiperButton";
import Projects from "../ProjectPage/Projects";

const SectionLayout2 = ({ title, projectData, swiperBtn }) => {
  return (
    <div className="flex flex-col gap-4 w-full mt-2">
      <div className="border-b-2 border-b-[#E1DBD1] py-2 flex justify-between items-center">
        <h2 className="font-medium min-[425px]:text-lg text-base">{title}</h2>
        <div className="flex sm:gap-5 gap-4 items-center">
          {swiperBtn.map((v, i) => {
            return <SwiperButton isClass={v.isClass} icon={v.icon} key={i} />;
          })}
        </div>
      </div>
      <div className="w-full">
        <Projects data={projectData} swiperBtn={swiperBtn} />
      </div>
    </div>
  );
};

export default SectionLayout2;
