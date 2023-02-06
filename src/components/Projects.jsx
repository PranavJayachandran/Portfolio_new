import React from "react";
import { projects } from "../projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div id="Projects">
      <div className="flex flex-col gap-8 text-white bg-black">
        <div className="text-center text-5xl ">Projects</div>
        <div className="mx-8 rounded-lg px-32 flex flex-col justify-center py-4 gap-20 ">
          {projects.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  x: index % 2 == 0 ? "calc(-400px)" : "calc(400px)",
                  scale: 0,
                  opacity: 0,
                },
                visible: {
                  x: "calc(0px)",
                  scale: 1,
                  opacity: 0.8,
                  transition: {
                    delay: 0.1,
                  },
                },
              }}
              className="opacity-25 bg-projects flex gap-16 rounded-xl px-4"
            >
              <div className="w-5/12 py-10">
                <div className="flex justify-center">
                  <div className="h-52 w-96"></div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 py-8">
                <div className="text-3xl">{item.name}</div>
                <div className="mt-4 text-md">{item.decription}</div>
                <div className="mt-2 text-md">Stacks Used : {item.stacks}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
