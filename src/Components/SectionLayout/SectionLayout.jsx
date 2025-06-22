import AOS from "aos";
import "aos/dist/aos.css";

const Sectionlayout = ({ title, description, work, isWidth }) => {
  AOS.init();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 items-center text-center">
        <h2
          className="md:text-3xl text-2xl font-semibold text-[#28292C]"
          data-aos-offset="90"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
        >
          {title}
        </h2>
        <p
          className={`font-medium text-sm text-[#4A4A4A]`}
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="90"
          data-aos-easing="ease-in-out"
        >
          {description}
        </p>
      </div>
      <>{work}</>
    </div>
  );
};

export default Sectionlayout;
