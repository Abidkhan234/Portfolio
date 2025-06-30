import React from "react";

const HeroImage = ({ image }) => {
  return (
    <div className="flex justify-center items-center">
      <img src={image} alt="" className="lg:w-[90%] md:w-[100%] sm:w-[70%] max-[426px]:w-[75%] max-[376px]:w-full object-cover" />
    </div>
  );
};

export default HeroImage;
