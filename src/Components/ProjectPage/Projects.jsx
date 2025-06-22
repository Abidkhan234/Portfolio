import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import ProjectCard from "../Card/ProjectCard";

const Projects = ({ data, swiperBtn }) => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          prevEl: `.${swiperBtn[0].isClass}`,
          nextEl: `.${swiperBtn[1].isClass}`,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
            pagination: true,
          },
        }}
      >
        {data.map((v, i) => (
          <SwiperSlide key={i}>
            <div>
              <ProjectCard
                title={v.title}
                image={v.image}
                link={v.link}
                icon={v.iconArr}
                index={i}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
