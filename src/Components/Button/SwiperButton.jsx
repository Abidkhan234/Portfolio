import React from "react";

const SwiperButton = ({ isClass, icon }) => {
  return (
    <button
      className={`${isClass} text-[#333333] p-2 cursor-pointer bg-[#F5F3F0] stroke-1 stroke-[#E1DBD1] rounded-sm text-lg`}
    >
      {icon}
    </button>
  );
};

export default SwiperButton;
