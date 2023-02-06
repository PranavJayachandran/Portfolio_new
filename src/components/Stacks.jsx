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
        <div className="bg-stack rounded-lg px-8 py-4">
          <AiFillHtml5 className="h-16 w-16" />
          <div className="text-center">HTML</div>
        </div>
        <div className="bg-stack px-8 py-4 rounded-lg">
          <DiCss3 className="h-16 w-16" />
          <div className="text-center">CSS</div>
        </div>
        <div className="bg-stack px-8 py-4 rounded-lg">
          <SiJavascript className="h-16 w-16" />
          <div className="text-center">Java Script</div>
        </div>
        <div className="bg-stack px-8 py-4 rounded-lg">
          <DiReact className="h-16 w-16" />
          <div className="text-center">ReactJs</div>
        </div>

        <div className="bg-stack px-8 py-4 rounded-lg">
          <FaNodeJs className="h-16 w-16" />
          <div className="text-center">NodeJS</div>
        </div>
        <div className="bg-stack px-8 py-4 rounded-lg">
          <SiExpress className="h-16 w-16" />
          <div className="text-center">ExpressJS</div>
        </div>
        <div className="bg-stack px-8 py-4 rounded-lg">
          <SiCplusplus className="h-16 w-16" />
          <div className="text-center">C++</div>
        </div>
        <div className="bg-stack px-8 py-4 rounded-lg">
          <SiTailwindcss className="h-16 w-16" />
          <div className="text-center">TailwindCSS</div>
        </div>
        <div className="bg-stack px-8 py-4 rounded-lg">
          <SiMongodb className="h-16 w-16" />
          <div className="text-center">MongoDB</div>
        </div>
        <div className="bg-stack px-8 py-4 rounded-lg">
          <FaPython className="h-16 w-16" />
          <div className="text-center">Python</div>
        </div>
        <div className="bg-stack px-8 py-4 rounded-lg">
          <SiSolidity className="h-16 w-16" />
          <div className="text-center">Solidty</div>
        </div>
      </div>
    </div>
  );
}
