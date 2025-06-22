import { FaEnvelope,  FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import { useAppContext } from "../../../Context/Context";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  AOS.init();

  const { mediaIcons, navLinks } = useAppContext();

  const detailArr = [
    {
      icon: <FaEnvelope />,
      text: "abidshahkhan237@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      text: "+92 3141208636",
    },
    {
      icon: <IoLocationSharp />,
      text: "Karachi",
    },
  ];

  return (
    <div className="flex flex-col gap-5 py-3">
      <div className="flex min-[437px]:justify-between items-center gap-4 flex-wrap justify-center">
        <div className="max-[376px]:w-full text-center">
          <h2
            className="font-semibold min-[425px]:text-2xl text-xl text-[#5700FF] uppercase"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={`${(500 * 0) / 2}`}
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Abid Khan
          </h2>
        </div>
        <div className="flex gap-4 items-center flex-wrap max-[426px]:justify-center max-[426px]:order-3 overflow-hidden">
          {navLinks.map((v, i) => {
            return (
              <NavLink
                key={i}
                to={v.path}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#fff]" : "bg-transparent"
                  } font-medium sm:text-lg text-base py-1.5 min-[426px]:px-3 px-2.5 rounded-md text-[#333333] active:scale-110 transition-transform`
                }
                data-aos="fade-up-right"
                data-aos-duration="500"
                data-aos-delay={`${(500 * (i + 1)) / 2}`}
                data-aos-easing="ease-in-out"
              >
                {v.text}
              </NavLink>
            );
          })}
        </div>
        <div className="flex items-center gap-3 max-[426px]:order-1">
          {mediaIcons.map((v, i) => {
            return (
              <NavLink
                to={v.path}
                className="min-[426px]:p-3 p-2 bg-[#5700FF] text-xl text-white rounded-md inset-shadow-[0_0_7px_2px_#fff]"
                key={i}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={`${(500 * (i + 4)) / 2}`}
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                {v.icon}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-2 border-[#E1DBD1] flex min-[426px]:justify-between items-center w-full max-w-[650px] py-2.5 px-4 rounded-sm flex-wrap justify-center max-[437px]:gap-4">
          {detailArr.map((v, i) => {
            return (
              <div className="flex gap-2 items-center" key={i}>
                <span className="text-sm text-[#5700FF]">{v.icon}</span>
                <span className="font-medium text-sm text-[#4D4D4D]">
                  {v.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <span className="font-medium text-sm text-[#4D4D4D] text-center">
          Copyright © 2025 Abid Khan. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
