import { HiBars3BottomRight } from "react-icons/hi2";
import { NavLink } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../Button/Button";
import { LuDownload } from "react-icons/lu";
import { useAppContext } from "../../../Context/Context";
import CV from "../../../My-CV/Abid-khan-CV.pdf";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { toggleBtn, setToggleBtn, navLinks } = useAppContext();
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY.current) > 50) {
        if (window.scrollY > lastScrollY.current) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        lastScrollY.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        showNavbar ? "translate-y-0" : "-translate-y-16"
      } w-full py-3 sm:px-5 px-3.5 fixed top-0 left-0 bg-[#EBE7E0] z-50 md:overflow-hidden transition-transform`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="">
          <h2
            className="font-semibold min-[425px]:text-3xl text-2xl text-[#5700FF] uppercase"
            data-aos="fade-up-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Abid Khan
          </h2>
        </div>
        <div className="md:flex items-center gap-4 hidden">
          {navLinks.map((v, i) => {
            return (
              <NavLink
                key={i}
                to={v.path}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#fff]" : "bg-transparent"
                  } font-medium sm:text-lg text-base py-1.5 px-3 rounded-md text-[#333333] active:scale-110 transition-transform`
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
          <div
            className=""
            data-aos="fade-up-right"
            data-aos-duration="500"
            data-aos-delay={`${(500 * 4) / 2}`}
            data-aos-easing="ease-in-out"
          >
            <a href={CV} download="Abid-Khan-CV.pdf">
              <Button text={"CV"} icon={<LuDownload />} />
            </a>
          </div>
        </div>

        <div
          className={`${
            toggleBtn
              ? "translate-x-0"
              : "translate-x-[100%] pointer-events-none"
          } fixed top-0 right-0 h-screen w-full min-[375px]:max-w-[300px] bg-[#EBE7E0] transition-transform duration-300`}
        >
          <Sidebar />
        </div>

        <div className="flex md:hidden">
          <button
            className="min-[425px]:text-3xl text-2xl cursor-pointer"
            onClick={() => setToggleBtn(!toggleBtn)}
          >
            <HiBars3BottomRight />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
