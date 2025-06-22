import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router";
import Button from "../Button/Button";
import { LuDownload } from "react-icons/lu";
import { useAppContext } from "../../../Context/Context";
import CV from "../../../.My-CV/New-CV.pdf";
const Sidebar = () => {
  const { toggleBtn, setToggleBtn, mediaIcons, navLinks } = useAppContext();

  return (
    <div className="w-full h-screen sm:px-5 px-3.5">
      <div className="absolute top-5 left-[50%] -translate-x-[50%] bg-red-500 rounded-full w-8 h-8 flex justify-center items-center">
        <button
          className="text-3xl text-white cursor-pointer"
          onClick={() => setToggleBtn(!toggleBtn)}
        >
          <IoClose />
        </button>
      </div>
      <div className="mt-25 h-full w-full">
        <div className="flex flex-col gap-y-10 items-center h-full">
          {navLinks.map((v, i) => {
            return (
              <NavLink
                key={i}
                to={v.path}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#fff]" : "bg-transparent"
                  } font-medium sm:text-lg text-base py-1.5 px-3 rounded-md text-[#333333]`
                }
              >
                {v.text}
              </NavLink>
            );
          })}
          <div>
            <a href={CV} download="Abid-Khan-CV.pdf">
              <Button text={"CV"} icon={<LuDownload />} />
            </a>
          </div>

          <div className="flex items-center gap-5">
            {mediaIcons.map((v, i) => {
              return (
                <NavLink
                  to={v.path}
                  className="p-3  bg-[#5700FF] text-xl text-white rounded-md inset-shadow-[0_0_7px_2px_#fff]"
                  key={i}
                >
                  {v.icon}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
