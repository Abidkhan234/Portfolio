import { FiZap } from "react-icons/fi";
import { BiSolidDashboard } from "react-icons/bi";
import { FaCubes, FaPaintBrush } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillCards = () => {
  AOS.init();

  const cardData = [
    {
      title: "Mobile-Optimized Design",
      description:
        "Designed mobile-first interfaces ensuring seamless performance and responsiveness across all devices.",
      icon: <FiZap />,
    },
    {
      title: "Interactive User Interfaces",
      description:
        "Delivered dynamic interfaces that respond to user interactions for a more immersive experience.",
      icon: <HiOutlineCursorArrowRays />,
    },
    {
      title: "Multi-Page Application Experience",
      description:
        "Built intuitive navigation across multiple pages to improve user flow and app structure.",
      icon: <BiSolidDashboard />, // good for app structure & multi-pages
    },
    {
      title: "Component-Based Architecture",
      description:
        "Delivered scalable projects by structuring reusable UI components tailored to project needs.",
      icon: <FaCubes />, // modular / reusable structure
    },
    {
      title: "Consistent Theming and Branding",
      description:
        "Maintained brand consistency with unified styling, spacing, and color usage across all views.",
      icon: <FaPaintBrush />, // visual design + branding
    },
    {
      title: "Fast Load & Performance Focus",
      description:
        "Optimized assets and code to ensure quick loading times and smooth transitions across all pages.",
      icon: <MdSpeed />, // performance-focused
    },
  ];

  return (
    <div className="w-full grid grid-cols-12 gap-4">
      {cardData.map((v, i) => {
        return (
          <div
            className="lg:col-span-4 md:col-span-6 col-span-12 rounded-md bg-[#F7F6F3] flex flex-col gap-3 py-7 lg:px-5 px-3 shadow-md text-center items-center"
            key={i}
            data-aos-offset="120"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={`${(500 * i) / 2}`}
            data-aos-easing="ease-in-out"
          >
            <div className="w-full flex justify-center items-center">
              <div className="md:w-13 w-11 md:h-13 h-11 flex justify-center items-center bg-[#5700FF] inset-shadow-[0px_0px_4px_2px_#fff] rounded-md text-white">
                <span className="md:text-4xl text-2xl">{v.icon}</span>
              </div>
            </div>
            <div className="h-10">
              <h3 className="font-medium text-lg ">{v.title}</h3>
            </div>
            <div className="flex justify-center">
              <p className="text-[#4D4D4D] text-sm font-medium lg:max-w-[80%]">
                {v.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCards;
