import HeroContent from "../../HomePage/HeroSection/HeroContent";
import HeroImage from "../../HomePage/HeroSection/HeroImage";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSectionLayout = ({
  isHome,
  greetingText,
  headingText,
  text,
  isHomepage,
  image,
}) => {
  AOS.init();

  return (
    <div className={`grid grid-cols-12 gap-4 w-full mt-3 overflow-hidden`}>
      <div
        className={`md:col-span-6  col-span-12 ${
          isHome ? "max-[767px]:order-2" : "order-2"
        }`}
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay={`${(500 * 1) / 2}`}
        data-aos-easing="ease-in-out"
      >
        <HeroContent
          greetingText={greetingText}
          introText={headingText}
          aboutMeText={text}
          isHomePage={isHomepage}
        />
      </div>
      <div
        className={`md:col-span-6 col-span-12  ${
          isHome ? "max-[767px]:order-1" : "order-1"
        }`}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay={`${(500 * 2) / 2}`}
        data-aos-easing="ease-in-out"
      >
        <HeroImage image={image} />
      </div>
    </div>
  );
};

export default HeroSectionLayout;
