import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

export default function Footer() {
  return (
    <div className="bg-black text-white pt-10 ">
      <div className="flex flex-col justify-center bg-projects py-5 gap-4">
        <div className="flex justify-center text-xl">Nice To me</div>
        <div className="flex justify-center gap-5">
          <AiFillInstagram className="h-6 w-6 transition cursor-pointer hover:text-amber-400" />
          <AiFillLinkedin className="h-6 w-6 transition cursor-pointer hover:text-amber-400" />
          <SiCodechef className="h-6 w-6 transition cursor-pointer hover:text-amber-400" />
          <SiCodeforces className="h-6 w-6 transition cursor-pointer hover:text-amber-400" />
        </div>
      </div>
    </div>
  );
}
