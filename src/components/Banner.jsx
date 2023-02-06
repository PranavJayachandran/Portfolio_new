import React from "react";
import { SvgBlob } from "react-svg-blob";
import bgme from "../assets/bgme.png";
import { ReactComponent as ReactLogo } from "../assets/blobanimation.svg";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <div id="Home">
      <div className="text-white pt-10 bg-black">
        <div className="flex flex-col sm:flex-row  py-10 px-20 justify-around">
          <div className="flex justify-center gap-4 flex-col flex-1">
            <div className="text-5xl">
              <Typewriter
                options={{
                  strings: ["Hai I am Pranav,", "Nice to Meet You"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
            </div>
            <div className="mt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo
              ligula, commodo eu ultrices eget, tempus ac felis. Mauris vel nisl
              eu ex hendrerit lobortis et sed justo. Orci varius.
            </div>
          </div>
          <div className="flex-1 flex justify-center ">
            <div className="z-0 flex flex-col">
              <div className="sm:-mt-40 -mt-20 -ml-4 z-10">
                <img src={bgme} className="h-[400px] sm:h-[600px]"></img>
              </div>
              <div className="sm:-mt-[400px] -mt-60 overflow-hidden">
                <ReactLogo className="z-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
