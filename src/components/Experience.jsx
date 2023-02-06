import React, { useState, useRef, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../experience";

export default function Experience() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log(experience);
  });

  return (
    <div
      id="Experiences"
      className="bg-black text-white -mt-8  py-20 flex flex-col gap-10"
    >
      <div className="text-center text-5xl">Experience</div>
      <div className="mx-8 rounded-lg bg-[#292928]">
        <VerticalTimeline animate={true}>
          {experience.map((item, index) => (
            <VerticalTimelineElement
              className=""
              contentStyle={{
                background: index % 2 == 0 ? "#F72585" : "#7209B7",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: `7px solid  ${
                  index % 2 == 0 ? "#F72585" : "#7209B7"
                }`,
              }}
              date={item.time}
              iconStyle={{
                background: index % 2 == 0 ? "#F72585" : "#7209B7",
                color: "#fff",
              }}
            >
              <div className="text-xl font-semibold vertical-timeline-element-title">
                {item.name}
              </div>
              <div className="vertical-timeline-element-subtitle">
                {item.company}
              </div>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <div className="stub2">{message}</div>
    </div>
  );
}
