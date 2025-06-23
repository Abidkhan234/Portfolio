import { NavLink } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";
import Button from "../../Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import CV from '../../../../My-CV/New-CV.pdf'

const HeroContent = ({ greetingText, introText, aboutMeText, isHomePage }) => {
  AOS.init();

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setTimeout(() => {
      setCount((val) => val + 1);
    }, 50);
  };
  useEffect(() => {
    if (count >= 10) {
      clearTimeout(handleCount);
    } else {
      handleCount();
    }
  }, [count]);

  return (
    <div className="md:col-span-6  col-span-12 py-3 flex flex-col gap-2 max-[767px]:order-2 overflow-hidden">
      <div className="flex justify-center md:justify-start items-center">
        <div
          className="bg-[#F5F3F0] px-2 py-1.5 rounded-md text-center"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay={`${(500 * 1) / 2}`}
          data-aos-easing="ease-in-out"
        >
          <span className="font-medium md:text-lg text-base">
            {greetingText}
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:gap-6 gap-5 md:items-start items-center">
        <div className="">
          <h1
            className={`${
              isHomePage
                ? "lg:text-5xl sm:text-4xl text-3xl"
                : "lg:text-6xl sm:text-5xl text-4xl"
            } font-semibold max-[767px]:text-center`}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={`${(500 * 2) / 2}`}
            data-aos-easing="ease-in-out"
          >
            {introText}
          </h1>
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay={`${(500 * 3) / 2}`}
          data-aos-easing="ease-in-out"
        >
          <p className="font-medium text-[14px] text-[#4D4D4D] max-[1024]:leading-6 max-[1024]:text-[13px] md:text-justify text-center">
            {aboutMeText}
          </p>
        </div>
        {isHomePage && (
          <>
            <div
              className="flex gap-3 items-center"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay={`${(500 * 4) / 2}`}
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-offset="10"
            >
              <a
                href={CV}
                download="Abid-Khan-CV.pdf"
              >
                <Button text={"CV"} icon={<LuDownload />} />
              </a>
              <NavLink to={"/projects"}>
                <Button
                  text={"View Projects"}
                  icon={<IoIosArrowRoundForward />}
                  isTransparent={true}
                />
              </NavLink>
            </div>
          </>
        )}
        <div
          className={`flex min-[455px]:justify-between items-center w-full md:py-3 lg:px-5 px-3  flex-wrap gap-3 justify-center md:flex-nowrap ${
            isHomePage
              ? "min-[766px]:bg-[#F7F6F3] rounded-md"
              : "md:border-t-2 md:border-b-2 border-[#5700FF]"
          }`}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay={`${(500 * 5) / 2}`}
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-offset="10"
        >
          <div className="flex flex-col gap-1 max-[767px]:bg-[#F7F6F3] rounded-md py-3 px-4">
            <div className="md:text-4xl text-3xl flex gap-1 items-center font-semibold justify-center">
              <span className="text-[#333333]">{count}</span>
              <span className="text-[#5700FF]">+</span>
            </div>
            <div className="">
              <p className="font-medium text-[14px] text-center text-[#4D4D4D]">
                Completed Projects
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 max-[767px]:bg-[#F7F6F3] rounded-md py-3 px-4">
            <div className="md:text-4xl text-3xl flex gap-1 items-center font-semibold justify-center">
              <span className="text-[#333333]">1</span>
              <span className="text-[#5700FF]">+</span>
            </div>
            <div className="">
              <p className="font-medium text-[14px] text-center text-[#4D4D4D]">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
