import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router";

const ProjectCard = ({ title, image, link, icon, index }) => {
  const [isSlected, setisSlected] = useState(null);

  const toggleSlected = (i) => {
    if (isSlected == i) {
      return setisSlected(null);
    } else {
      setisSlected(i);
      setTimeout(() => {
        setisSlected(null);
      }, 2000);
    }
  };

  return (
    <div
      className="rounded-md bg-white hover:shadow-[8px_11px_5px_-2px_rgba(0,_0,_0,_0.1)] sm:py-5 py-3 md:px-3 px-2.5 transition-shadow group group-active"
      onClick={() => toggleSlected(index)}
    >
      <div className="flex flex-col sm:gap-4 gap-3">
        <div className="text-center">
          <h4 className="sm:text-lg text-base font-semibold">{title}</h4>
        </div>
        <div className="h-full w-full">
          <div className="relative">
            <img
              src={image}
              alt=""
              className="lg:object-fill object-contain lg:h-[200px] h-full w-full rounded-md"
            />
            <div className="absolute bottom-1 right-1 -translate-x-1 -translate-y-1 z-10 flex items-center">
              <NavLink
                to={link}
                target="blank"
                className={`p-1 bg-[#fff] stroke-1 stroke-[#EBE7E0] rounded-md opacity-0 pointer-events-none invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 translate-y-5 ${
                  isSlected == index &&
                  "visible translate-y-0 pointer-events-auto opacity-100 transition-all duration-300"
                }`}
              >
                <span className="min-[376px]:text-2xl text-xl">
                  <GoArrowUpRight />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="">
            <h4 className="font-medium lg:text-lg text-base">
              Technology used in this project
            </h4>
          </div>
          <div className="flex gap-3">
            {icon.map((v, i) => {
              return (
                <span
                  className={`text-xl p-1.5 ${v.textColor} ${v.bgColor} rounded-md`}
                  key={i}
                >
                  {v.icon}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
