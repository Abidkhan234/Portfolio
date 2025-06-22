import React from "react";


const MyCareer = () => {
  return (
    <div className="w-full h-[80vh]">
      <div className="flex flex-col justify-center items-center relative">
        <div className="px-4 py-1.5 bg-[#F7F6F3] rounded-md">
          <span className="font-medium text-base">Now</span>
        </div>
        <div className="lg:absolute top-37 right-90 bg-[#fff] py-2 px-3 flex items-center rounded-md">
          <span className="font-medium text-[13px] text-[#333333]">
            Expanding Horizons
          </span>
        </div>
        <div className=" w-[2px] bg-[#9E00FF] h-30"></div>
        <div className="bg-[#F7F6F3] w-8 h-8 rounded-full flex justify-center items-center">
          <p className="bg-[#9E00FF] rounded-full w-2 h-2"></p>
        </div>

        <div className="lg:absolute top-31 left-0 bg-[#fff] p-3 flex gap-2 items-center rounded-md w-full max-w-[520px]">
          <span className="bg-[#fff] w-5 h-5 absolute top-[50%] translate-y-[-50%] right-0 translate-x-2 rounded-tl-2xl rotate-[310deg] max-[1024px]:hidden"></span>
          <span className="font-medium text-[13px] text-[#333333]">
            Expanding Horizons Continuing on my path of growth and exploration,
            I expanded my skill set by delving into emerging technologies and
            design trends.
          </span>
          <div className="w-40">
            <img src={image1} className="w-full h-full object-cover" alt="" />
          </div>
        </div>

        <div className="w-[2px] bg-[#9E00FF] h-25"></div>

        <div className="px-4 py-1.5 bg-[#F7F6F3] rounded-md">
          <span className="font-medium text-base">2024</span>
        </div>
        <div className="w-[2px] bg-[#5EDC11] h-27"></div>
        <div className="bg-[#F7F6F3] w-8 h-8 rounded-full flex justify-center items-center">
          <p className="bg-[#5EDC11] rounded-full w-2 h-2"></p>
        </div>
        <div className="absolute bottom-0 translate-y-5 right-0 bg-[#fff] p-3 flex gap-2 items-center rounded-md w-full max-w-[520px]">
          <span className="bg-[#fff] w-5 h-5 absolute top-[50%] translate-y-[-50%] left-0 -translate-x-2 rounded-tl-2xl -rotate-[230deg]"></span>
          <div className="w-40">
            <img src={image2} className="w-full h-full object-cover" alt="" />
          </div>
          <span className="font-medium text-[13px] text-[#333333] text-center">
            I formed a strategic partnership with a digital marketing agency,
            combining my web design expertise with their marketing prowess. This
            collaboration.
          </span>
        </div>
        <div className="absolute bottom-0 translate-y-1 left-90 bg-[#fff] py-2 px-3 flex items-center rounded-md">
          <span className="font-medium text-[13px] text-[#333333]">
            A Collaborative Partnership
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyCareer;
