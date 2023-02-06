import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div>
      <div className="bg-black text-white flex gap-32 text-xl py-4 font-mono pl-20 fixed z-10 w-full">
        <Link smooth to="/#Home">
          <div>Home</div>
        </Link>
        <Link smooth to="/#Stacks">
          <div>Stacks</div>
        </Link>
        <Link smooth to="/#Experiences">
          <div>Experiences</div>
        </Link>
        <Link smooth to="/#Projects">
          <div>Projects</div>
        </Link>
        <Link smooth to="/#CP">
          <div>CP</div>
        </Link>
      </div>
    </div>
  );
}
