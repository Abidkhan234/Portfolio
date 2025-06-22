import Accordian from "../Components/HomePage/Accordian/Accordian";
import SkillCards from "../Components/Card/SkillCards";
import MyWork from "../Components/HomePage/MyWork/MyWork";
import Sectionlayout from "../Components/SectionLayout/SectionLayout";
import HeroSectionLayout from "../Components/Layout/HeroSectionLayout/HeroSectionLayout";

const HomePage = () => {
  const sectionDetail = [
    {
      title: "Creative Skills",
      description:
        "As a frontend developer, I possess a diverse set of skills and expertise to bring your web design visions to life",
      work: <SkillCards />,
    },
    {
      title: "My Recent Work",
      description: "Here are some my recent projects",
      work: <MyWork />,
    },
    {
      title: "Frequently Asked Questions",
      description: "Here are answers to some common questions",
      work: <Accordian />,
    },
  ];

  const heroContentDetail = [
    {
      greetingText: "Hello There 🤗",
      headingText: "Abid Khan Welcome’s You!",
      text: "I am a passionate and experienced frontend developer, dedicated to creating visually stunning and highly functional websites. Explore my portfolio to see the power of effective design in action",
      isHomepage: true,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10">
      <div className="w-full mt-3">
        {heroContentDetail.map((v, i) => {
          return (
            <HeroSectionLayout
              isHome={true}
              greetingText={v.greetingText}
              headingText={v.headingText}
              text={v.text}
              isHomepage={v.isHomepage}
              key={i}
            />
          );
        })}
      </div>
      {sectionDetail.map((v, i) => {
        return (
          <div className="w-full my-2" key={i}>
            <Sectionlayout
              title={v.title}
              description={v.description}
              work={v.work}
            />
          </div>
        );
      })}
    </section>
  );
};

export default HomePage;
