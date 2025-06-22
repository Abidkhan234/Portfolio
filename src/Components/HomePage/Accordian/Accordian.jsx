import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../../../Context/Context";
import AOS from "aos";
import "aos/dist/aos.css";

const Accordian = () => {
  AOS.init();

  const [selected, setSelected] = useState(null);

  const { FAQdata } = useAppContext();

  const toggleAccordian = (i) => {
    if (selected == i) {
      return setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <div className="h-full w-full p-2 flex justify-center items-center">
      <div className="bg-white w-full max-w-[800px] py-4 px-3 rounded-sm h-full">
        <div className="flex flex-col gap-3">
          {FAQdata.map((v, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-2 bg-[#EEEBE5] rounded-md sm:py-2 py-1.5 sm:px-4 px-2"
                data-aos-offset="150"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                <div
                  className="cursor-pointer flex justify-between items-center"
                  onClick={() => toggleAccordian(i)}
                >
                  <span className="font-medium md:text-xl text-base text-[#333333] me-1">
                    {v.question}
                  </span>
                  <div
                    className={`p-1 border-2 border-[#E1DBD1] rounded-md sm:text-xl text-lg`}
                  >
                    <p
                      className={`${
                        selected == i && "rotate-45"
                      } transition-transform`}
                    >
                      <GoPlus />
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    selected == i ? "block" : "hidden"
                  } overflow-hidden transition-all`}
                >
                  <p className="font-medium text-sm leading-6 text-[#4D4D4D]">
                    {v.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
