import SectionLayout2 from "../Components/SectionLayout/SectionLayout2";

import ReactImage1 from "../../public/image/ProjectPage/ProjectImages/Crypto-Dashboard image.PNG";
import ReactImage2 from "../../public/image/ProjectPage/ProjectImages/Web-XV-Clone.PNG";
import ReactImage3 from "../../public/image/ProjectPage/ProjectImages/Budget-App.PNG";
import ReactImage4 from "../../public/image/ProjectPage/ProjectImages/Product-Zone image.PNG";

import image1 from "../../public/image/ProjectPage/ProjectImages/Zentry clone image.PNG";
import image2 from "../../public/image/ProjectPage/ProjectImages/Saylani Heckaton Image.PNG";
import image3 from "../../public/image/ProjectPage/ProjectImages/Social Scoop Image.PNG";
import image4 from "../../public/image/ProjectPage/ProjectImages/Coffee Shop image.PNG";
import image5 from "../../public/image/ProjectPage/ProjectImages/Furniro.PNG";
import image6 from "../../public/image/ProjectPage/ProjectImages/Biccas-Clone.PNG";

import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiFillApi } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProjectPage = () => {
  const projectData1 = [
    {
      title: "Crypto Dashboard",
      image: ReactImage1,
      link: "https://crypto-dashboard-rho-gilt.vercel.app/",
      iconArr: [
        {
          icon: <IoLogoReact />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <RiTailwindCssFill />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <SiReactrouter />,
          bgColor: "bg-black",
          textColor: "text-red-500",
        },
      ],
    },
    {
      title: "Web-XV Clone",
      image: ReactImage2,
      link: "https://web-xv-clone-cxp6.vercel.app/",
      iconArr: [
        {
          icon: <IoLogoReact />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <RiTailwindCssFill />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <SiReactrouter />,
          bgColor: "bg-black",
          textColor: "text-red-500",
        },
      ],
    },
    {
      title: "Budget App",
      image: ReactImage3,
      link: "https://expense-budget-app.vercel.app/",
      iconArr: [
        {
          icon: <IoLogoReact />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <RiTailwindCssFill />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <SiReactrouter />,
          bgColor: "bg-black",
          textColor: "text-red-500",
        },
      ],
    },
    {
      title: "Product Zone",
      image: ReactImage4,
      link: "https://product-zone-eight.vercel.app/",
      iconArr: [
        {
          icon: <IoLogoReact />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <RiTailwindCssFill />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <AiFillApi />,
          bgColor: "bg-black",
          textColor: "text-white",
        },
      ],
    },
  ];

  const projectData2 = [
    {
      title: "Zentry Clone",
      image: image1,
      link: "https://zentry-clone-by-abid.vercel.app/",
      iconArr: [
        {
          icon: <FaHtml5 />,
          bgColor: "bg-orange-500",
          textColor: "text-white",
        },
        {
          icon: <FaCss3 />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <IoLogoJavascript />,
          bgColor: "bg-black",
          textColor: "text-yellow-400",
        },
      ],
    },
    {
      title: "Furniro (Group Project)",
      image: image5,
      link: "https://code-crafter-project.vercel.app/",
      iconArr: [
        {
          icon: <FaHtml5 />,
          bgColor: "bg-orange-500",
          textColor: "text-white",
        },
        {
          icon: <FaCss3 />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <IoLogoJavascript />,
          bgColor: "bg-black",
          textColor: "text-yellow-400",
        },
      ],
    },
    {
      title: "Saylani Heckaton",
      image: image2,
      link: "https://saylani-heckaton.netlify.app/",
      iconArr: [
        {
          icon: <FaHtml5 />,
          bgColor: "bg-orange-500",
          textColor: "text-white",
        },
        {
          icon: <FaCss3 />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <IoLogoJavascript />,
          bgColor: "bg-black",
          textColor: "text-yellow-400",
        },
      ],
    },
    {
      title: "Social Scoop Clone",
      image: image3,
      link: "https://social-scoop-clone.netlify.app/",
      iconArr: [
        {
          icon: <FaHtml5 />,
          bgColor: "bg-orange-500",
          textColor: "text-white",
        },
        {
          icon: <FaCss3 />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <IoLogoJavascript />,
          bgColor: "bg-black",
          textColor: "text-yellow-400",
        },
      ],
    },
    {
      title: "Coffee Shop Project",
      image: image4,
      link: "https://coffee-shop-project-1.netlify.app/",
      iconArr: [
        {
          icon: <FaHtml5 />,
          bgColor: "bg-orange-500",
          textColor: "text-white",
        },
        {
          icon: <FaCss3 />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <IoLogoJavascript />,
          bgColor: "bg-black",
          textColor: "text-yellow-400",
        },
      ],
    },
    {
      title: "Biccas Clone",
      image: image6,
      link: "https://biccas-clone.vercel.app/",
      iconArr: [
        {
          icon: <FaHtml5 />,
          bgColor: "bg-orange-500",
          textColor: "text-white",
        },
        {
          icon: <RiTailwindCssFill />,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        },
        {
          icon: <IoLogoJavascript />,
          bgColor: "bg-black",
          textColor: "text-yellow-400",
        },
      ],
    },
  ];

  const swiperBtns1 = [
    {
      isClass: "custom-swiper-next",
      icon: <IoIosArrowBack />,
    },
    {
      isClass: "custom-swiper-prev",
      icon: <IoIosArrowForward />,
    },
  ];

  const swiperBtns2 = [
    {
      isClass: "custom-swiper-next2",
      icon: <IoIosArrowBack />,
    },
    {
      isClass: "custom-swiper-prev2",
      icon: <IoIosArrowForward />,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <SectionLayout2
          title={"Projects done in 2025"}
          projectData={projectData1}
          swiperBtn={swiperBtns1}
        />
      </div>
      <div className="">
        <SectionLayout2
          title={"Projects done in 2024"}
          projectData={projectData2}
          swiperBtn={swiperBtns2}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
