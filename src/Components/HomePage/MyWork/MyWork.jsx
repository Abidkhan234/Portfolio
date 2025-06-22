import React, { useState } from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router";
import Button from "../../Button/Button";
import image1 from "../../../../public/image/HomePage/MyWorkImages/Crypto-Dashboard image.PNG";
import image2 from "../../../../public/image/HomePage/MyWorkImages/Web-XV-Clone.PNG";
import image3 from "../../../../public/image/HomePage/MyWorkImages/Budget-App.PNG";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import ProjectCard from "../../Card/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

const MyWork = () => {
  AOS.init();

  const projectData = [
    {
      title: "Crypto Dashboard",
      image: image1,
      link: "https://crypto-dashboard-rho-gilt.vercel.app",
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
      image: image2,
      link: "https://web-xv-clone-cxp6.vercel.app",
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
      image: image3,
      link: "https://expense-budget-app.vercel.app",
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
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-12 gap-4 w-full">
        {projectData.map((v, i) => {
          return (
            <div
              className="lg:col-span-4 sm:col-span-6 col-span-12"
              key={i}
              data-aos-offset="120"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${(500 * i) / 2}`}
              data-aos-easing="ease-in-out"
            >
              <ProjectCard
                title={v.title}
                image={v.image}
                link={v.link}
                icon={v.iconArr}
                index={i}
              />
            </div>
          );
        })}
      </div>
      <div
        className="flex justify-center items-center"
        data-aos-offset="200"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease"
      >
        <NavLink to={"projects"}>
          <Button text={"View All Projects"} icon={<GoArrowRight />} />
        </NavLink>
      </div>
    </div>
  );
};

export default MyWork;
