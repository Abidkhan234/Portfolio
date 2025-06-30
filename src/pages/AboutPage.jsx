import React from "react";
import HeroSectionLayout from "../Components/Layout/HeroSectionLayout/HeroSectionLayout";
import SectionLayout from "../Components/SectionLayout/SectionLayout";
import MyCareer2 from "../Components/AboutPage/MyCareer2";

import image from "../../public/image/AboutPage/FINAL ABID-01.png";

const AboutPage = () => {
  const heroContentDetail = [
    {
      greetingText: "Welcome to the world of Frontend Developer!",
      headingText: "I'm Abid Khan",
      text: "Skilled Frontend Developer with hands-on experience in building responsive and modern websites using React, JavaScript, and Tailwind CSS. I specialize in creating clean, interactive user interfaces with a strong focus on performance and usability. Passionate about delivering pixel-perfect designs and enhancing user experience through thoughtful frontend development.",
      isHomepage: false,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        {heroContentDetail.map((v, i) => {
          return (
            <HeroSectionLayout
              isHome={false}
              greetingText={v.greetingText}
              headingText={v.headingText}
              text={v.text}
              isHomepage={v.isHomepage}
              image={image}
              key={i}
            />
          );
        })}
      </div>

      <div className="">
        <SectionLayout
          title={"Milestones of My Career"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Nisl ut neque tortor nulla felis nunc. Sit ac sed sed pulvinar sit purus morbi."
          }
          work={<MyCareer2 />}
        />
      </div>
    </div>
  );
};

export default AboutPage;
