import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";

export default function Stacks() {
  return (
    <div id="Stacks" className="bg-black text-white">
      <div className="text-5xl text-center">Stacks</div>
      <div className="mx-8 my-8 bg-[#292928] rounded-2xl justify-center flex px-10 py-4 gap-8 flex-wrap">
        <div className="bg-stack rounded-lg sm:w-28 sm:h-28 w-[90px] h-20 flex flex-col justify-center items-center">
          <AiFillHtml5 className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">HTML</div>
        </div>
        <div className="bg-stack sm:w-28 sm:h-28 sm:w-28 sm:h-28 w-[90px] h-20 flex flex-col justify-center items-center rounded-lg">
          <DiCss3 className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">CSS</div>
        </div>
        <div className="bg-stack sm:w-28 sm:h-28 w-[90px] h-20 flex flex-col justify-center items-center rounded-lg">
          <SiJavascript className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">Java Script</div>
        </div>
        <div className="bg-stack sm:w-28 sm:h-28 w-[90px] h-20 flex flex-col justify-center items-center rounded-lg">
          <DiReact className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">ReactJs</div>
        </div>

        <div className="bg-stack sm:w-28 sm:h-28 w-[90px] h-20 flex flex-col justify-center items-center rounded-lg">
          <FaNodeJs className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">NodeJS</div>
        </div>
        <div className="bg-stack sm:w-28 sm:h-28 w-[90px] h-20 flex flex-col justify-center items-center rounded-lg">
          <SiExpress className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">ExpressJS</div>
        </div>
        <div className="bg-stack sm:w-28 sm:h-28 w-[90px] h-20 flex flex-col justify-center items-center rounded-lg">
          <SiCplusplus className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">C++</div>
        </div>
        <div className="bg-stack sm:w-28 sm:h-28 w-[90px] h-20 flex flex-col justify-center items-center rounded-lg">
          <SiTailwindcss className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">TailwindCSS</div>
        </div>
        <div className="bg-stack sm:w-28 sm:h-28 w-[90px] h-20 flex flex-col justify-center items-center rounded-lg">
          <SiMongodb className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">MongoDB</div>
        </div>
        <div className="bg-stack sm:w-28 sm:h-28 w-[90px] h-20 flex flex-col justify-center items-center rounded-lg">
          <FaPython className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">Python</div>
        </div>
        <div className="bg-stack sm:w-28 sm:h-28 w-24 h-24 flex flex-col justify-center items-center rounded-lg">
          <SiSolidity className="sm:h-16 sm:w-16 h-8 w-8" />
          <div className="text-center">Solidty</div>
        </div>
      </div>
    </div>
  );
}
