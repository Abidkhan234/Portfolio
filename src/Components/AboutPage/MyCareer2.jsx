import { FaStar } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const MyCareer2 = () => {
  return (
    <div className="">
      <div className="">
        <VerticalTimeline lineColor={"#9E00FF"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F7F6F3", color: "#333333" }}
            contentArrowStyle={{ borderRight: "10px solid  #F7F6F3" }}
            date="Now"
            iconStyle={{ background: "#9E00FF", color: "#fff" }}
            icon={<FaStar />}
          >
            <h3 className="vertical-timeline-element-title font-medium text-xl">
              Expanding Horizons
            </h3>

            <p>
              Continued advancing my frontend skills by building responsive web
              applications with React and Tailwind CSS. Focused on UI/UX
              enhancements, reusable components, and optimizing performance for
              modern user experiences.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F7F6F3", color: "#333333" }}
            contentArrowStyle={{ borderRight: "10px solid  #F7F6F3" }}
            date="2024"
            iconStyle={{ background: "#5EDC11", color: "#fff" }}
            icon={<FaStar />}
          >
            <h3 className="vertical-timeline-element-title font-medium text-xl">
              Collaborative Projects
            </h3>

            <p>
              Worked on real-world projects and clone websites to showcase
              practical frontend expertise. Strengthened my understanding of
              JavaScript frameworks and collaborated with other developers for
              hands-on learning.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default MyCareer2;
